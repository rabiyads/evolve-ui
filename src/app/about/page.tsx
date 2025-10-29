import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "About - Evolve-UI",
  description: "Learn about the Evolve-UI starter template",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-32 bg-gradient-to-b from-primary/10 via-primary/5 to-background border-b">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              About Evolve-UI
            </h1>
            <p className="text-xl text-muted-foreground">
              From API to UI — where pixels meet products.
            </p>
            <p className="text-muted-foreground">
              A comprehensive Next.js learning template built with modern best
              practices for aspiring developers.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* What is Evolve-UI */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">What is Evolve-UI?</CardTitle>
                <CardDescription>
                  A comprehensive Next.js learning template
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Evolve-UI is a modern Next.js + TypeScript starter template
                  designed specifically for learning web development. It's built
                  with best practices in mind and includes everything you need to
                  start building production-ready applications.
                </p>
                <p>
                  This template is perfect for students who have completed CS50,
                  junior developers learning modern web development, QA engineers
                  wanting to understand frontend architecture, and designers
                  transitioning to development.
                </p>
              </CardContent>
            </Card>

            {/* Technology Stack */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Technology Stack</CardTitle>
                <CardDescription>
                  Modern tools and libraries for web development
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    Frontend Framework
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Next.js 16</Badge>
                    <Badge variant="secondary">React 19</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">UI Components</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>shadcn/ui</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>Radix UI</Badge>
                    <Badge>Lucide Icons</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Code Quality</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">ESLint</Badge>
                    <Badge variant="outline">TypeScript Strict</Badge>
                    <Badge variant="outline">Prettier Ready</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Testing</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Jest</Badge>
                    <Badge variant="secondary">React Testing Library</Badge>
                    <Badge variant="secondary">Playwright</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Learning Features</CardTitle>
                <CardDescription>
                  Examples to help you understand key concepts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "App Router with nested layouts (see Blog and Dashboard)",
                    "Server Components vs Client Components patterns",
                    "API Routes with TypeScript for backend functionality",
                    "Dark mode with next-themes and automatic system detection",
                    "Reusable UI components with shadcn/ui",
                    "Data fetching patterns (server and client-side)",
                    "Testing examples (unit, component, and E2E)",
                    "TypeScript strict mode for type safety",
                    "ESLint configuration for code quality",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Getting Started */}
            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="text-2xl">Getting Started</CardTitle>
                <CardDescription>
                  Explore and learn from practical examples
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  To start building with this template, explore the different
                  routes to see various Next.js patterns in action:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Blog</h4>
                    <p className="text-sm text-muted-foreground">
                      Demonstrates nested layouts and dynamic routes
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Dashboard</h4>
                    <p className="text-sm text-muted-foreground">
                      Shows complex nested layouts with multiple sections
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Home</h4>
                    <p className="text-sm text-muted-foreground">
                      Server-side data fetching and shadcn/ui components
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">API Routes</h4>
                    <p className="text-sm text-muted-foreground">
                      RESTful endpoints with TypeScript
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
