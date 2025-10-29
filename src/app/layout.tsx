import type { ReactNode } from "react";
import Link from "next/link";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

import "./globals.css";

export const metadata = {
  title: "Evolve-UI",
  description: "From API to UI — where pixels meet products.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <div className="flex flex-1 items-center justify-between">
                  {/* Logo */}
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">
                        E
                      </span>
                    </div>
                    <span className="font-bold text-xl hidden sm:inline-block">
                      Evolve-UI
                    </span>
                  </Link>

                  {/* Navigation */}
                  <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link
                      href="/"
                      className="transition-colors hover:text-primary text-muted-foreground hover:text-foreground"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="transition-colors hover:text-primary text-muted-foreground hover:text-foreground"
                    >
                      About
                    </Link>
                    <Link
                      href="/blog"
                      className="transition-colors hover:text-primary text-muted-foreground hover:text-foreground"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/dashboard"
                      className="transition-colors hover:text-primary text-muted-foreground hover:text-foreground"
                    >
                      Dashboard
                    </Link>
                    <div className="ml-2">
                      <ThemeToggle />
                    </div>
                  </nav>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                  Built with{" "}
                  <Link
                    href="https://nextjs.org"
                    target="_blank"
                    className="font-medium underline underline-offset-4 hover:text-primary"
                  >
                    Next.js
                  </Link>
                  ,{" "}
                  <Link
                    href="https://ui.shadcn.com"
                    target="_blank"
                    className="font-medium underline underline-offset-4 hover:text-primary"
                  >
                    shadcn/ui
                  </Link>
                  , and{" "}
                  <Link
                    href="https://tailwindcss.com"
                    target="_blank"
                    className="font-medium underline underline-offset-4 hover:text-primary"
                  >
                    Tailwind CSS
                  </Link>
                  .
                </p>
                <p className="text-sm text-muted-foreground">
                  © 2024 Evolve-UI. A learning template.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
