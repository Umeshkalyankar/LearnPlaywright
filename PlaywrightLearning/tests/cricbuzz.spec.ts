import { test, expect } from '@playwright/test';

test('Verify cricbuzz title', async ({ page }) => {

    await page.goto("https://www.cricbuzz.com/");

    await page.waitForTimeout(2000);

    await expect(page).toHaveTitle("IPL 2026 | Live Cricket Score, Schedule, News, Stats &amp; Videos  | Cricbuzz.com");

    console.log();

    await page.close();

})