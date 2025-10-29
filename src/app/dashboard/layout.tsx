import type { ReactNode } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

/**
 * Complex nested layout for dashboard
 * Demonstrates a sidebar navigation pattern with nested routes
 * This is common in admin dashboards and complex applications
 */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Example of a complex nested layout with sidebar navigation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Sidebar Navigation */}
        <Card className="md:col-span-1 p-4 h-fit">
          <nav className="space-y-1">
            <Link
              href="/dashboard"
              className="block px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors"
            >
              Overview
            </Link>
            <Link
              href="/dashboard/analytics"
              className="block px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors"
            >
              Analytics
            </Link>
            <Link
              href="/dashboard/settings"
              className="block px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors"
            >
              Settings
            </Link>
          </nav>

          <div className="mt-6 pt-6 border-t">
            <div className="text-xs font-semibold text-muted-foreground mb-2">
              QUICK STATS
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Users</span>
                <Badge variant="secondary">1,234</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Posts</span>
                <Badge variant="secondary">89</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Revenue</span>
                <Badge>$12,345</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Main Content Area */}
        <div className="md:col-span-4">{children}</div>
      </div>
    </div>
  );
}
