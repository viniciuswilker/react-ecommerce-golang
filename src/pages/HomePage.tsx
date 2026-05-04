import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownAZ,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Filter,
  Menu,
  Minus,
  Package,
  Plus,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { ErrorState, LoadingState, Toast } from "../components/StatusMessage";
import { useCart } from "../context/CartContext";
import { useProducts } from "../hooks/useProducts";
import logoLight from "../assets/store/icons/icon-bela-loja-claro.png";
import heroOne from "../assets/store/carrossel-hero/1.png";
import heroTwo from "../assets/store/carrossel-hero/2.png";
import heroThree from "../assets/store/carrossel-hero/3.png";
import promoOne from "../assets/store/carrossel-promocoes/4.png";
import promoTwo from "../assets/store/carrossel-promocoes/5.png";
import promoThree from "../assets/store/carrossel-promocoes/6.png";
import miniBest from "../assets/store/mini-images/mais-vendidos-image.png";
import miniFitness from "../assets/store/mini-images/fitness-image.png";
import miniTrends from "../assets/store/mini-images/trends-image.png";
import vestido1 from "../assets/store/produtos/vestido-1.png";
import vestido2 from "../assets/store/produtos/vestido-2.png";
import vestido3 from "../assets/store/produtos/vestido-3.png";
import camisaFeminina1 from "../assets/store/produtos/camisa-feminina-1.png";
import camisaFeminina2 from "../assets/store/produtos/camisa-feminina-2.png";
import camisaFeminina3 from "../assets/store/produtos/camisa-feminina-3.png";
import camisaMasculina1 from "../assets/store/produtos/camisa-masculina-1.png";
import camisaMasculina2 from "../assets/store/produtos/camisa-masculina-2.png";
import camisaMasculina4 from "../assets/store/produtos/camisa-masculina-4.png";
import inferiorFeminina1 from "../assets/store/produtos/inferior-feminina-1.png";
import inferiorFeminina2 from "../assets/store/produtos/inferior-feminina-2.png";
import inferiorFeminina3 from "../assets/store/produtos/inferior-feminina-3.png";
import shortsMasculino1 from "../assets/store/produtos/shorts-masculino-1.png";
import shortsMasculino2 from "../assets/store/produtos/shorts-masculino-2.png";
import shortsFeminino1 from "../assets/store/produtos/shorts-feminino-1.png";
import shortsFeminino2 from "../assets/store/produtos/shorts-feminino-2.png";
import calcaFitnessFeminina1 from "../assets/store/produtos/calca-fitness-feminina-1.png";
import camisaFitnessMasculina1 from "../assets/store/produtos/camisa-fitness-masculina-1.png";
import calcaFitnessFeminina2 from "../assets/store/produtos/calca-fitness-feminina-2.png";
import calcadoFeminino1 from "../assets/store/produtos/calcado-feminino-1.png";
import calcadoFeminino2 from "../assets/store/produtos/calcado-feminino-2.png";
import calcadoFitnessFeminino3 from "../assets/store/produtos/calcado-fitness-feminino-3.png";
import calcadoFitnessMasculino3 from "../assets/store/produtos/calcado-fitness-masculino-3.png";
import calcadoMasculino1 from "../assets/store/produtos/calcado-masculino-1.png";
import calcadoMasculino2 from "../assets/store/produtos/calcado-masculino-2.png";
import perfumeFeminino1 from "../assets/store/produtos/perfume-feminino-1.png";
import perfumeFeminino2 from "../assets/store/produtos/perfume-feminino-2.png";
import maquiagem1 from "../assets/store/produtos/maquiagem-1.png";
import maquiagem2 from "../assets/store/produtos/maquiagem-2.png";
import maquiagem3 from "../assets/store/produtos/maquiagem-3.png";
import colarFeminino1 from "../assets/store/produtos/colar-feminino-1.png";
import colarFeminino2 from "../assets/store/produtos/colar-feminino-2.png";
import colarMasculino1 from "../assets/store/produtos/colar-masculino-1.png";
import colarMasculino2 from "../assets/store/produtos/colar-masculino-2.png";
import bolsa1 from "../assets/store/produtos/bolsa-1.png";

type Category =
  | "Vestidos"
  | "Parte de Cima"
  | "Calçados"
  | "Parte de Baixo"
  | "Acessórios"
  | "Beleza e Saúde";
type Gender = "Feminino" | "Masculino" | "Unissex";
type SortKey = "featured" | "price-asc" | "price-desc" | "name";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  gender: Gender;
  tag: "Novo" | "Mais vendido" | "Fitness" | "Trend" | "Promo";
  image: string;
  stock: number;
};

type CartItem = Product & { quantity: number };

const fallbackProducts: Product[] = [
  {
    id: 1,
    name: "Vestido Belle Curto",
    description: "Vestido leve com caimento fluido para dias ensolarados.",
    price: 129.9,
    category: "Vestidos",
    gender: "Feminino",
    tag: "Mais vendido",
    image: vestido1,
    stock: 8,
  },
  {
    id: 2,
    name: "Vestido Luna Floral",
    description: "Estampa delicada, alças finas e toque macio.",
    price: 149.9,
    category: "Vestidos",
    gender: "Feminino",
    tag: "Novo",
    image: vestido2,
    stock: 5,
  },
  {
    id: 3,
    name: "Vestido Serena Midi",
    description: "Modelagem midi elegante para rotina e eventos.",
    price: 179.9,
    category: "Vestidos",
    gender: "Feminino",
    tag: "Trend",
    image: vestido3,
    stock: 3,
  },
  {
    id: 4,
    name: "Blusa Aurora",
    description: "Blusa feminina versátil com acabamento delicado.",
    price: 79.9,
    category: "Parte de Cima",
    gender: "Feminino",
    tag: "Promo",
    image: camisaFeminina1,
    stock: 12,
  },
  {
    id: 5,
    name: "Camisa Soft Rose",
    description: "Camisa confortável para composições casuais.",
    price: 89.9,
    category: "Parte de Cima",
    gender: "Feminino",
    tag: "Novo",
    image: camisaFeminina2,
    stock: 9,
  },
  {
    id: 6,
    name: "Top Essencial",
    description: "Peça coringa para looks rápidos e elegantes.",
    price: 69.9,
    category: "Parte de Cima",
    gender: "Feminino",
    tag: "Mais vendido",
    image: camisaFeminina3,
    stock: 11,
  },
  {
    id: 7,
    name: "Camiseta Urban",
    description: "Camiseta masculina básica com tecido respirável.",
    price: 74.9,
    category: "Parte de Cima",
    gender: "Masculino",
    tag: "Trend",
    image: camisaMasculina2,
    stock: 8,
  },
  {
    id: 8,
    name: "Polo Classic",
    description: "Polo masculina com gola estruturada e toque leve.",
    price: 99.9,
    category: "Parte de Cima",
    gender: "Masculino",
    tag: "Novo",
    image: camisaMasculina1,
    stock: 6,
  },
  {
    id: 9,
    name: "Camisa Minimal",
    description: "Camisa casual masculina em paleta neutra.",
    price: 119.9,
    category: "Parte de Cima",
    gender: "Masculino",
    tag: "Promo",
    image: camisaMasculina4,
    stock: 4,
  },
  {
    id: 10,
    name: "Calça Breeze",
    description: "Parte de baixo feminina leve, prática e urbana.",
    price: 94.9,
    category: "Parte de Baixo",
    gender: "Feminino",
    tag: "Novo",
    image: inferiorFeminina1,
    stock: 10,
  },
  {
    id: 11,
    name: "Calça Wide Bela",
    description: "Calça feminina ampla com cintura confortável.",
    price: 139.9,
    category: "Parte de Baixo",
    gender: "Feminino",
    tag: "Trend",
    image: inferiorFeminina2,
    stock: 7,
  },
  {
    id: 12,
    name: "Calça Alfaiataria",
    description: "Calça feminina elegante para dias quentes.",
    price: 99.9,
    category: "Parte de Baixo",
    gender: "Feminino",
    tag: "Promo",
    image: inferiorFeminina3,
    stock: 9,
  },
  {
    id: 13,
    name: "Shorts Resort",
    description: "Short masculino para lazer com bolso funcional.",
    price: 84.9,
    category: "Parte de Baixo",
    gender: "Masculino",
    tag: "Novo",
    image: shortsMasculino1,
    stock: 6,
  },
  {
    id: 14,
    name: "Shorts Weekend",
    description: "Modelagem relaxada para composições casuais.",
    price: 89.9,
    category: "Parte de Baixo",
    gender: "Masculino",
    tag: "Mais vendido",
    image: shortsMasculino2,
    stock: 6,
  },
  {
    id: 15,
    name: "Shorts Fresh",
    description: "Short feminino com visual limpo e confortável.",
    price: 79.9,
    category: "Parte de Baixo",
    gender: "Feminino",
    tag: "Promo",
    image: shortsFeminino1,
    stock: 12,
  },
  {
    id: 16,
    name: "Shorts Jeans Claro",
    description: "Jeans claro com barra moderna e cintura alta.",
    price: 109.9,
    category: "Parte de Baixo",
    gender: "Feminino",
    tag: "Trend",
    image: shortsFeminino2,
    stock: 5,
  },
  {
    id: 17,
    name: "Legging Move I",
    description: "Legging fitness feminina com sustentação suave.",
    price: 119.9,
    category: "Parte de Baixo",
    gender: "Feminino",
    tag: "Fitness",
    image: calcaFitnessFeminina1,
    stock: 15,
  },
  {
    id: 18,
    name: "Camiseta Dry Fit",
    description: "Camiseta masculina para treinos e caminhadas.",
    price: 89.9,
    category: "Parte de Cima",
    gender: "Masculino",
    tag: "Fitness",
    image: camisaFitnessMasculina1,
    stock: 14,
  },
  {
    id: 19,
    name: "Legging Move II",
    description: "Tecido elástico, cintura firme e secagem rápida.",
    price: 124.9,
    category: "Parte de Baixo",
    gender: "Feminino",
    tag: "Fitness",
    image: calcaFitnessFeminina2,
    stock: 10,
  },
  {
    id: 20,
    name: "Salto Nuvem",
    description: "Calçado feminino leve com solado confortável.",
    price: 199.9,
    category: "Calçados",
    gender: "Feminino",
    tag: "Novo",
    image: calcadoFeminino1,
    stock: 8,
  },
  {
    id: 21,
    name: "Sandália Urban",
    description: "Sandália feminina para looks casuais e elegantes.",
    price: 159.9,
    category: "Calçados",
    gender: "Feminino",
    tag: "Promo",
    image: calcadoFeminino2,
    stock: 6,
  },
  {
    id: 22,
    name: "Tênis Fit Feminino",
    description: "Tênis fitness com amortecimento para treino.",
    price: 219.9,
    category: "Calçados",
    gender: "Feminino",
    tag: "Fitness",
    image: calcadoFitnessFeminino3,
    stock: 4,
  },
  {
    id: 23,
    name: "Tênis Fit Masculino",
    description: "Tênis masculino para treino com ótima aderência.",
    price: 229.9,
    category: "Calçados",
    gender: "Masculino",
    tag: "Fitness",
    image: calcadoFitnessMasculino3,
    stock: 7,
  },
  {
    id: 24,
    name: "Sapato Coast",
    description: "Calçado masculino para ocasiões versáteis.",
    price: 189.9,
    category: "Calçados",
    gender: "Masculino",
    tag: "Trend",
    image: calcadoMasculino1,
    stock: 6,
  },
  {
    id: 25,
    name: "Sapato Casual Preto",
    description: "Sapato masculino básico com visual elegante.",
    price: 179.9,
    category: "Calçados",
    gender: "Masculino",
    tag: "Mais vendido",
    image: calcadoMasculino2,
    stock: 5,
  },
  {
    id: 26,
    name: "Perfume Jardim",
    description: "Fragrância feminina floral, suave e marcante.",
    price: 139.9,
    category: "Beleza e Saúde",
    gender: "Feminino",
    tag: "Novo",
    image: perfumeFeminino1,
    stock: 10,
  },
  {
    id: 27,
    name: "Perfume Dourado",
    description: "Notas doces com fundo amadeirado delicado.",
    price: 159.9,
    category: "Beleza e Saúde",
    gender: "Feminino",
    tag: "Mais vendido",
    image: perfumeFeminino2,
    stock: 8,
  },
  {
    id: 28,
    name: "Kit Glow I",
    description: "Maquiagem para acabamento natural e luminoso.",
    price: 89.9,
    category: "Beleza e Saúde",
    gender: "Feminino",
    tag: "Promo",
    image: maquiagem1,
    stock: 13,
  },
  {
    id: 29,
    name: "Corretivo Glow",
    description: "Corretivo essencial para bolsa e nécessaire.",
    price: 99.9,
    category: "Beleza e Saúde",
    gender: "Feminino",
    tag: "Trend",
    image: maquiagem2,
    stock: 9,
  },
  {
    id: 30,
    name: "Pó Compacto",
    description: "Pó compacto para finalizar maquiagem.",
    price: 119.9,
    category: "Beleza e Saúde",
    gender: "Feminino",
    tag: "Novo",
    image: maquiagem3,
    stock: 8,
  },
  {
    id: 31,
    name: "Colar Lumière",
    description: "Colar feminino delicado para sobreposições.",
    price: 59.9,
    category: "Acessórios",
    gender: "Feminino",
    tag: "Mais vendido",
    image: colarFeminino1,
    stock: 18,
  },
  {
    id: 32,
    name: "Colar Aurora",
    description: "Acessório feminino clássico com toque moderno.",
    price: 69.9,
    category: "Acessórios",
    gender: "Feminino",
    tag: "Novo",
    image: colarFeminino2,
    stock: 14,
  },
  {
    id: 33,
    name: "Corrente Steel",
    description: "Colar masculino discreto em visual urbano.",
    price: 74.9,
    category: "Acessórios",
    gender: "Masculino",
    tag: "Trend",
    image: colarMasculino1,
    stock: 10,
  },
  {
    id: 34,
    name: "Colar Noir",
    description: "Acessório masculino com acabamento escuro.",
    price: 79.9,
    category: "Acessórios",
    gender: "Masculino",
    tag: "Promo",
    image: colarMasculino2,
    stock: 7,
  },
  {
    id: 35,
    name: "Bolsa Matelassê",
    description: "Bolsa compacta com textura macia e alça prática.",
    price: 169.9,
    category: "Acessórios",
    gender: "Feminino",
    tag: "Mais vendido",
    image: bolsa1,
    stock: 6,
  },
];

const heroSlides = [
  { image: heroOne, title: "Produtos de pronta entrega", cta: "Compre Agora" },
  {
    image: heroTwo,
    title: "Achados para renovar o look",
    cta: "Ver Novidades",
  },
  { image: heroThree, title: "Beleza e moda em um só lugar", cta: "Explorar" },
];

const promotionSlides = [
  {
    image: promoOne,
    title: "Promoção Dia das Mães",
    subtitle: "Presentes cheios de carinho para surpreender.",
  },
  {
    image: promoTwo,
    title: "Looks com Até 35% OFF",
    subtitle: "Seleção especial para renovar o guarda-roupa.",
  },
  {
    image: promoThree,
    title: "Achadinhos da semana",
    subtitle: "Peças leves, modernas e prontas para envio.",
  },
];
const categories: Category[] = [
  "Vestidos",
  "Parte de Cima",
  "Calçados",
  "Parte de Baixo",
  "Acessórios",
  "Beleza e Saúde",
];
const genders: Array<Gender | "Todos"> = [
  "Todos",
  "Feminino",
  "Masculino",
  "Unissex",
];
const tags = ["Todos", "Novo", "Mais vendido", "Fitness", "Trend", "Promo"];
const pageSize = 8;

function formatMoney(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function App() {
  const {
    cart,
    cartCount,
    subtotal,
    shipping,
    total,
    addToCart: addCartItem,
    updateQuantity: updateCartQuantity,
  } = useCart();
  const [heroIndex, setHeroIndex] = useState(0);
  const [promoIndex, setPromoIndex] = useState(0);
  const [hiddenHeader, setHiddenHeader] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "Todos">("Todos");
  const [gender, setGender] = useState<Gender | "Todos">("Todos");
  const [tag, setTag] = useState("Todos");
  const [maxPrice, setMaxPrice] = useState(250);
  const [sort, setSort] = useState<SortKey>("featured");
  const [page, setPage] = useState(1);
  const [toast, setToast] = useState("");
  const { products, loading, error, reload: loadProducts } = useProducts(fallbackProducts);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
      setPromoIndex((current) => (current + 1) % promotionSlides.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;

    function onScroll() {
      if (window.innerWidth < 900) {
        setHiddenHeader(false);
        return;
      }
      const nextY = window.scrollY;
      setHiddenHeader(nextY > 130 && nextY > lastY);
      lastY = nextY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [query, category, gender, tag, maxPrice, sort]);

  useEffect(() => {
    const normalized = query.trim().toLowerCase();
    if (normalized.length < 2) return;

    const hasResult = products.some(
      (product) =>
        product.name.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized) ||
        product.category.toLowerCase().includes(normalized),
    );

    if (!hasResult) return;

    const timeout = window.setTimeout(() => {
      document
        .getElementById("produtos")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);

    return () => window.clearTimeout(timeout);
  }, [products, query]);

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    const list = products.filter((product) => {
      const matchesSearch =
        !normalized ||
        product.name.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized);
      const matchesCategory =
        category === "Todos" || product.category === category;
      const matchesGender =
        gender === "Todos" ||
        product.gender === gender ||
        product.gender === "Unissex";
      const matchesTag = tag === "Todos" || product.tag === tag;
      const matchesPrice = product.price <= maxPrice;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesGender &&
        matchesTag &&
        matchesPrice
      );
    });

    return [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      return a.id - b.id;
    });
  }, [category, gender, maxPrice, products, query, sort, tag]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const visibleProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  function addToCart(product: Product) {
    addCartItem(product);
    setToast(`${product.name} adicionado ao carrinho`);
    setCartOpen(true);
    window.setTimeout(() => setToast(""), 2600);
  }

  function updateQuantity(productId: number, quantity: number) {
    updateCartQuantity(productId, quantity);
  }

  function resetFilters() {
    setQuery("");
    setCategory("Todos");
    setGender("Todos");
    setTag("Todos");
    setMaxPrice(250);
    setSort("featured");
  }

  function scrollToProducts() {
    window.setTimeout(() => {
      document
        .getElementById("produtos")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function applyHeaderFilter(nextFilter: {
    category?: Category | "Todos";
    gender?: Gender | "Todos";
  }) {
    setQuery("");
    setTag("Todos");
    setMaxPrice(250);
    setSort("featured");
    setCategory(nextFilter.category ?? "Todos");
    setGender(nextFilter.gender ?? "Todos");
    scrollToProducts();
  }

  function toggleCategory(nextCategory: Category) {
    setQuery("");
    setGender("Todos");
    setTag("Todos");
    setCategory((current) =>
      current === nextCategory ? "Todos" : nextCategory,
    );
    scrollToProducts();
  }

  function toggleTag(nextTag: string) {
    setTag((current) => (current === nextTag ? "Todos" : nextTag));
  }

  return (
    <>
      <header className={`site-header ${hiddenHeader ? "is-hidden" : ""}`}>
        <div className="benefits-bar">
          <span>Devoluções grátis</span>
          <span>5% OFF no Pix</span>
          <strong>
            <Truck size={17} /> Frete grátis <small>veja condições</small>
          </strong>
        </div>

        <div className="nav-bar">
          <button
            className="icon-button mobile-only"
            type="button"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </button>

          <label className="search-box desktop-search">
            <Search size={21} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Pesquisar..."
            />
            {query && (
              <button
                type="button"
                aria-label="Limpar pesquisa"
                onClick={() => setQuery("")}
              >
                <X size={18} />
              </button>
            )}
          </label>

          <a className="brand-logo" href="#top" aria-label="Bela Loja">
            <img src={logoLight} alt="" />
          </a>

          <nav className="desktop-nav" aria-label="Categorias principais">
            <button
              type="button"
              onClick={() =>
                applyHeaderFilter({ category: "Todos", gender: "Todos" })
              }
            >
              Todos
            </button>
            <button
              type="button"
              onClick={() =>
                applyHeaderFilter({ category: "Todos", gender: "Feminino" })
              }
            >
              Moda Feminina
            </button>
            <button
              type="button"
              onClick={() =>
                applyHeaderFilter({ category: "Todos", gender: "Masculino" })
              }
            >
              Moda Masculina
            </button>
            <button
              type="button"
              onClick={() =>
                applyHeaderFilter({ category: "Acessórios", gender: "Todos" })
              }
            >
              Acessórios
            </button>
            <button
              type="button"
              onClick={() =>
                applyHeaderFilter({
                  category: "Beleza e Saúde",
                  gender: "Todos",
                })
              }
            >
              Beleza e Saúde
            </button>
          </nav>

          <div className="header-actions">
            <Package aria-hidden="true" />
            <button
              className="cart-button"
              type="button"
              aria-label="Abrir carrinho"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart />
              {cartCount > 0 && <span>{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-label="Destaques">
          <img
            key={heroSlides[heroIndex].image}
            src={heroSlides[heroIndex].image}
            alt=""
          />
          <div className="hero-content">
            <Sparkles className="sparkle-one" />
            <h1>{heroSlides[heroIndex].title}</h1>
            <a href="#produtos">{heroSlides[heroIndex].cta}</a>
          </div>
          <div className="slider-dots" aria-label="Slides do banner">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                className={heroIndex === index ? "active" : ""}
                type="button"
                aria-label={`Ir para ${slide.title}`}
                onClick={() => setHeroIndex(index)}
              />
            ))}
          </div>
        </section>

        <section className="promo-grid" aria-label="Promoções e coleções">
          <div className="promo-carousel">
            <img
              key={promotionSlides[promoIndex].image}
              src={promotionSlides[promoIndex].image}
              alt="Promoção em destaque"
            />
            <div className="promo-copy">
              <span>Especial Bela Loja</span>
              <h2>{promotionSlides[promoIndex].title}</h2>
              <p>{promotionSlides[promoIndex].subtitle}</p>
            </div>
            <div className="promo-dots">
              {promotionSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  className={promoIndex === index ? "active" : ""}
                  type="button"
                  onClick={() => setPromoIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="mini-banners">
            <button
              type="button"
              className={tag === "Mais vendido" ? "active" : ""}
              onClick={() => toggleTag("Mais vendido")}
            >
              <span>Mais vendidos</span>
              <img src={miniBest} alt="" />
            </button>
            <button
              type="button"
              className={tag === "Fitness" ? "active" : ""}
              onClick={() => toggleTag("Fitness")}
            >
              <span>Fitness</span>
              <img src={miniFitness} alt="" />
            </button>
            <button
              type="button"
              className={tag === "Trend" ? "active" : ""}
              onClick={() => toggleTag("Trend")}
            >
              <span>Trends</span>
              <img src={miniTrends} alt="" />
            </button>
          </div>
        </section>

        <section className="category-strip" aria-label="Categorias">
          {categories.slice(0, 5).map((item) => {
            const product = products.find((entry) => entry.category === item);
            return (
              <button
                key={item}
                className={category === item ? "active" : ""}
                type="button"
                onClick={() => toggleCategory(item)}
              >
                <img src={product?.image} alt="" />
                <span>{item}</span>
              </button>
            );
          })}
        </section>

        <section className="products-section" id="produtos">
          <div className="section-heading">
            <div>
              <p>Catálogo</p>
              <h2>Produtos</h2>
            </div>
            <button
              className="filter-toggle"
              type="button"
              onClick={() => setFiltersOpen((current) => !current)}
            >
              <Filter />
              <span>Filtrar</span>
            </button>
          </div>

          <label className="search-box mobile-search">
            <Search size={20} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Pesquisar produtos..."
            />
            {query && (
              <button
                type="button"
                aria-label="Limpar pesquisa"
                onClick={() => setQuery("")}
              >
                <X size={18} />
              </button>
            )}
          </label>

          <div
            className={`catalog-layout ${filtersOpen ? "show-filters" : ""}`}
          >
            <aside className="filters-panel" aria-label="Filtros de produtos">
              <div className="filters-title">
                <SlidersHorizontal />
                <strong>Filtros</strong>
              </div>

              <label>
                Categoria
                <select
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value as Category | "Todos")
                  }
                >
                  <option>Todos</option>
                  {categories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label>
                Público
                <select
                  value={gender}
                  onChange={(event) =>
                    setGender(event.target.value as Gender | "Todos")
                  }
                >
                  {genders.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label>
                Coleção
                <select
                  value={tag}
                  onChange={(event) => setTag(event.target.value)}
                >
                  {tags.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label>
                Até {formatMoney(maxPrice)}
                <input
                  type="range"
                  min="50"
                  max="250"
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(Number(event.target.value))}
                />
              </label>

              <label>
                Ordenar
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value as SortKey)}
                >
                  <option value="featured">Destaques</option>
                  <option value="price-asc">Menor preço</option>
                  <option value="price-desc">Maior preço</option>
                  <option value="name">Nome A-Z</option>
                </select>
              </label>

              <button
                className="ghost-button"
                type="button"
                onClick={resetFilters}
              >
                <ArrowDownAZ size={18} /> Limpar filtros
              </button>
            </aside>

            <div className="product-results">
              <div className="results-summary">
                <span>{filteredProducts.length} produto(s) encontrados</span>
                <strong>
                  {category === "Todos" ? "Todos os produtos" : category}
                </strong>
              </div>

              {loading ? (
                <LoadingState />
              ) : error ? (
                <ErrorState message={error} onRetry={loadProducts} />
              ) : visibleProducts.length > 0 ? (
                <div className="products-grid">
                  {visibleProducts.map((product) => (
                    <article className="product-card" key={product.id}>
                      <button
                        className="product-image-button"
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <img src={product.image} alt={product.name} />
                      </button>
                      <span className="product-tag">{product.tag}</span>
                      <button
                        className="product-title"
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                      >
                        {product.name}
                      </button>
                      <p>{product.description}</p>
                      <div className="product-footer">
                        <strong>{formatMoney(product.price)}</strong>
                        <button
                          type="button"
                          aria-label={`Adicionar ${product.name} ao carrinho`}
                          onClick={() => addToCart(product)}
                        >
                          <ShoppingCart size={20} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <Sparkles />
                  <h3>Nenhum produto encontrado</h3>
                  <p>Ajuste os filtros para ver mais opções da Bela Loja.</p>
                  <button
                    className="ghost-button"
                    type="button"
                    onClick={resetFilters}
                  >
                    Limpar filtros
                  </button>
                </div>
              )}

              <div className="pagination">
                <button
                  type="button"
                  disabled={page === 1}
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                >
                  <ChevronLeft size={18} /> Anterior
                </button>
                <span>
                  Página {page} de {totalPages}
                </span>
                <button
                  type="button"
                  disabled={page === totalPages}
                  onClick={() =>
                    setPage((current) => Math.min(totalPages, current + 1))
                  }
                >
                  Próxima <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Encontre-nos em</strong>
          <p>Facebook Instagram X YouTube Pinterest Snapchat TikTok LinkedIn</p>
        </div>
        <div>
          <strong>App</strong>
          <p>iOS Android</p>
        </div>
        <div>
          <strong>Pagamento</strong>
          <p>Pix Mastercard Visa Elo Boleto PayPal Caixa Apple Pay</p>
        </div>
        <small>
          Ajuda
          <br />
          Suporte
          <br />
          Bela Loja todos os direitos reservados
        </small>
      </footer>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="close-button"
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            <X />
          </button>
          <img src={logoLight} alt="Bela Loja" />
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                applyHeaderFilter({ category: item, gender: "Todos" });
                setMenuOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {cartOpen && (
        <CartDrawer
          cart={cart}
          subtotal={subtotal}
          shipping={shipping}
          total={total}
          onClose={() => setCartOpen(false)}
          onQuantityChange={updateQuantity}
        />
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAdd={addToCart}
        />
      )}

      {toast && <Toast message={toast} />}
    </>
  );
}

function CartDrawer({
  cart,
  subtotal,
  shipping,
  total,
  onClose,
  onQuantityChange,
}: {
  cart: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  onClose: () => void;
  onQuantityChange: (productId: number, quantity: number) => void;
}) {
  return (
    <div
      className="drawer-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Carrinho"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside className="cart-drawer">
        <div className="drawer-header">
          <div>
            <p>Resumo</p>
            <h2>Carrinho</h2>
          </div>
          <button
            className="close-button"
            type="button"
            aria-label="Fechar carrinho"
            onClick={onClose}
          >
            <X />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <ShoppingCart />
              <h3>Seu carrinho está vazio</h3>
              <p>
                Adicione produtos para visualizar o resumo antes de finalizar.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <span>{formatMoney(item.price)}</span>
                  <div className="quantity-control">
                    <button
                      type="button"
                      aria-label="Diminuir quantidade"
                      onClick={() =>
                        onQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      <Minus size={15} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      aria-label="Aumentar quantidade"
                      onClick={() =>
                        onQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="cart-summary">
          <span>
            <small>Subtotal</small>
            <strong>{formatMoney(subtotal)}</strong>
          </span>
          <span>
            <small>Frete</small>
            <strong>{shipping === 0 ? "Grátis" : formatMoney(shipping)}</strong>
          </span>
          <span className="total">
            <small>Total</small>
            <strong>{formatMoney(total)}</strong>
          </span>
          <button type="button" disabled={cart.length === 0}>
            <CreditCard size={19} /> Finalizar compra
          </button>
        </div>
      </aside>
    </div>
  );
}

function ProductModal({
  product,
  onClose,
  onAdd,
}: {
  product: Product;
  onClose: () => void;
  onAdd: (product: Product) => void;
}) {
  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article className="product-modal">
        <button
          className="close-button"
          type="button"
          aria-label="Fechar produto"
          onClick={onClose}
        >
          <X />
        </button>
        <img src={product.image} alt={product.name} />
        <div>
          <span className="product-tag">{product.tag}</span>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <dl>
            <div>
              <dt>Categoria</dt>
              <dd>{product.category}</dd>
            </div>
            <div>
              <dt>Público</dt>
              <dd>{product.gender}</dd>
            </div>
            <div>
              <dt>Estoque</dt>
              <dd>{product.stock} unidade(s)</dd>
            </div>
          </dl>
          <strong className="modal-price">{formatMoney(product.price)}</strong>
          <button
            type="button"
            onClick={() => {
              onAdd(product);
              onClose();
            }}
          >
            <ShoppingCart size={20} /> Adicionar ao carrinho
          </button>
        </div>
      </article>
    </div>
  );
}

export default App;





