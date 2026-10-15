
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Successful login @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('geeth', 'QA12345');

    await expect(loginPage.message).toHaveText('Login successful');
});

test('Invalid login @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('wronguser', 'wrongpass');

    await expect(loginPage.message).toHaveText(
        'Invalid username or password'
    );
});
