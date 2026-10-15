
import { test, expect } from '@playwright/test';

test('Verify page title @smoke', async ({ page }) => {
    await page.setContent('<h1>Welcome to Playwright</h1>');

    await expect(page.locator('h1'))
        .toHaveText('Welcome to Playwright', { timeout: 3000 });
});

test('Verify heading @regression', async ({ page }) => {
    await page.setContent('<h2>QA Testing</h2>');

    await expect(page.locator('h2')).toHaveText('QA Testing');
});
