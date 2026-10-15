
import { test, expect } from '@playwright/test';

test('Verify web table data', async ({ page }) => {
    await page.setContent(`
        <table id="employees" border="1">
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Salary</th>
            </tr>
            <tr>
                <td>Geeth</td>
                <td>QA Engineer</td>
                <td>30000</td>
            </tr>
            <tr>
                <td>Ravi</td>
                <td>Developer</td>
                <td>40000</td>
            </tr>
        </table>
    `);

    const table = page.locator('#employees');

    await expect(table.locator('tr')).toHaveCount(3);

    const geethRow = table.locator('tr').filter({ hasText: 'Geeth' });

    await expect(geethRow.locator('td').nth(0)).toHaveText('Geeth');
    await expect(geethRow.locator('td').nth(1)).toHaveText('QA Engineer');
    await expect(geethRow.locator('td').nth(2)).toHaveText('30000');
});
