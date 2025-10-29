import { expect, test } from "@playwright/test";

test("homepage loads and displays title", async ({ page }) => {
  await page.goto("/");

  // Check that the page title is correct
  await expect(page).toHaveTitle("Evolve-UI");

  // Check that the header is visible
  await expect(page.getByText("Evolve-UI")).toBeVisible();
  await expect(
    page.getByText("From API to UI — where pixels meet products.")
  ).toBeVisible();
});

test("products are displayed", async ({ page }) => {
  await page.goto("/");

  // Check that products section exists
  await expect(page.getByRole("heading", { name: "Products" })).toBeVisible();

  // Check that products are rendered
  await expect(page.getByText("Starter Wallet")).toBeVisible();
  await expect(page.getByText("Minimal Belt")).toBeVisible();
});
