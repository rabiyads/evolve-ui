"use client";

import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HealthData {
  status: string;
  timestamp: string;
  message: string;
}

/**
 * Client-side component that demonstrates fetching data from an API
 * Shows loading, error, and success states
 */
export function HealthCheck() {
  const [data, setData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHealth = async (): Promise<void> => {
      try {
        const response = await fetch("/api/health");
        if (!response.ok) {
          throw new Error("Failed to fetch health data");
        }
        const result = (await response.json()) as HealthData;
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    void fetchHealth();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-muted rounded w-1/4"></div>
            <div className="h-3 bg-muted rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive flex items-center gap-2">
            <Badge variant="destructive">Error</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-destructive">{error}</p>
          <p className="text-sm text-muted-foreground">
            Try refreshing the page or check your connection.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-green-500 dark:border-green-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Badge className="bg-green-600">
            {data?.status?.toUpperCase()}
          </Badge>
          <span>Server Status</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>{data?.message}</p>
        <p className="text-sm text-muted-foreground">
          Last checked:{" "}
          {data?.timestamp && new Date(data.timestamp).toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
}
