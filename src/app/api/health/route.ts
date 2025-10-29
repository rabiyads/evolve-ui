import { NextResponse } from "next/server";

/**
 * Health check endpoint
 * Returns the current server status and timestamp
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    message: "Server is running smoothly!",
  });
}
