import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Blog - Evolve-UI",
  description: "Learn about Next.js, TypeScript, and modern web development",
};

const blogPosts = [
  {
    slug: "getting-started",
    title: "Getting Started with Evolve-UI",
    description:
      "Learn how to set up your development environment and start building with this template.",
    date: "2024-01-15",
    category: "Tutorial",
  },
  {
    slug: "nextjs-routing",
    title: "Understanding Next.js App Router",
    description:
      "A deep dive into the Next.js App Router, nested layouts, and routing patterns.",
    date: "2024-01-20",
    category: "Guide",
  },
  {
    slug: "shadcn-ui",
    title: "Building UIs with shadcn/ui",
    description:
      "How to use shadcn/ui components to build beautiful, accessible user interfaces.",
    date: "2024-01-25",
    category: "Tutorial",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-muted-foreground">
          Tutorials and guides for learning modern web development
        </p>
      </div>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <Card key={post.slug}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </div>
                <Badge variant="secondary">{post.category}</Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <Button variant="outline" asChild>
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
