# Evolve-UI

**Tagline:** _From API to UI — where pixels meet products._

A modern Next.js + TypeScript starter template designed for learning and building web applications with best practices built in.

## Audience & Purpose

This template is designed for:

- **11-12 year olds** who have completed CS50 or similar introductory programming courses
- **Junior developers** learning modern web development
- **QA engineers** wanting to understand frontend architecture
- **Designers** transitioning to development

**Purpose:** Provide a clean, well-tested foundation with strong guardrails that teaches good coding habits while staying simple enough to build upon.

## Quick Start

```bash
# Install dependencies (requires Node.js 18+)
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

## Project Structure

```
evolve-ui/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with global styles
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Tailwind CSS imports
│   │   └── api/               # API routes
│   │       ├── products/      # Products endpoint
│   │       └── health/        # Health check endpoint
│   ├── components/            # Reusable React components
│   │   ├── Button.tsx         # Example button component
│   │   └── HealthCheck.tsx    # Client-side fetch demo
│   └── lib/                   # Utility functions
│       └── formatMoney.ts     # Currency formatting helper
├── __tests__/                 # Jest unit tests
│   ├── lib/
│   │   └── formatMoney.test.ts
│   └── components/
│       └── Button.test.tsx
├── e2e/                       # Playwright end-to-end tests
│   └── home.spec.ts
├── eslint.config.mjs          # ESLint configuration
├── jest.config.ts             # Jest configuration
├── playwright.config.ts       # Playwright configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## Key Configs Explained

### TypeScript (`tsconfig.json`)

- **Strict mode enabled**: Catches more bugs during development
- **Path aliases**: Use `@/` instead of `../../` for imports
- **ES2022 target**: Modern JavaScript features

### ESLint (`eslint.config.mjs`)

Enforces code quality with:

- **No unused imports**: Auto-removes with `pnpm lint:fix`
- **TypeScript best practices**: Prevents common mistakes
- **Explicit return types**: Warns when functions don't have return types
- **No `any` types**: Warns when using `any` instead of proper types
- **Prefer const**: Encourages immutable variables

### Jest (`jest.config.ts`)

- Uses Next.js built-in configuration
- Supports TypeScript and path aliases
- Includes `@testing-library/jest-dom` matchers

### Playwright (`playwright.config.ts`)

- Runs tests in Chromium
- Auto-starts dev server for testing
- Generates HTML reports

### shadcn/ui Components (`components.json`)

This project uses shadcn/ui - a collection of reusable components built with Radix UI and Tailwind CSS.

**What is shadcn/ui?**
- Not a traditional component library (doesn't install via npm)
- Components are copied directly into your project
- Full control over the code
- Built with Radix UI for accessibility
- Styled with Tailwind CSS
- Supports dark mode out of the box

**Included Components:**
- `Button` - Multiple variants (default, outline, ghost, destructive)
- `Card` - Container with header, content, footer sections
- `Badge` - Labels and status indicators
- `Switch` - Toggle switch for settings

**Adding More Components:**
```bash
npx shadcn@latest add [component-name]
```

Examples:
```bash
npx shadcn@latest add input        # Add Input component
npx shadcn@latest add dialog       # Add Dialog component
npx shadcn@latest add dropdown-menu  # Add Dropdown Menu
```

**Using Components:**
```typescript
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Hello</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Click me</Button>
  </CardContent>
</Card>
```

**Customization:**
All components use CSS variables defined in `globals.css`. You can customize the entire theme by changing these variables:

```css
:root {
  --primary: 221.2 83.2% 53.3%;      /* Blue for light mode */
  --background: 0 0% 100%;            /* White background */
  /* ... more variables */
}

.dark {
  --primary: 217.2 91.2% 59.8%;      /* Lighter blue for dark mode */
  --background: 222.2 84% 4.9%;       /* Dark background */
}
```

## Tailwind CSS v4 & Modern Colors

This template uses **Tailwind CSS v4**, which represents a major shift in how Tailwind works.

### What Changed in Tailwind v4?

**Philosophy Shift:**
- **From "utility-first" to "utility-native"**: Tailwind v4 is now built from the ground up for modern CSS
- **Faster builds**: New engine built in Rust makes everything much faster
- **Simpler config**: Less configuration needed, more works out of the box
- **Native CSS features**: Better use of modern CSS capabilities like CSS variables and `@layer`

**Key Changes:**
- **Zero-config by default**: Works without `tailwind.config.js` for basic usage
- **Better performance**: Up to 10x faster builds in some cases
- **CSS-first approach**: Generates cleaner, more maintainable CSS
- **Modern color spaces**: Built-in support for OKLCH colors

**What This Means for You:**
- **Faster development**: Changes show up quicker in your browser
- **Less setup**: Fewer configuration files to worry about
- **Better colors**: More vibrant, consistent colors across devices
- **Future-proof**: Uses the latest CSS standards

### Understanding OKLCH Colors

**What is OKLCH?**

OKLCH is a modern color space that describes colors using three values:
- **L** (Lightness): How bright the color is (0% = black, 100% = white)
- **C** (Chroma): How colorful it is (0 = gray, higher = more vibrant)
- **H** (Hue): The color itself (0-360 degrees around the color wheel)

**Example:**
```css
/* OKLCH format */
--primary: 62.8% 0.214 259.6;
/*         ^^^^   ^^^^^  ^^^^^
           L      C      H
           62.8%  0.214  259.6°  = Beautiful blue */
```

**Why OKLCH instead of HSL or RGB?**

The older formats (HSL, RGB, Hex) have problems:

1. **HSL Problem**: Colors with the same "lightness" value look different to our eyes
   ```css
   /* Both at 50% lightness, but yellow looks much brighter than blue */
   --yellow-hsl: 60 100% 50%;   /* Looks very bright */
   --blue-hsl: 240 100% 50%;    /* Looks much darker */
   ```

2. **OKLCH Solution**: Perceptually uniform - 50% lightness looks the same across all colors
   ```css
   /* Both at 62.8% lightness, and they actually look similar brightness */
   --yellow-oklch: 62.8% 0.214 100;    /* Consistent brightness */
   --blue-oklch: 62.8% 0.214 259.6;    /* Consistent brightness */
   ```

**Benefits of OKLCH:**

1. **Perceptually Uniform**: Colors with the same lightness value actually look the same brightness to human eyes
2. **Wider Color Gamut**: Access to more vibrant colors that HSL/RGB can't represent
3. **Better Gradients**: Smooth transitions between colors without muddy middle tones
4. **Accessibility**: Easier to create accessible color contrasts
5. **Future-Proof**: Modern browsers natively support it

**Real-World Example:**

In this project, our primary blue is defined as:
```css
:root {
  --primary: 62.8% 0.214 259.6;
  /*         Bright  Vibrant  Blue */
}

.dark {
  --primary: 70.9% 0.221 263.4;
  /*         Lighter  More vibrant  Slightly different blue */
}
```

This gives us:
- **Light mode**: A vibrant blue that's readable
- **Dark mode**: A slightly brighter, more vibrant blue that stands out against dark backgrounds
- **Consistent perception**: Both feel equally "bright" in their contexts

### How Themes Work in This Project

**CSS Variables Approach:**

This template uses CSS variables to define all colors in one place ([src/app/globals.css](src/app/globals.css)):

```css
@layer base {
  :root {
    /* Light mode colors */
    --background: 100% 0 0;          /* Pure white */
    --foreground: 9.8% 0.038 265.75; /* Almost black */
    --primary: 62.8% 0.214 259.6;    /* Blue */
  }

  .dark {
    /* Dark mode colors */
    --background: 13.4% 0.034 265.75; /* Very dark blue */
    --foreground: 98% 0.013 264.5;    /* Almost white */
    --primary: 70.9% 0.221 263.4;     /* Brighter blue */
  }
}
```

**How It Works:**

1. **Define once**: Set all color values in `globals.css`
2. **Reference everywhere**: Use these values throughout your app
   ```typescript
   <div className="bg-primary text-primary-foreground">
     This uses the CSS variables automatically
   </div>
   ```
3. **Automatic dark mode**: When `.dark` class is added to `<html>`, all colors switch

**Tailwind Config Connection:**

The [tailwind.config.ts](tailwind.config.ts) tells Tailwind to use these CSS variables:

```typescript
colors: {
  primary: {
    DEFAULT: "oklch(var(--primary))",
    foreground: "oklch(var(--primary-foreground))",
  },
  // ... more colors
}
```

**Benefits:**

1. **Single source of truth**: Change colors in one place
2. **Type-safe**: Tailwind autocomplete works
3. **Runtime switching**: Can change themes without rebuilding
4. **Consistent**: Same colors across all components

**Customizing Your Theme:**

To change colors, edit [src/app/globals.css](src/app/globals.css):

```css
:root {
  /* Change primary to green */
  --primary: 65% 0.18 145;  /* L: 65%, C: 0.18, H: 145° (green) */
}
```

**Pro Tip**: Use tools like [OKLCH Color Picker](https://oklch.com) to find colors you like, then copy the values directly into your CSS.

### Dark Mode (`next-themes`)

The template includes dark mode support using `next-themes`:

- **System Detection**: Automatically uses system preference
- **Manual Toggle**: Click the sun/moon icon in the header
- **Persistent**: Choice is saved in localStorage
- **No Flash**: Uses `suppressHydrationWarning` to prevent flash on load

The `ThemeProvider` in `layout.tsx` wraps the entire app and makes theme context available everywhere.

## App Router & Routing Patterns

This template demonstrates several Next.js App Router patterns:

### Simple Routes
```
src/app/
├── page.tsx          → /
├── about/
│   └── page.tsx      → /about
```

### Nested Layouts
**Blog Example** (`/blog/*`):
```
src/app/blog/
├── layout.tsx        ← Shared layout for all blog pages
├── page.tsx          → /blog (blog index)
└── [slug]/
    └── page.tsx      → /blog/any-post (dynamic route)
```

The `blog/layout.tsx` provides a sidebar that persists across all blog pages. This is perfect for:
- Navigation menus
- Filters/search
- Category lists
- Anything that should stay visible while content changes

**Dashboard Example** (`/dashboard/*`):
```
src/app/dashboard/
├── layout.tsx        ← Shared sidebar for all dashboard pages
├── page.tsx          → /dashboard (overview)
├── analytics/
│   └── page.tsx      → /dashboard/analytics
└── settings/
    └── page.tsx      → /dashboard/settings
```

The dashboard demonstrates a common admin pattern with:
- Persistent sidebar navigation
- Quick stats section
- Multiple sub-routes that share the layout

### Dynamic Routes
Dynamic routes use `[paramName]` syntax:

```typescript
// src/app/blog/[slug]/page.tsx

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const post = await getPost(params.slug);
  return <div>{post.title}</div>;
}
```

### Server vs Client Components

**Server Components** (default):
- No `"use client"` directive
- Can fetch data directly
- No hooks or browser APIs
- Better performance

```typescript
// src/app/page.tsx - Server Component
export default async function Home() {
  const data = await fetch(...);  // Direct data fetching
  return <div>...</div>;
}
```

**Client Components**:
- Has `"use client"` at the top
- Can use hooks (useState, useEffect, etc.)
- Can access browser APIs
- Interactive features

```typescript
// src/components/theme-toggle.tsx - Client Component
"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();  // Hook usage
  return <button onClick={() => setTheme(...)}>...</button>;
}
```

## Available Scripts

All scripts use `pnpm` - install it globally with `npm install -g pnpm` if needed.

### Development

```bash
# Start development server on http://localhost:3000
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Code Quality

```bash
# Run ESLint to check for issues
pnpm lint

# Auto-fix ESLint issues
pnpm lint:fix

# Type-check TypeScript without building
pnpm typecheck
```

### Testing

```bash
# Run all Jest tests
pnpm test

# Run tests in watch mode (re-runs on file changes)
pnpm test:watch

# Run Playwright e2e tests
pnpm e2e

# Run e2e tests with interactive UI
pnpm e2e:ui

# View last e2e test report
pnpm e2e:report
```

### Recommended Workflow

Before committing code:

```bash
pnpm lint:fix        # Fix linting issues
pnpm typecheck       # Check for TypeScript errors
pnpm test            # Run unit tests
pnpm build           # Ensure production build works
```

## What's Included

### Frontend

- **Next.js 16** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** for beautiful, accessible components
- **next-themes** for dark mode support
- **Lucide Icons** for iconography

### Code Quality

- **ESLint** with strict TypeScript checking
- **TypeScript** in strict mode
- **Prettier-friendly** config

### Testing

- **Jest** for unit/integration tests
- **React Testing Library** for component tests
- **Playwright** for end-to-end tests

### Example Code

- **API Routes**: `/api/products` and `/api/health`
- **Server Components**: Homepage with data fetching
- **Client Components**: `HealthCheck`, `ThemeToggle` with loading/error states
- **Utility Functions**: `formatMoney`, `cn` with tests
- **shadcn/ui Components**: Button, Card, Badge, Switch
- **Nested Layouts**: Blog and Dashboard with sidebar navigation
- **Dynamic Routes**: `/blog/[slug]` for individual posts

## Learning Resources

### File-by-File Guide

1. **Start with**: `src/app/page.tsx` - See how pages work
2. **Then explore**: `src/components/Button.tsx` - Reusable components
3. **Try testing**: `__tests__/components/Button.test.tsx` - Learn testing
4. **Build an API**: `src/app/api/health/route.ts` - Create endpoints
5. **Add utilities**: `src/lib/formatMoney.ts` - Helper functions

### Concepts Demonstrated

- **Server vs Client Components**: See the difference in `page.tsx` vs `HealthCheck.tsx`
- **TypeScript Types**: Every function has clear types
- **API Routes**: RESTful endpoints with `/api/*`
- **Error Handling**: Loading and error states in `HealthCheck.tsx`
- **Testing**: Unit tests for utilities, component tests, and e2e tests

## Troubleshooting

### 1. `pnpm: command not found`

**Solution:**

```bash
npm install -g pnpm
```

### 2. Port 3000 already in use

**Solution:**

```bash
# Kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Or use a different port:
pnpm dev -- -p 3001
```

### 3. ESLint errors after adding new files

**Solution:**

```bash
pnpm lint:fix
```

### 4. TypeScript errors in IDE but build works

**Solution:**

```bash
# Restart TypeScript server in VS Code
Ctrl+Shift+P → "TypeScript: Restart TS Server"

# Or reload window
Ctrl+Shift+P → "Developer: Reload Window"
```

### 5. Tests failing with module resolution errors

**Solution:**

```bash
# Clear Jest cache
pnpm test --clearCache

# Reinstall dependencies
rm -rf node_modules
pnpm install
```

### 6. Playwright browsers not installed

**Solution:**

```bash
pnpx playwright install
```

### 7. Build fails with "Module not found"

**Solution:**

Check that imports use `@/` for src files:

```typescript
// ✅ Correct
import { Button } from "@/components/Button";

// ❌ Wrong
import { Button } from "../components/Button";
```

### 8. Styles not applying (Tailwind)

**Solution:**

Ensure `globals.css` is imported in `layout.tsx`:

```typescript
import "./globals.css";
```

### 9. "Cannot find module" in tests

**Solution:**

Check `jest.config.ts` has the correct `moduleNameMapper`:

```typescript
moduleNameMapper: {
  "^@/(.*)$": "<rootDir>/src/$1",
}
```

### 10. Git pre-commit hooks failing

**Solution:**

```bash
# Run the same checks manually
pnpm lint:fix
pnpm typecheck
pnpm test
```

### 11. shadcn/ui component not found

**Solution:**

Make sure you've added the component:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

Check the import path uses `@/components/ui/...`:

```typescript
import { Button } from "@/components/ui/button";  // ✅ Correct
import { Button } from "../components/ui/button"; // ❌ Wrong
```

### 12. Dark mode not working

**Solution:**

Ensure `suppressHydrationWarning` is on the `<html>` tag:

```typescript
<html lang="en" suppressHydrationWarning>
```

Check that `ThemeProvider` wraps your app in `layout.tsx`.

### 13. Components don't have proper styling

**Solution:**

Make sure `globals.css` has the CSS variables and Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    /* ... more variables */
  }
}
```

### 14. "Cannot find module '@/lib/utils'"

**Solution:**

Create the utils file:

```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 15. Nested layout not applying

**Solution:**

Check that your `layout.tsx` is in the correct directory and exports a default function:

```typescript
// src/app/blog/layout.tsx
export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div>{/* sidebar */}{children}</div>;
}
```

## Next Steps

### Extend This Template

1. **Add a database**: Try Prisma with SQLite
2. **Add authentication**: Use NextAuth.js
3. **Add more pages**: Create `/about`, `/contact`
4. **Style components**: Build a component library
5. **Add forms**: Use React Hook Form with validation
6. **Deploy**: Try Vercel or Netlify

### Learning Path

1. **Week 1**: Understand the existing code
2. **Week 2**: Add a new page and component
3. **Week 3**: Create your own API endpoint
4. **Week 4**: Write tests for your code
5. **Week 5**: Build a small project (todo list, blog, etc.)

## Contributing

This is a learning template - feel free to modify anything! If you find issues or have suggestions, create an issue or pull request.

## License

MIT - Feel free to use this for learning and building your own projects.
