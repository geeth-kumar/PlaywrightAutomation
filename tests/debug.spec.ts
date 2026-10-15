
import { test, expect } from '@playwright/test';

test('Debug a Playwright test', async ({ page }) => {
    await page.setContent(`
        <h1>Login Page</h1>
        <input id="username" placeholder="Username">
        <button id="login">Login</button>
        <p id="message"></p>

        <script>
            document.querySelector('#login').addEventListener('click', () => {
                document.querySelector('#message').textContent =
                    'Login clicked';
            });
        </script>
    `);

    await page.pause();

    await page.locator('#username').fill('Geeth');
    await page.locator('#login').click();

    await expect(page.locator('#message')).toHaveText('Login clicked');
});
