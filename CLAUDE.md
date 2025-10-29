# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Evolve-UI is a teaching template for modern Next.js development using the App Router. It's designed for mixed audiences (11-12 year olds post-CS50, junior developers, QA engineers, designers) with strong guardrails for good coding habits.

**Tagline:** _From API to UI — where pixels meet products._

**Audience:** Learning-focused with emphasis on clean code, testing, and modern best practices.

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server (runs on http://localhost:3000)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint           # Check for issues
pnpm lint:fix       # Auto-fix issues

# Type checking
pnpm typecheck      # Run TypeScript compiler without emitting

# Testing
pnpm test           # Run Jest tests
pnpm test:watch     # Run Jest in watch mode
pnpm e2e            # Run Playwright e2e tests
pnpm e2e:ui         # Run Playwright with UI
pnpm e2e:report     # View Playwright HTML report
```

## Architecture

### Next.js App Router Structure

All routes are in `src/app/`:

- `src/app/layout.tsx` - Root layout with ThemeProvider, navigation header
- `src/app/page.tsx` - Homepage (Server Component with product data)
- `src/app/globals.css` - Tailwind CSS with shadcn/ui CSS variables
- `src/app/about/page.tsx` - About page
- `src/app/blog/layout.tsx` - Blog nested layout with sidebar
- `src/app/blog/page.tsx` - Blog index page
- `src/app/blog/[slug]/page.tsx` - Individual blog post (dynamic route)
- `src/app/dashboard/layout.tsx` - Dashboard nested layout with sidebar
- `src/app/dashboard/page.tsx` - Dashboard overview
- `src/app/dashboard/analytics/page.tsx` - Analytics page
- `src/app/dashboard/settings/page.tsx` - Settings page (client component)
- `src/app/api/products/route.ts` - Products API endpoint
- `src/app/api/health/route.ts` - Health check API endpoint

### Components

Located in `src/components/`:

- `theme-provider.tsx` - Next-themes provider for dark mode
- `theme-toggle.tsx` - Theme toggle button (client component)
- `HealthCheck.tsx` - Client component demonstrating fetch with loading/error states
- `Button.tsx` - Old example button (kept for testing, use shadcn Button instead)

Located in `src/components/ui/` (shadcn/ui components):

- `button.tsx` - Button with multiple variants (default, outline, ghost, destructive)
- `card.tsx` - Card container with header, content, footer
- `badge.tsx` - Badge/label component with variants
- `switch.tsx` - Toggle switch built on Radix UI

### Utilities

Located in `src/lib/`:

- `formatMoney.ts` - Currency formatting utility (cents to dollars)
- `utils.ts` - shadcn/ui utility function `cn()` for merging Tailwind classes

### Testing Structure

- `__tests__/` - Jest unit and component tests
  - `__tests__/lib/formatMoney.test.ts` - Unit test example
  - `__tests__/components/Button.test.tsx` - Component test example
- `e2e/` - Playwright end-to-end tests
  - `e2e/home.spec.ts` - Homepage e2e test

## Key Patterns

### Server vs Client Components

- **Server Components** (default): `page.tsx` - fetches data directly on server
- **Client Components** (`"use client"`): `HealthCheck.tsx` - uses hooks and browser APIs

### TypeScript Best Practices

- **Strict mode enabled**: All code must pass strict type checking
- **Explicit return types**: Functions should have explicit return types (enforced by ESLint as warning)
- **No `any` types**: Warned by ESLint, use proper types or `unknown`
- **Path aliases**: Always use `@/` for imports from `src/`

```typescript
// ✅ Good
import { Button } from "@/components/Button";
export function formatMoney(amount: number): string { ... }

// ❌ Bad
import { Button } from "../../components/Button";
export function formatMoney(amount) { ... }
```

### API Routes

- Follow App Router conventions with `route.ts` files
- Use `NextResponse.json()` for JSON responses
- Add explicit return type `Promise<NextResponse>`

### Styling

- **Tailwind CSS**: Uses traditional `tailwind.config.ts` for shadcn/ui compatibility
- **shadcn/ui**: Component library that copies code into your project
- **CSS Variables**: All theme colors use HSL-based CSS variables in `globals.css`
- **Dark Mode**: Automatic dark mode support via `next-themes`
- **Design system**: Clean, modern design with shadcn/ui's default theme
- **Responsive**: Uses Tailwind responsive utilities (`md:`, `lg:`)

### Routing Patterns

**Simple Routes:**
- `/` - Homepage
- `/about` - About page

**Nested Layouts (Blog):**
- `/blog` - Blog index with sidebar layout
- `/blog/getting-started` - Individual post (dynamic route `[slug]`)
- Blog layout (`blog/layout.tsx`) provides consistent sidebar across all blog pages

**Nested Layouts (Dashboard):**
- `/dashboard` - Dashboard overview
- `/dashboard/analytics` - Analytics page
- `/dashboard/settings` - Settings page (client component with form)
- Dashboard layout (`dashboard/layout.tsx`) provides sidebar navigation and stats

**Key Concept:** Nested layouts wrap their children and persist across route changes. This is perfect for navigation, filters, or any UI that should stay visible.

## Code Quality Tools

### ESLint Configuration

Located in `eslint.config.mjs` (ESLint 9 flat config format):

**Plugins:**
- `@eslint/js` - JavaScript recommended rules
- `typescript-eslint` - TypeScript rules and parser
- `eslint-plugin-unused-imports` - Auto-remove unused imports

**Key rules:**
- No unused imports (auto-fixable with `pnpm lint:fix`)
- Explicit function return types (warning - encourages good practices)
- No explicit `any` types (warning - use proper types or `unknown`)
- Prefer const over let (error)
- No console.log (warning - console.warn and console.error are allowed)

The configuration is intentionally simplified to avoid complexity for learners while still enforcing good practices. Always run `pnpm lint:fix` before committing.

### Jest Configuration

- Uses `next/jest` for App Router support
- Setup file: `jest.setup.ts` imports `@testing-library/jest-dom`
- Path alias mapping configured
- Test environment: `jsdom`

### Playwright Configuration

- Runs tests in Chromium only (to keep it simple)
- Auto-starts dev server before tests
- Base URL: `http://localhost:3000`
- Generates HTML reports

## Testing Guidelines

### Unit Tests (Jest)

Test pure functions and utilities:

```typescript
// Example: __tests__/lib/formatMoney.test.ts
import { formatMoney } from "@/lib/formatMoney";

describe("formatMoney", () => {
  it("formats positive amounts correctly", () => {
    expect(formatMoney(1234)).toBe("$12.34");
  });
});
```

### Component Tests (Jest + Testing Library)

Test React components in isolation:

```typescript
// Example: __tests__/components/Button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
```

### E2E Tests (Playwright)

Test full user workflows:

```typescript
// Example: e2e/home.spec.ts
import { expect, test } from "@playwright/test";

test("homepage loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Evolve-UI");
});
```

## Environment Variables

Define in `.env.local` (use `.env.example` as reference):

- `NEXT_PUBLIC_BASE_URL` - Base URL for API calls (defaults to empty string)

## Package Management

Uses `pnpm` with workspace configuration. Single-package monorepo structure for potential expansion.

## shadcn/ui Usage

### Adding New Components

Use the shadcn CLI to add components:

```bash
npx shadcn@latest add button     # Add Button
npx shadcn@latest add input      # Add Input
npx shadcn@latest add dialog     # Add Dialog
npx shadcn@latest add dropdown-menu
```

Components are copied to `src/components/ui/` where you have full control.

### Using Components

Always import from `@/components/ui/`:

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Click me</Button>
  </CardContent>
</Card>
```

### The `cn()` Utility

All shadcn components use the `cn()` utility from `@/lib/utils.ts`. This combines `clsx` and `tailwind-merge` to properly merge Tailwind classes:

```typescript
import { cn } from "@/lib/utils";

// Later classes override earlier ones
cn("px-2 py-1", "px-4") // → "px-4 py-1"

// Use in components
<div className={cn("base-class", someCondition && "conditional-class", className)} />
```

### Theme Customization

All colors use CSS variables defined in `globals.css`. To customize:

```css
:root {
  --primary: 221.2 83.2% 53.3%;      /* HSL values (no hsl() wrapper) */
  --secondary: 210 40% 96.1%;
  /* ... */
}

.dark {
  --primary: 217.2 91.2% 59.8%;      /* Different values for dark mode */
  --secondary: 217.2 32.6% 17.5%;
}
```

Then use in Tailwind:
```typescript
<div className="bg-primary text-primary-foreground" />
```

### Dark Mode

Dark mode is handled by `next-themes`:
- Provider in `layout.tsx` wraps the app
- `ThemeToggle` component in header switches themes
- Uses `class` strategy (adds `.dark` class to `<html>`)
- Persists choice in localStorage

## Educational Focus

This template is designed for learners, so:

- **Keep it simple**: Don't add complex state management or features unless necessary
- **Emphasize patterns**: Server/Client components, nested layouts, proper typing, testing
- **Use shadcn/ui**: Prefer shadcn components over custom ones for consistency
- **Clean code**: Follow ESLint rules, write tests, use TypeScript strictly
- **Documentation**: Add comments for complex logic, especially for younger learners
- **Show examples**: The blog and dashboard routes demonstrate key patterns

## Common Tasks

### Adding a new component

1. Create in `src/components/ComponentName.tsx`
2. Add proper TypeScript types
3. Use Tailwind for styling
4. Create test in `__tests__/components/ComponentName.test.tsx`
5. Export with explicit return type `JSX.Element`

### Adding a new API route

1. Create in `src/app/api/[route-name]/route.ts`
2. Export async function `GET`, `POST`, etc.
3. Return type: `Promise<NextResponse>`
4. Use `NextResponse.json()` for responses

### Adding a new utility function

1. Create in `src/lib/functionName.ts`
2. Add JSDoc comment with `@example`
3. Add explicit return type
4. Create test in `__tests__/lib/functionName.test.ts`

### Adding a new route with nested layout

1. Create directory in `src/app/[route-name]/`
2. Add `layout.tsx` for shared UI:
```typescript
export default function MyLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}
```
3. Add `page.tsx` for the route content
4. Child routes automatically use this layout

### Adding a dynamic route

1. Create `[paramName]` directory
2. Access param in page:
```typescript
interface PageProps {
  params: Promise<{ paramName: string }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  return <div>{params.paramName}</div>;
}
```

### Running quality checks

Before committing:

```bash
pnpm lint:fix && pnpm typecheck && pnpm test && pnpm build
```

## Deployment Considerations

- Build command: `pnpm build`
- Start command: `pnpm start`
- Node.js 18+ required
- Static export NOT configured (uses App Router features)
