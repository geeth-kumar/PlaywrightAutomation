
import { test, expect } from '@playwright/test';

test('Verify login using different locators', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');

    await page.getByRole('button', { name: 'Login' }).click();

    // Confirm that login navigated to the secure page
    await expect(page).toHaveURL(/\/secure/);

    // Verify the secure page heading
    await expect(
        page.getByRole('heading', { name: 'Secure Area', exact: true })
    ).toBeVisible();

    // Verify the success message
    await expect(page.locator('#flash'))
        .toContainText('You logged into a secure area!');
});
