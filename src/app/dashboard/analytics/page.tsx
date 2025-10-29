import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Analytics - Dashboard",
  description: "View your analytics data",
};

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>
            Track your performance and growth metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Notice how the sidebar navigation persists as you navigate between
            dashboard pages. This is the power of nested layouts!
          </p>
          <Badge>This is a nested route: /dashboard/analytics</Badge>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Page Views</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">45,231</div>
            <div className="flex items-center gap-2">
              <Badge>+12.5%</Badge>
              <span className="text-sm text-muted-foreground">
                vs previous period
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Unique Visitors</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">12,543</div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">+8.2%</Badge>
              <span className="text-sm text-muted-foreground">
                vs previous period
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
          <CardDescription>Most visited pages this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { page: "/", views: 15234, percentage: 34 },
              { page: "/blog", views: 8976, percentage: 20 },
              { page: "/about", views: 5432, percentage: 12 },
              { page: "/dashboard", views: 3210, percentage: 7 },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                      {item.page}
                    </code>
                    <span className="text-sm text-muted-foreground">
                      {item.views.toLocaleString()} views
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
