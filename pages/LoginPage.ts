import { expect, Locator, Page } from "@playwright/test";
import { faker } from '@faker-js/faker'


export class LoginPage {

    readonly page: Page
    readonly inputUsername: Locator
    readonly inputPassword: Locator
    readonly loginButton: Locator
    readonly loginErrorMessage: Locator
    readonly closeButtonErrorMessage: Locator
    readonly loginURL: string

    constructor(page: Page) {
        this.page = page
        this.inputUsername = page.getByPlaceholder('Username')
        this.inputPassword = page.getByPlaceholder('Password')
        this.loginButton = page.locator('#login-button')
        this.loginErrorMessage = page.locator('form h3')
        this.closeButtonErrorMessage = page.locator('form button')
        this.loginURL = 'https://www.saucedemo.com/'
    }

    async visitLoginPage() {
        await this.page.goto(this.loginURL)
    }

    async loginAndSaveSession(username: string, password: string) {
        await this.typeCredentials(username, password)
        await this.loginButton.click()

        await this.saveSession()
    }

    async loginInvalidCredentials(username: string, password: string, expectedErrorMessage: string) {
        await this.typeCredentials(username, password)
        await this.loginButton.click()

        await expect(this.loginErrorMessage).toBeVisible()
        await expect(this.loginErrorMessage).toHaveText(expectedErrorMessage)
        await this.closeButtonErrorMessage.click()
    }

    async loginUsingLockedAccount(username: string, password: string, expectedErrorMessage: string) {
        await this.typeCredentials(username, password)
        await this.loginButton.click()

        await expect(this.loginErrorMessage).toBeVisible()
        await expect(this.loginErrorMessage).toHaveText(expectedErrorMessage)

        await this.closeButtonErrorMessage.click()
    }

    async loginEmptyUsernameField(password: string, expectedErrorMessage: string) {
        await this.inputPassword.click()
        await this.inputPassword.pressSequentially(password, { delay: 100 })

        await this.loginButton.click()


        await expect(this.loginErrorMessage).toBeVisible()
        await expect(this.loginErrorMessage).toHaveText(expectedErrorMessage)

        await this.closeButtonErrorMessage.click()
    }

    async loginEmptyPasswordField(username: string, expectedErrorMessage: string) {
        await this.inputUsername.click()
        await this.inputUsername.pressSequentially(username, { delay: 100 })

        await this.loginButton.click()

        await expect(this.loginErrorMessage).toBeVisible()
        await expect(this.loginErrorMessage).toHaveText(expectedErrorMessage)

        await this.closeButtonErrorMessage.click()
    }

    async loginBothFieldAreEmpty(expectedErrorMessage: string) {
        await this.loginButton.click()

        await expect(this.loginErrorMessage).toBeVisible()
        await expect(this.loginErrorMessage).toHaveText(expectedErrorMessage)

        await this.closeButtonErrorMessage.click()
    }





    private async typeCredentials(username: string, password: string) {
        await this.inputUsername.click()
        await this.inputUsername.pressSequentially(username, { delay: 100 })

        await this.inputPassword.click()
        await this.inputPassword.pressSequentially(password, { delay: 100 })
    }

    private async saveSession() {
        await this.page.context().storageState({ path: 'auth.json' }) //ise-save nya yung 
    }
}