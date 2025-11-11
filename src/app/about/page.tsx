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
        <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter">
  <span className="font-light">How we </span>
  <span className="font-bold">EVOLVE</span>
</h1>

            <p className="text-s text-gray-500">
              From API to UI — where pixels meet products.
            </p>
            <p className="text-xl text-gray-600">
              A comprehensive Next.js learning template built with modern best
              practices for aspiring developers.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="w-full py-12 md:py-20">
  <div className="container px-4 md:px-6">
    <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
      {/* Card 1 */}
      <Card className="p-6 md:p-8 h-full">
        <CardHeader>
          <CardTitle className="text-2xl">What is Evolve-UI?</CardTitle>
          <CardDescription>
            A comprehensive Next.js learning template
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Evolve-UI is a modern Next.js + TypeScript starter template designed specifically for learning web development.
          </p>
          <p>
            It's built with best practices in mind and includes everything you need to start building production-ready applications.
          </p>
        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card className="p-6 md:p-8 h-full">
        <CardHeader>
          <CardTitle className="text-2xl">Technology Stack</CardTitle>
          <CardDescription>
            Modern tools and libraries for web development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>Includes Next.js 16, React 19, TypeScript, Tailwind CSS, and shadcn/ui.</p>
          </div>
        </CardContent>
      </Card>

      {/* Add more cards here */}
      {/* Card 2 */}
      <Card className="p-6 md:p-8 h-full">
        <CardHeader>
          <CardTitle className="text-2xl">Technology Stack</CardTitle>
          <CardDescription>
            Modern tools and libraries for web development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>Includes Next.js 16, React 19, TypeScript, Tailwind CSS, and shadcn/ui.</p>
          </div>
        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card className="p-6 md:p-8 h-full">
        <CardHeader>
          <CardTitle className="text-2xl">Technology Stack</CardTitle>
          <CardDescription>
            Modern tools and libraries for web development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>Includes Next.js 16, React 19, TypeScript, Tailwind CSS, and shadcn/ui.</p>
          </div>
        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card className="p-6 md:p-8 h-full">
        <CardHeader>
          <CardTitle className="text-2xl">Technology Stack</CardTitle>
          <CardDescription>
            Modern tools and libraries for web development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>Includes Next.js 16, React 19, TypeScript, Tailwind CSS, and shadcn/ui.</p>
          </div>
        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card className="p-6 md:p-8 h-full">
        <CardHeader>
          <CardTitle className="text-2xl">Technology Stack</CardTitle>
          <CardDescription>
            Modern tools and libraries for web development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>Includes Next.js 16, React 19, TypeScript, Tailwind CSS, and shadcn/ui.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
    </div>
  );
} 
