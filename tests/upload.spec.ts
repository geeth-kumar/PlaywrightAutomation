
import { test, expect } from '@playwright/test';
import path from 'path';

test('Upload a file', async ({ page }) => {
    const filePath = path.resolve('tests/sample.txt');

    await page.setContent(`
        <h1>File Upload Practice</h1>
        <input type="file" id="file-upload">
        <p id="result"></p>
        <script>
            document.querySelector('#file-upload')
                .addEventListener('change', function () {
                    document.querySelector('#result').textContent =
                        this.files[0]?.name || '';
                });
        </script>
    `);

    await page.locator('#file-upload').setInputFiles(filePath);

    await expect(page.locator('#result')).toHaveText('sample.txt');
});
