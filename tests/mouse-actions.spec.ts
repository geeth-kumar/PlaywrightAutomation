
import { test, expect } from '@playwright/test';

test('Handle mouse actions', async ({ page }) => {
    await page.setContent(`
        <button id="doubleClick">Double Click Me</button>
        <p id="message"></p>

        <div id="hoverBox"
             style="margin-top:20px;padding:20px;background:#ddd">
            Hover Over Me
        </div>
        <p id="hoverMessage"></p>

        <script>
            document.querySelector('#doubleClick')
                .addEventListener('dblclick', () => {
                    document.querySelector('#message').textContent =
                        'Double clicked';
                });

            document.querySelector('#hoverBox')
                .addEventListener('mouseenter', () => {
                    document.querySelector('#hoverMessage').textContent =
                        'Mouse hovered';
                });
        </script>
    `);

    // Double-click
    await page.locator('#doubleClick').dblclick();
    await expect(page.locator('#message')).toHaveText('Double clicked');

    // Hover
    await page.locator('#hoverBox').hover();
    await expect(page.locator('#hoverMessage')).toHaveText('Mouse hovered');
});
