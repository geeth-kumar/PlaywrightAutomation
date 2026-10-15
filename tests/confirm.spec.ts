
import { test, expect } from '@playwright/test';

test('Accept confirmation dialog', async ({ page }) => {
    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts',
        { waitUntil: 'domcontentloaded', timeout: 60000 }
    );

    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        await dialog.accept();
    });

    await page.evaluate(() => {
        (window as any).jsConfirm();
    });

    await expect(page.locator('#result'))
        .toHaveText('You clicked: Ok');
});

test('Cancel confirmation dialog', async ({ page }) => {
    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts',
        { waitUntil: 'domcontentloaded', timeout: 60000 }
    );

    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        await dialog.dismiss();
    });

    await page.evaluate(() => {
        (window as any).jsConfirm();
    });

    await expect(page.locator('#result'))
        .toHaveText('You clicked: Cancel');
});

