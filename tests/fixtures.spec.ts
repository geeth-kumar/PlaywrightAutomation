
import { test, expect } from '@playwright/test';

test('Test 1 - Verify title', async ({ page }) => {
    await page.goto('https://example.com/');
    await expect(page).toHaveTitle('Example Domain');
});

test('Test 2 - Verify page loaded', async ({ page }) => {
    await page.goto('https://example.com/');
    await expect(page.locator('body')).toBeVisible();
});
