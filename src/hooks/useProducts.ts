import { useEffect, useState } from "react";
import { productImages } from "../data/storeAssets";
import { fetchProducts } from "../services/api";
import type { Product } from "../types/store";

function normalizeImageKey(imageKey: string) {
  return imageKey
    .replace(/‡/g, "c")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function resolveProductImage(imageKey: string, fallbackImage?: string) {
  if (productImages[imageKey]) return productImages[imageKey];

  const normalizedKey = normalizeImageKey(imageKey);
  if (productImages[normalizedKey]) return productImages[normalizedKey];

  return fallbackImage ?? imageKey;
}

export function useProducts(fallbackProducts: Product[]) {
  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadProducts() {
    setLoading(true);
    setError(null);

    try {
      const apiProducts = await fetchProducts();
      if (!Array.isArray(apiProducts) || apiProducts.length === 0) {
        setProducts(fallbackProducts);
        return;
      }

      const fallbackById = new Map(fallbackProducts.map((product) => [product.id, product]));

      setProducts(
        apiProducts.map((product) => {
          const productId = Number(product.id);
          const fallback = fallbackById.get(productId);

          return {
            ...product,
            id: productId,
            name: fallback?.name ?? product.name,
            description: fallback?.description ?? product.description,
            category: fallback?.category ?? product.category,
            gender: fallback?.gender ?? product.gender,
            tag: fallback?.tag ?? product.tag,
            image: resolveProductImage(product.image, fallback?.image),
          };
        }),
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? `${err.message}. Rode npm run server para iniciar o JSON Server.`
          : "Erro inesperado ao buscar produtos.",
      );
      setProducts(fallbackProducts);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadProducts();
  }, []);

  return { products, loading, error, reload: loadProducts };
}
