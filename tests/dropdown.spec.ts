
import { test, expect } from '@playwright/test';

test('Handle dropdown selection', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    // Select Option 2
    await page.locator('#dropdown').selectOption('2');

    // Verify the selected option
    await expect(page.locator('#dropdown')).toHaveValue('2');
});
