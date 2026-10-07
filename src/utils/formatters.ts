export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const calculateOldPrice = (
  price: number,
  discountPercentage = 12,
): number => {
  return price * (1 + discountPercentage / 100);
};

export const formatInstallments = (
  price: number,
  maxInstallments = 2,
): string => {
  const installmentValue = price / maxInstallments;
  return `ou ${maxInstallments}x de ${formatCurrency(installmentValue)} sem juros`;
};
