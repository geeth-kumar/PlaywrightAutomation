
import { test, expect } from '@playwright/test';

test('Verify Example Domain page', async ({ page }) => {
    await page.goto('https://example.com/');

    await expect(page).toHaveTitle('Example Domain');

    await expect(page.locator('body'))
        .toContainText('This domain is for use in documentation examples');
});
