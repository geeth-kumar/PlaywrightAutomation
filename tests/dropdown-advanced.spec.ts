
import { test, expect } from '@playwright/test';

test('Handle dropdown selection', async ({ page }) => {
    await page.setContent(`
        <label for="country">Country</label>
        <select id="country">
            <option value="">Choose a country</option>
            <option value="in">India</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
        </select>

        <label for="skills">Skills</label>
        <select id="skills" multiple>
            <option value="java">Java</option>
            <option value="sql">SQL</option>
            <option value="playwright">Playwright</option>
        </select>
    `);

    // Select one country
    await page.locator('#country').selectOption('in');
    await expect(page.locator('#country')).toHaveValue('in');

    // Select multiple skills
    await page.locator('#skills').selectOption(['java', 'playwright']);
    await expect(page.locator('#skills'))
        .toHaveValues(['java', 'playwright']);
});
