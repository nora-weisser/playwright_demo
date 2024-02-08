import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class LoginPage extends HelperBase {
    readonly emailPlaceholder: Locator;
    readonly passwordPlaceholder: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.emailPlaceholder = page.locator('[data-test="username"]');
        this.passwordPlaceholder = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');
    }

    async loginWithUsernameAndPassword(username, password) {
        await this.emailPlaceholder.fill(username);
        await this.passwordPlaceholder.fill(password);
        await this.loginBtn.click();
    }
}