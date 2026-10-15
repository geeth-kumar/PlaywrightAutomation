
import { test, expect } from '@playwright/test';

test('Handle drag and drop', async ({ page }) => {
    await page.setContent(`
        <div id="source" draggable="true"
             style="width:100px;padding:20px;background:lightblue">
            Drag Me
        </div>

        <div id="target"
             style="margin-top:30px;width:150px;height:100px;
                    background:lightgray;padding:20px">
            Drop Here
        </div>

        <p id="result"></p>

        <script>
            const source = document.querySelector('#source');
            const target = document.querySelector('#target');

            source.addEventListener('dragstart', event => {
                event.dataTransfer.setData('text/plain', 'Drag Me');
            });

            target.addEventListener('dragover', event => {
                event.preventDefault();
            });

            target.addEventListener('drop', event => {
                event.preventDefault();
                document.querySelector('#result').textContent =
                    event.dataTransfer.getData('text/plain');
            });
        </script>
    `);

    await page.locator('#source').dragTo(page.locator('#target'));

    await expect(page.locator('#result')).toHaveText('Drag Me');
});
