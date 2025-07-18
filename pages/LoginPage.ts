import { expect, Locator, Page } from "@playwright/test";


export class LoginPage {

    readonly page: Page
    readonly inputUsername: Locator
    readonly inputPassword: Locator
    readonly loginButton: Locator
    readonly lockedAccountErrorMessage: Locator
    readonly closeButtonErrorMessage: Locator
    readonly loginURL: string

    constructor(page: Page) {
        this.page = page
        this.inputUsername = page.getByPlaceholder('Username')
        this.inputPassword = page.getByPlaceholder('Password')
        this.loginButton = page.locator('#login-button')
        this.lockedAccountErrorMessage = page.locator('form h3')
        this.closeButtonErrorMessage = page.locator('form button')
        this.loginURL = 'https://www.saucedemo.com/'

    }

    async LoginPage() {
        await this.page.goto(this.loginURL)

    }

    async loginUsingStandardUser() {
        await this.inputUsername.click()
        await this.inputUsername.pressSequentially('standard_user', { delay: 100 })

        await this.inputPassword.click()
        await this.inputPassword.pressSequentially('secret_sauce', { delay: 100 })

        await this.loginButton.click()
        await this.page.context().storageState({ path: 'auth.json' }) //ise-save nya yung credentials na successfully login
        await this.page.waitForTimeout(1000)
        await this.page.close()
    }

    async loginUsingInvalidUsername() {
        await this.inputUsername.click()
        await this.inputUsername.pressSequentially('asdaskjdha', { delay: 100 })

        await this.inputPassword.click()
        await this.inputPassword.pressSequentially('secret_sauce', { delay: 100 })

        await this.loginButton.click()

        expect(this.lockedAccountErrorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
        await this.page.waitForTimeout(1000)
        await this.closeButtonErrorMessage.click()
        await this.page.waitForTimeout(1000)
        this.page.close()
    }

    async loginUsingInvalidPassword() {
        await this.inputUsername.click()
        await this.inputUsername.pressSequentially('standard_user', { delay: 100 })

        await this.inputPassword.click()
        await this.inputPassword.pressSequentially('sasdhjlaskj', { delay: 100 })

        await this.loginButton.click()

        expect(this.lockedAccountErrorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
        await this.page.waitForTimeout(1000)
        await this.closeButtonErrorMessage.click()
        await this.page.waitForTimeout(1000)
        this.page.close()
    }

    async loginUsingInvalidCredentials() {
        await this.inputUsername.click()
        await this.inputUsername.pressSequentially('asdasoiuyo', { delay: 100 })

        await this.inputPassword.click()
        await this.inputPassword.pressSequentially('sasdhjlaskj', { delay: 100 })

        await this.loginButton.click()

        expect(this.lockedAccountErrorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
        await this.page.waitForTimeout(1000)
        await this.closeButtonErrorMessage.click()
        await this.page.waitForTimeout(1000)
        this.page.close()
    }

    async loginUsingLockedAccount() {
        await this.inputUsername.click()
        await this.inputUsername.pressSequentially('locked_out_user', { delay: 100 })

        await this.inputPassword.click()
        await this.inputPassword.pressSequentially('secret_sauce', { delay: 100 })

        await this.loginButton.click()

        expect(this.lockedAccountErrorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.')
        await this.page.waitForTimeout(1000)
        await this.closeButtonErrorMessage.click()
        await this.page.waitForTimeout(1000)
        this.page.close()

    }

    async loginUsingProblemUser() {
        await this.inputUsername.click()
        await this.inputUsername.pressSequentially('problem_user', { delay: 100 })

        await this.inputPassword.click()
        await this.inputPassword.pressSequentially('secret_sauce', { delay: 100 })

        await this.loginButton.click()
        await this.page.context().storageState({ path: 'auth.json' }) //ise-save nya yung credentials na successfully login
        await this.page.waitForTimeout(1000)
        await this.page.close()
    }

    async loginUsingPerformanceGlitchUser() {
        await this.inputUsername.click()
        await this.inputUsername.pressSequentially('performance_glitch_user', { delay: 100 })

        await this.inputPassword.click()
        await this.inputPassword.pressSequentially('secret_sauce', { delay: 100 })

        await this.loginButton.click()
        await this.page.context().storageState({ path: 'auth.json' }) //ise-save nya yung credentials na successfully login
        await this.page.waitForTimeout(1000)
        await this.page.close()
    }

    async loginUsingErrorUser() {
        await this.inputUsername.click()
        await this.inputUsername.pressSequentially('error_user', { delay: 100 })

        await this.inputPassword.click()
        await this.inputPassword.pressSequentially('secret_sauce', { delay: 100 })

        await this.loginButton.click()
        await this.page.context().storageState({ path: 'auth.json' }) //ise-save nya yung credentials na successfully login
        await this.page.waitForTimeout(1000)
        await this.page.close()
    }

    async loginUsingVisualUser() {
        await this.inputUsername.click()
        await this.inputUsername.pressSequentially('visual_user', { delay: 100 })

        await this.inputPassword.click()
        await this.inputPassword.pressSequentially('secret_sauce', { delay: 100 })

        await this.loginButton.click()
        await this.page.context().storageState({ path: 'auth.json' }) //ise-save nya yung credentials na successfully login
        await this.page.waitForTimeout(1000)
        await this.page.close()
    }

    async loginEmptyUsernameField() {
        await this.inputPassword.click()
        await this.inputPassword.pressSequentially('secret_sauce', { delay: 100 })

        await this.loginButton.click()
        await this.page.context().storageState({ path: 'auth.json' }) //ise-save nya yung credentials na successfully login

        expect(this.lockedAccountErrorMessage).toHaveText('Epic sadface: Username is required')
        await this.page.waitForTimeout(1000)
        await this.closeButtonErrorMessage.click()
        await this.page.waitForTimeout(1000)
        await this.page.close()
    }

    async loginEmptyPasswordField() {
        await this.inputUsername.click()
        await this.inputUsername.pressSequentially('visual_user', { delay: 100 })

        await this.loginButton.click()
        await this.page.context().storageState({ path: 'auth.json' }) //ise-save nya yung credentials na successfully login

        expect(this.lockedAccountErrorMessage).toHaveText('Epic sadface: Password is required')
        await this.page.waitForTimeout(1000)
        await this.closeButtonErrorMessage.click()
        await this.page.waitForTimeout(1000)
        await this.page.close()
    }

    async loginBothFieldAreEmpty() {
        await this.loginButton.click()
        await this.page.context().storageState({ path: 'auth.json' }) //ise-save nya yung credentials na successfully login

        expect(this.lockedAccountErrorMessage).toHaveText('Epic sadface: Username is required')
        await this.page.waitForTimeout(1000)
        await this.closeButtonErrorMessage.click()
        await this.page.waitForTimeout(1000)
        await this.page.close()
    }



}