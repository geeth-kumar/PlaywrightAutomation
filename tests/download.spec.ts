
import { test, expect } from '@playwright/test';

test('Download a file', async ({ page }) => {
    await page.setContent(`
        <a href="data:text/plain,Hello%20Geeth"
           download="sample-download.txt">
           Download File
        </a>
    `);

    const downloadPromise = page.waitForEvent('download');

    await page.getByRole('link', { name: 'Download File' }).click();

    const download = await downloadPromise;

    expect(download.suggestedFilename()).toBe('sample-download.txt');
});

