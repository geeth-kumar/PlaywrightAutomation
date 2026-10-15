
import { test, expect } from '@playwright/test';

test('Save login state', async ({ page }) => {
    await page.setContent(`
        <h1>Login Page</h1>
        <input id="username" placeholder="Username">
        <button id="login">Login</button>
        <p id="message"></p>

        <script>
            document.querySelector('#login').onclick = () => {
                document.querySelector('#message').textContent =
                    'Login successful';
            };
        </script>
    `);

    await page.locator('#username').fill('Geeth');
    await page.locator('#login').click();

    await expect(page.locator('#message'))
        .toHaveText('Login successful');
});
