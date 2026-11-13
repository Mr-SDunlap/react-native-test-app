const SYMBOLS: Record<string, string> = { USD: "$", EUR: "€", GBP: "£" };

export const formatPrice = (price: number, currency = "USD") =>
  `${SYMBOLS[currency] ?? ""}${price.toFixed(2)}`;

export const formatDaysLeft = (daysLeft: number) => {
  if (daysLeft <= 0) return "Today";
  if (daysLeft === 1) return "Tomorrow";
  return `${daysLeft} days left`;
};

// Cost per month, so yearly plans can be added to a monthly total
export const monthlyCost = (price: number, billing: string) =>
  billing.toLowerCase() === "yearly" ? price / 12 : price;
