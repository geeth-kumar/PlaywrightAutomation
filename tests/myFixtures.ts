
import { test as base, expect } from '@playwright/test';

type MyFixtures = {
    examplePage: void;
};

export const test = base.extend<MyFixtures>({
    examplePage: async ({ page }, use) => {
        await page.goto('https://example.com/');
        await use();
    },
});

export { expect };
