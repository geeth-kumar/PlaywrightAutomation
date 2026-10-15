
import { test, expect } from '@playwright/test';

test('Handle iframe', async ({ page }) => {
    await page.setContent(`
        <h1>Main Page</h1>
        <iframe id="myFrame"
            srcdoc="<html><body><input id='username' placeholder='Enter username'><button id='submit'>Submit</button></body></html>">
        </iframe>
    `);

    const frame = page.frameLocator('#myFrame');

    await frame.locator('#username').fill('Geeth');

    await expect(frame.locator('#username')).toHaveValue('Geeth');

    await frame.locator('#submit').click();
});

