import type { ReactNode } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

/**
 * Nested layout for the blog section
 * This layout wraps all pages under /blog/*
 * Demonstrates how nested layouts work in Next.js App Router
 */
export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-3">Blog</h2>
            <nav className="space-y-2">
              <Link
                href="/blog"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                All Posts
              </Link>
              <Link
                href="/blog/getting-started"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Getting Started
              </Link>
              <Link
                href="/blog/nextjs-routing"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Next.js Routing
              </Link>
              <Link
                href="/blog/shadcn-ui"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Using shadcn/ui
              </Link>
            </nav>
          </div>

          <div className="pt-4 border-t">
            <h3 className="text-sm font-semibold mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Tutorial</Badge>
              <Badge variant="secondary">Guide</Badge>
              <Badge variant="secondary">Tips</Badge>
            </div>
          </div>
        </aside>

        {/* Main content area */}
        <main className="md:col-span-3">{children}</main>
      </div>
    </div>
  );
}
