
import { test, expect } from '@playwright/test';

test('Handle checkbox actions', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const firstCheckbox = page.locator('input[type="checkbox"]').nth(0);

    // Check the checkbox if it isn't already checked
    await firstCheckbox.check();

    await expect(firstCheckbox).toBeChecked();
});
