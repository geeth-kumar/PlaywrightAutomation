
import { Page, Locator } from '@playwright/test';
import path from 'path';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly message: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.message = page.locator('#message');
    }

    async open() {
        const filePath = path.resolve('test-pages/login.html');
        await this.page.goto(`file://${filePath.replace(/\\/g, '/')}`);
    }

    async login(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }
}
