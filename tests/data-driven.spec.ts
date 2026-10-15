
import { test, expect } from '@playwright/test';

const testData = [
    { title: 'Example Domain', expected: true },
    { title: 'Wrong Title', expected: false }
];

for (const data of testData) {
    test(`Verify title: ${data.title}`, async ({ page }) => {
        await page.goto('https://example.com/');

        if (data.expected) {
            await expect(page).toHaveTitle(data.title);
        } else {
            await expect(page).not.toHaveTitle(data.title);
        }
    });
}
