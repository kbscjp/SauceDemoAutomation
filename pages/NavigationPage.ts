import { Page } from "@playwright/test";


export class NavigationPage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async LoginPage() {

        await this.page.goto('https://www.saucedemo.com/')
        await this.page.close()
    }

    async InventoryPage() {

    }
}