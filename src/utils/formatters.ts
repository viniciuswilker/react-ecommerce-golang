export function formatMoney(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function categoryLabel(category: string) {
  const labels: Record<string, string> = {
    Calçados: "Calçados",
    Acessórios: "Acessórios",
    "Beleza e Saúde": "Beleza e Saúde",
  };

  return labels[category] ?? category;
}


