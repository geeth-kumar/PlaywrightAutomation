
import { test, expect } from '@playwright/test';

test('Handle keyboard actions', async ({ page }) => {
    await page.setContent(`
        <input id="username" placeholder="Enter username">
        <input id="search" placeholder="Search">
        <p id="result"></p>

        <script>
            document.querySelector('#search')
                .addEventListener('keydown', event => {
                    if (event.key === 'Enter') {
                        document.querySelector('#result').textContent =
                            'Search submitted';
                    }
                });
        </script>
    `);

    const username = page.locator('#username');
    const search = page.locator('#search');

    // Type text and select all
    await username.fill('Geeth');
    await username.press('Control+A');
    await username.press('Backspace');
    await expect(username).toHaveValue('');

    // Submit using Enter
    await search.fill('Playwright');
    await search.press('Enter');
    await expect(page.locator('#result')).toHaveText('Search submitted');

    // Move focus using Tab
    await username.focus();
    await page.keyboard.press('Tab');
    await expect(search).toBeFocused();
});
