import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// This would typically come from a database or CMS
const blogPosts: Record<
  string,
  {
    title: string;
    content: string;
    date: string;
    category: string;
  }
> = {
  "getting-started": {
    title: "Getting Started with Evolve-UI",
    date: "2024-01-15",
    category: "Tutorial",
    content: `
Welcome to Evolve-UI! This guide will help you get started with the template.

## What You'll Learn

In this tutorial, you'll learn how to:
- Set up your development environment
- Understand the project structure
- Create your first component
- Add new routes

## Prerequisites

Before you begin, make sure you have:
- Node.js 18 or later installed
- pnpm package manager
- A code editor (VS Code recommended)

## Installation

First, install the dependencies:

\`\`\`bash
pnpm install
\`\`\`

Then start the development server:

\`\`\`bash
pnpm dev
\`\`\`

Your app will be running at http://localhost:3000

## Project Structure

The template follows Next.js 16 App Router conventions:

- \`src/app/\` - All your routes and pages
- \`src/components/\` - Reusable React components
- \`src/components/ui/\` - shadcn/ui components
- \`src/lib/\` - Utility functions

## Next Steps

Now that you're set up, try exploring the other routes like /dashboard to see more complex layouts in action!
    `,
  },
  "nextjs-routing": {
    title: "Understanding Next.js App Router",
    date: "2024-01-20",
    category: "Guide",
    content: `
The Next.js App Router is a powerful routing system that uses the file system to define routes.

## How Routing Works

Every folder in the \`app\` directory becomes a route segment. For example:
- \`app/page.tsx\` → \`/\`
- \`app/about/page.tsx\` → \`/about\`
- \`app/blog/page.tsx\` → \`/blog\`

## Dynamic Routes

You can create dynamic routes using square brackets:
- \`app/blog/[slug]/page.tsx\` → \`/blog/any-post-name\`

This page you're reading is an example of a dynamic route!

## Nested Layouts

Layouts allow you to share UI between multiple pages. Notice how the blog sidebar stays consistent across all blog pages? That's because of the \`blog/layout.tsx\` file.

Layouts are:
- Shared across all child pages
- Don't re-render when navigating
- Can be nested for complex UIs

## Server Components by Default

All components in the App Router are Server Components by default. This means they:
- Run on the server
- Can fetch data directly
- Don't increase JavaScript bundle size
- Have better performance

Use \`"use client"\` directive when you need client-side features like hooks or browser APIs.
    `,
  },
  "shadcn-ui": {
    title: "Building UIs with shadcn/ui",
    date: "2024-01-25",
    category: "Tutorial",
    content: `
shadcn/ui is a collection of beautifully designed, accessible components that you can copy and paste into your apps.

## Why shadcn/ui?

Unlike traditional component libraries, shadcn/ui:
- Copies components directly into your project
- Gives you full control over the code
- Works with Tailwind CSS
- Is fully accessible (built on Radix UI)
- Supports dark mode out of the box

## Components Used in This Template

We've included several shadcn/ui components:

### Button
\`\`\`tsx
import { Button } from "@/components/ui/button";

<Button>Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
\`\`\`

### Card
\`\`\`tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
\`\`\`

### Badge
\`\`\`tsx
import { Badge } from "@/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
\`\`\`

## Customization

All components use CSS variables for theming. You can customize colors in \`globals.css\`:

\`\`\`css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... more variables */
}
\`\`\`

## Adding More Components

To add more shadcn/ui components, use the CLI:

\`\`\`bash
npx shadcn@latest add [component-name]
\`\`\`

This will automatically add the component to \`src/components/ui/\`.
    `,
  },
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Evolve-UI Blog`,
    description: post.title,
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge>{post.category}</Badge>
            <span className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-4xl font-bold">{post.title}</h1>
        </div>
      </CardHeader>
      <CardContent>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl font-semibold mt-6 mb-3">
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="ml-6">
                  {line.replace("- ", "")}
                </li>
              );
            }
            if (line.startsWith("```")) {
              return null; // Simplified code block handling
            }
            if (line.trim() === "") {
              return <br key={i} />;
            }
            return (
              <p key={i} className="mb-4">
                {line}
              </p>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
