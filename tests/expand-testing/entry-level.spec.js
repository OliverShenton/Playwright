const { test, expect } = require("@playwright/test");

// Entry Level

// Resuable Components

const baseUrl = "https://practice.expandtesting.com/";

// Test 1. Homepage Loads Successfully
// Verify that the homepage loads correctly and key UI elements are visible. This ensures the application is accessible to users.

test("Test 1: Homepage Loads Successfully", async ({ page }) => {
  await page.goto(baseUrl);

  await expect(page).toHaveTitle(/automation testing practice website/i);
});
