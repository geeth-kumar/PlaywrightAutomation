
import { test, expect } from '@playwright/test';

test('Handle keyboard actions', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    const username = page.locator('#username');
    const password = page.locator('#password');

    await username.fill('tomsmith');

    // Clear the field using keyboard shortcuts
    await username.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');

    await expect(username).toHaveValue('', { timeout: 5000 });

    // Type again and move focus to password
    await username.fill('tomsmith');
    await page.keyboard.press('Tab');

    await expect(password).toBeFocused({ timeout: 5000 });
    await expect(username).toHaveValue('tomsmith', { timeout: 5000 });
});
