import { Page } from '@playwright/test'
import { LoginPage } from './login.page'

export class PageManager {
    private readonly page: Page;
    private readonly loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
    }

    onLoginPage() {
        return this.loginPage;
    }
}