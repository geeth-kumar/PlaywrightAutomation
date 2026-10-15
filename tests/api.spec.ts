
import { test, expect } from '@playwright/test';

test('Verify API response', async ({ request }) => {
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    // Verify status code
    expect(response.status()).toBe(200);

    // Verify response body
    const data = await response.json();

    expect(data.userId).toBe(1);
    expect(data.id).toBe(1);
    expect(data.title).toBeTruthy();
});
