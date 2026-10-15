
import { test, expect } from '@playwright/test';

test('Take a screenshot of a webpage', async ({ page }) => {
    await page.goto('https://example.com/', {
        waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveTitle('Example Domain');

    await page.screenshot({
        path: 'screenshots/example-page.png',
        fullPage: true
    });
});
