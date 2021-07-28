/**
 * Given a number format it into a Currency.
 */
export const formatCurrency = (price: number, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(Number(price));
};
