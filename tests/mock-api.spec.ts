
import { test, expect } from '@playwright/test';

test('Mock an API response', async ({ page }) => {
    await page.route('**/api/user', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                id: 1,
                name: 'Geeth',
                role: 'QA Engineer'
            })
        });
    });

    await page.goto('https://example.com/');

    await page.evaluate(async () => {
        const response = await fetch(
            'https://example.com/api/user'
        );
        const user = await response.json();

        document.body.innerHTML = `
            <h1>User Details</h1>
            <p id="name">${user.name}</p>
            <p id="role">${user.role}</p>
        `;
    });

    await expect(page.locator('#name')).toHaveText('Geeth');
    await expect(page.locator('#role')).toHaveText('QA Engineer');
});

