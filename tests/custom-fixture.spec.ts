
import { test, expect } from './myFixtures';

test('Verify title using custom fixture', async ({ page, examplePage }) => {
    await expect(page).toHaveTitle('Example Domain');
});

test('Verify page is visible using custom fixture', async ({ page, examplePage }) => {
    await expect(page.locator('body')).toBeVisible();
});
