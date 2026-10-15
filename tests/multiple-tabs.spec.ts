
import { test, expect } from '@playwright/test';

test('Handle a new browser tab', async ({ page, context }) => {
    await page.setContent(`
        <a href="about:blank" target="_blank" id="newTab">
            Open New Tab
        </a>
    `);

    const newPagePromise = context.waitForEvent('page');

    await page.locator('#newTab').click();

    const newPage = await newPagePromise;

    await newPage.setContent('<h1>Welcome to New Tab</h1>');

    await expect(
        newPage.getByRole('heading', { name: 'Welcome to New Tab' })
    ).toBeVisible();
});

