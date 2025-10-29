/**
 * Formats a number as a currency string in USD
 * @param amount - The amount to format
 * @returns Formatted currency string (e.g., "$12.34")
 *
 * @example
 * formatMoney(1234) // "$12.34"
 * formatMoney(0) // "$0.00"
 * formatMoney(-500) // "-$5.00"
 */
export function formatMoney(amount: number): string {
  const dollars = amount / 100;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(dollars);
}
