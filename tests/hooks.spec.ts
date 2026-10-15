
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    console.log('Opening Example Domain');

    await page.goto('https://example.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });
});

test.afterEach(async () => {
    console.log('Test execution completed');
});

test('Verify page title', async ({ page }) => {
    await expect(page).toHaveTitle('Example Domain');
});


test('Verify main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Example Domain' }))
        .toBeVisible();
});


test('Verify page content', async ({ page }) => {
    await expect(page.locator('body'))
        .toContainText('documentation examples');
});
