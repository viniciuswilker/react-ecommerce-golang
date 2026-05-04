export type Category =
  | "Vestidos"
  | "Parte de Cima"
  | "Calçados"
  | "Parte de Baixo"
  | "Acessórios"
  | "Beleza e Saúde";

export type Gender = "Feminino" | "Masculino" | "Unissex";
export type ProductTag = "Novo" | "Mais vendido" | "Fitness" | "Trend" | "Promo";
export type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  gender: Gender;
  tag: ProductTag;
  image: string;
  stock: number;
};

export type CartItem = Product & { quantity: number };

