/**
 * Shared data and data fetching functions
 */

export interface Product {
  id: string;
  name: string;
  price: number;
}

export const PRODUCTS: Product[] = [
  { id: "p1", name: "Starter Wallet", price: 4900 },
  { id: "p2", name: "Minimal Belt", price: 3900 },
  { id: "p3", name: "Classic Backpack", price: 8900 },
];

/**
 * Get all products
 * @returns Array of products with prices in cents
 * @example
 * const products = await getProducts();
 * console.log(products[0].name); // "Starter Wallet"
 */
export async function getProducts(): Promise<Product[]> {
  // In a real app, this would fetch from a database
  return PRODUCTS;
}
