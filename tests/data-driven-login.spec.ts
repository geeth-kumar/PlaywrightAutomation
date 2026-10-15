
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

for (const data of loginData) {
    test(`Login test: ${data.scenario}`, async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.login(data.username, data.password);

        if (data.scenario === 'Empty credentials') {
            await expect(loginPage.username).toBeEmpty();
            await expect(loginPage.password).toBeEmpty();
        } else {
            await expect(loginPage.message).toHaveText(
                data.expectedMessage
            );
        }
    });
}
