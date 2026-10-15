
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login successfully using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(page).toHaveURL(/\/secure/);
    await expect(
        page.getByRole('heading', {
            name: 'Secure Area',
            exact: true
        })
    ).toBeVisible();
});
