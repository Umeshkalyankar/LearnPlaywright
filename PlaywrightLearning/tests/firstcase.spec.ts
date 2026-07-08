import { test, expect } from '@playwright/test';

test("Verify that the title will be TTA cart", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle("TTACart - Login");
    await page.waitForTimeout(1000);
})