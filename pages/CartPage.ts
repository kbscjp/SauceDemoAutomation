import { expect, Locator, Page } from "@playwright/test";

export class CartPage {

    readonly page: Page
    readonly cartPageURL: string
    readonly yourCart: Locator
    readonly checkOutButtonText: Locator
    readonly continueShopping: Locator
    readonly quantityLabel: Locator
    readonly descriptionLable: Locator

    constructor(page: Page) {
        this.page = page
        this.cartPageURL = 'https://www.saucedemo.com/cart.html'
        this.yourCart = page.locator('.title', { hasText: "Your Cart" })
        this.checkOutButtonText = page.locator('.checkout_button')
        this.continueShopping = page.locator('#continue-shopping')
        this.quantityLabel = page.locator('.cart_quantity_label')
        this.descriptionLable = page.locator('.cart_desc_label')
    }

    async CartPage() {
        await this.page.goto(this.cartPageURL)
        expect(this.cartPageURL).toContain('/cart.html')
        await expect(this.yourCart).toContainText('Your Cart')
        await expect(this.checkOutButtonText).toContainText('Checkout')
        await expect(this.quantityLabel).toContainText('QTY')
        await expect(this.descriptionLable).toContainText('Description')


        await this.page.close()
    }

    async CheckOutButton() {
        await this.page.goto(this.cartPageURL)
        await this.checkOutButtonText.click()
        await this.page.close()
    }

    async ContinueShopping() {
        await this.page.goto(this.cartPageURL)
        await expect(this.continueShopping).toContainText('Continue Shopping')
        await this.continueShopping.click()
        await this.page.close()
    }



}