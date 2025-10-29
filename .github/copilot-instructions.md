# Copilot Instructions for Evolve-UI

## Project Overview

Evolve-UI is a **Next.js 16 learning template** built for educational purposes, targeting mixed audiences from 11-12 year olds (post-CS50) to junior developers. It emphasizes clean code patterns, comprehensive testing, and modern React development practices.

**Tech Stack:** Next.js 16 App Router + React 19 + TypeScript (strict) + shadcn/ui + Tailwind CSS v4 + pnpm

## Key Architecture Patterns

### Server vs Client Components Pattern
- **Default:** Server Components (no `"use client"`) - see `src/app/page.tsx`
- **Client Components:** Must have `"use client"` directive - see `src/components/HealthCheck.tsx`
- **Rule:** Use Server Components for data fetching, Client Components only for interactivity/hooks

### Next.js App Router Structure
- Routes in `src/app/` directories with `page.tsx` files
- **Nested Layouts:** `layout.tsx` files provide persistent UI - see `src/app/blog/layout.tsx` and `src/app/dashboard/layout.tsx`
- **Dynamic Routes:** Use `[paramName]` syntax - see `src/app/blog/[slug]/page.tsx`
- **API Routes:** Use `route.ts` files with named exports (`GET`, `POST`, etc.)

### Component Library Integration (shadcn/ui)
- Components are **copied into project** (not npm installed)
- Add new components: `npx shadcn@latest add [component-name]`
- Import from `@/components/ui/[component]` - never relative paths
- All styling via CSS variables in `src/app/globals.css`

## Development Workflows

### Essential Commands
```bash
pnpm dev          # Development server (:3000)
pnpm build        # Production build  
pnpm lint:fix     # Auto-fix ESLint issues
pnpm typecheck    # TypeScript checking
pnpm test         # Jest unit tests
pnpm e2e          # Playwright e2e tests
```

### Code Quality Gates
Before any commit, run: `pnpm lint:fix && pnpm typecheck && pnpm test && pnpm build`

**ESLint Rules (strict):**
- No unused imports (auto-fixable)
- Explicit function return types (warning)
- No `any` types (use `unknown` instead)
- Prefer `const` over `let`

## Project-Specific Conventions

### Import Patterns
- **Always use `@/` path alias** for src imports
- **shadcn/ui imports:** `import { Button } from "@/components/ui/button"`
- **Utilities:** `import { formatMoney } from "@/lib/formatMoney"`

### TypeScript Standards
- **Strict mode enabled** - all functions must have explicit return types
- **Interface naming:** Use `interface ProductProps` not `IProductProps`
- **Props typing:** `{ children }: { children: ReactNode }` pattern

### Component Patterns
```typescript
// Server Component (default)
export default async function Page(): Promise<JSX.Element> {
  const data = await fetch(...);
  return <div>{data}</div>;
}

// Client Component
"use client";
export function InteractiveComponent(): JSX.Element {
  const [state, setState] = useState();
  return <div onClick={...}>{state}</div>;
}
```

### API Route Pattern
```typescript
// src/app/api/[endpoint]/route.ts
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ data });
}
```

### Testing Structure
- **Unit tests:** `__tests__/lib/` for utilities
- **Component tests:** `__tests__/components/` with React Testing Library
- **E2E tests:** `e2e/` with Playwright
- **Test pattern:** `ComponentName.test.tsx` format

### Styling Guidelines
- **Tailwind CSS v4** with CSS variables for theming
- **Dark mode:** Automatic via `next-themes` with system detection
- **Color usage:** Use semantic tokens (`bg-primary`, `text-muted-foreground`)
- **Component styling:** Use `cn()` utility from `@/lib/utils.ts` for class merging

## Key Integration Points

### Data Flow
- **Static data:** `src/lib/data.ts` exports `getProducts()` 
- **API endpoints:** `/api/health` and `/api/products`
- **Client fetching:** See `HealthCheck.tsx` for loading/error/success states

### Theme System
- **Provider:** `ThemeProvider` in `src/app/layout.tsx`
- **Toggle:** `ThemeToggle` component in header
- **Variables:** All colors defined in `src/app/globals.css` CSS variables

### Navigation Structure
- **Global nav:** In `src/app/layout.tsx` header
- **Nested layouts:** Blog (`/blog/*`) and Dashboard (`/dashboard/*`) have persistent sidebars
- **Route structure:** Home, About, Blog (with dynamic posts), Dashboard (with analytics/settings)

## Educational Constraints

**Keep Simple:** This is a learning template - avoid complex state management, external APIs, or advanced patterns
**Emphasize Patterns:** Focus on demonstrating Server/Client components, nested layouts, proper typing, and testing
**Use shadcn/ui:** Prefer existing shadcn components over custom implementations
**Document Everything:** Add JSDoc comments for learning, especially for younger developers

## Common Tasks

### Adding New Route with Layout
1. Create `src/app/[route]/layout.tsx` for persistent sidebar
2. Create `src/app/[route]/page.tsx` for main content
3. Child routes automatically inherit the layout

### Adding shadcn/ui Component
1. `npx shadcn@latest add [component-name]`
2. Import: `import { Component } from "@/components/ui/component"`
3. Style with CSS variables, not custom Tailwind

### Creating API Endpoint
1. Create `src/app/api/[name]/route.ts`
2. Export `GET/POST` with `Promise<NextResponse>` return type
3. Use `NextResponse.json()` for responses

**Remember:** This codebase prioritizes education over complexity. Maintain clear patterns and comprehensive testing for the learning audience.