import { Locator, Page } from "@playwright/test";

export class InventoryPage {

    readonly page: Page
    readonly addToCartButton: Locator
    constructor(page: Page) {
        this.page = page
        this.addToCartButton = page.locator('.pricebar button')
    }

    async gotoInventoryPage() {
        await this.page.goto('https://www.saucedemo.com/inventory.html')
    }

    async addToCartSauceLabsBackpack() {
        await this.addToCartButton.first().click()
    }

    async addToCartAll() {
        for (let i = 0; i < 6; i++) {
            await this.addToCartButton.nth(i).click()
            await this.page.waitForTimeout(500)
            console.log(`Clicked button #${i + 1}`)
        }
    }

}