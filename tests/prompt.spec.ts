
import { test, expect } from '@playwright/test';

test('Handle JavaScript prompt', async ({ page }) => {
    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await expect(
        page.locator('button[onclick="jsPrompt()"]')
    ).toBeVisible();

    page.on('dialog', dialog => {
        console.log('Dialog type:', dialog.type());
        void dialog.accept('Geeth');
    });

    await page.locator('button[onclick="jsPrompt()"]').click();

    await expect(page.locator('#result'))
        .toHaveText('You entered: Geeth', { timeout: 10000 });
});
