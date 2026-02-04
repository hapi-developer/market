export const formatCurrency = (valueCents: number, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(valueCents / 100);
};

export const formatDate = (value: string) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
};
