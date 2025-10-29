import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HealthCheck } from "@/components/HealthCheck";
import { formatMoney } from "@/lib/formatMoney";
import { getProducts } from "@/lib/data";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to{" "}
                <span className="text-primary">Evolve-UI</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl">
                From API to UI — where pixels meet products. A modern Next.js
                starter with shadcn/ui, dark mode, and best practices built in.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge variant="secondary" className="text-sm">
                Next.js 16
              </Badge>
              <Badge variant="secondary" className="text-sm">
                React 19
              </Badge>
              <Badge variant="secondary" className="text-sm">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="text-sm">
                shadcn/ui
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Tailwind CSS
              </Badge>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="h-11">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="h-11">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                </div>
                <CardTitle>Beautiful UI</CardTitle>
                <CardDescription>
                  Built with shadcn/ui components and Tailwind CSS for a modern,
                  polished look
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🌙</span>
                  </div>
                </div>
                <CardTitle>Dark Mode</CardTitle>
                <CardDescription>
                  Automatic dark mode support with system detection and manual
                  toggle
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <CardTitle>Type Safe</CardTitle>
                <CardDescription>
                  TypeScript in strict mode with ESLint for better code quality
                  and DX
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Example of server-side data fetching with the Next.js App Router
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <Card
                  key={p.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                  <CardHeader>
                    <CardTitle>{p.name}</CardTitle>
                    <CardDescription>Premium quality product</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold text-primary">
                        {formatMoney(p.price)}
                      </span>
                      <Badge>In Stock</Badge>
                    </div>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API Demo Section */}
      <section className="w-full py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                API Health Check
              </h2>
              <p className="text-muted-foreground">
                Live demonstration of client-side data fetching with loading,
                success, and error states
              </p>
            </div>
            <HealthCheck />
          </div>
        </div>
      </section>
    </div>
  );
}
