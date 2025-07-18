import { Locator, Page } from "@playwright/test";

export class InventoryPage {

    readonly page: Page
    readonly addToCartButton: Locator
    readonly shoppingCartButton: Locator
    readonly menuButton: Locator
    readonly logOutMenu: Locator
    readonly inventoryURL: string
    readonly continueShoppingButton: Locator

    constructor(page: Page) {
        this.page = page
        this.addToCartButton = page.locator('.pricebar button')
        this.shoppingCartButton = page.locator('.shopping_cart_link')
        this.menuButton = page.locator('.bm-burger-button')
        this.logOutMenu = page.locator('.bm-item-list #logout_sidebar_link')
        this.inventoryURL = 'https://www.saucedemo.com/inventory.html'
        this.continueShoppingButton = page.locator('#continue-shopping')

    }

    async LogOut() {
        await this.menuButton.hover()
        await this.menuButton.click()
        await this.logOutMenu.hover()
        await this.page.waitForTimeout(200)
        await this.logOutMenu.click()
        await this.page.waitForTimeout(200)
        await this.page.close()
    }


    async gotoInventoryPage() {
        await this.page.goto(this.inventoryURL)
    }

    async addToCartSauceLabsBackpack() {
        await this.addToCartButton.first().click()
        await this.shoppingCartButton.click()
    }

    async addToCartAll() {

        for (let i = 0; i < 6; i++) {
            await this.addToCartButton.nth(i).click()
            await this.page.waitForTimeout(500)
            console.log(`Clicked button #${i + 1}`)
        }

        await this.shoppingCartButton.click()
        await this.continueShoppingButton.scrollIntoViewIfNeeded()
        await this.page.waitForTimeout(500)
        await this.continueShoppingButton.hover()
        await this.page.waitForTimeout(500)
        await this.continueShoppingButton.click()
    }

}