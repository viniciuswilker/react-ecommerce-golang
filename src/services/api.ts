import type { Product } from "../types/store";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:3001";

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return response.json();
}
