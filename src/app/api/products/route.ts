import { NextResponse } from "next/server";
import { getProducts } from "@/lib/data";

export async function GET(): Promise<NextResponse> {
  const products = await getProducts();
  return NextResponse.json(products);
}
