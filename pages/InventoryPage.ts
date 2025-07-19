import { expect, Locator, Page } from "@playwright/test";

export class InventoryPage {

    readonly page: Page
    readonly addToCartButton: Locator
    readonly shoppingCartButton: Locator
    readonly menuButton: Locator
    readonly logOutMenu: Locator
    readonly inventoryURL: string
    readonly labelProducts: Locator
    readonly inventoryItemURL: string
    readonly continueShoppingButton: Locator
    readonly sauceLabItemBackPack: Locator
    readonly sauceLabItemTShirt: Locator
    readonly sauceLabItemOnesie: Locator
    readonly sauceLabItemBikeLight: Locator
    readonly sauceLabFleeceJacket: Locator
    readonly sauceLabAllTheThings: Locator
    readonly invertoryItemBackButton: Locator

    constructor(page: Page) {
        this.page = page
        this.addToCartButton = page.locator('.pricebar .btn_small')
        // this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
        this.shoppingCartButton = page.locator('.shopping_cart_link')
        this.menuButton = page.locator('.bm-burger-button')
        this.logOutMenu = page.locator('.bm-item-list #logout_sidebar_link')
        this.inventoryURL = 'https://www.saucedemo.com/inventory.html'
        this.labelProducts = page.locator('.title', { hasText: "Products" })
        this.inventoryItemURL = '**/inventory-item.html'
        this.continueShoppingButton = page.locator('#continue-shopping')
        this.sauceLabItemBackPack = page.locator('.inventory_item_name ', { hasText: "Sauce Labs Backpack" })
        this.sauceLabItemTShirt = page.locator('.inventory_item_name ', { hasText: "Sauce Labs Bolt T-Shirt" })
        this.sauceLabItemOnesie = page.locator('.inventory_item_name ', { hasText: "Sauce Labs Onesie" })
        this.sauceLabItemBikeLight = page.locator('.inventory_item_name ', { hasText: "Sauce Labs Bike Light" })
        this.sauceLabFleeceJacket = page.locator('.inventory_item_name ', { hasText: "Sauce Labs Fleece Jacket" })
        this.sauceLabAllTheThings = page.locator('.inventory_item_name ', { hasText: "Test.allTheThings() T-Shirt (Red)" })
        this.invertoryItemBackButton = page.locator('.inventory_details_back_button')


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
        await expect(this.labelProducts).toHaveText('Products')
        // await this.page.close()  --ang bobo nung nag lagay
    }

    async addToCartSauceLabsBackpack() {
        await this.addToCartButton.first().click()
        await this.page.waitForTimeout(500)
        await this.shoppingCartButton.click()
        await this.page.waitForTimeout(500)
        await this.page.close()
    }

    async addToCartAll() {

        for (let i = 0; i < 6; i++) {
            await this.addToCartButton.nth(i).click()
            await this.page.waitForTimeout(500)
        }

        await this.shoppingCartButton.click()
        await this.continueShoppingButton.scrollIntoViewIfNeeded()
        await this.page.waitForTimeout(500)
        await this.page.close()

    }

    async inventoryItems() {
        /**Clicking Backpack info */
        await this.sauceLabItemBackPack.hover()
        expect(this.inventoryItemURL).toContain('/inventory-item.html')
        await this.page.waitForTimeout(700)
        await this.sauceLabItemBackPack.click()
        await this.page.waitForTimeout(700)
        await this.invertoryItemBackButton.hover()
        await this.page.waitForTimeout(700)
        await this.invertoryItemBackButton.click()

        /**Clicking Tshirt info */
        await this.sauceLabItemTShirt.hover()
        expect(this.inventoryItemURL).toContain('/inventory-item.html')
        await this.page.waitForTimeout(700)
        await this.sauceLabItemTShirt.click()
        await this.page.waitForTimeout(700)
        await this.invertoryItemBackButton.hover()
        await this.page.waitForTimeout(700)
        await this.invertoryItemBackButton.click()

        /**Clicking Onesie info */
        await this.sauceLabItemOnesie.hover()
        expect(this.inventoryItemURL).toContain('/inventory-item.html')
        await this.page.waitForTimeout(700)
        await this.sauceLabItemOnesie.click()
        await this.page.waitForTimeout(700)
        await this.invertoryItemBackButton.hover()
        await this.page.waitForTimeout(700)
        await this.invertoryItemBackButton.click()

        /**Clicking Bike Light info */
        await this.sauceLabItemBikeLight.hover()
        expect(this.inventoryItemURL).toContain('/inventory-item.html')
        await this.page.waitForTimeout(700)
        await this.sauceLabItemBikeLight.click()
        await this.page.waitForTimeout(700)
        await this.invertoryItemBackButton.hover()
        await this.page.waitForTimeout(700)
        await this.invertoryItemBackButton.click()

        /**Clicking Fleece Jacket info */
        await this.sauceLabFleeceJacket.hover()
        expect(this.inventoryItemURL).toContain('/inventory-item.html')
        await this.page.waitForTimeout(700)
        await this.sauceLabFleeceJacket.click()
        await this.page.waitForTimeout(700)
        await this.invertoryItemBackButton.hover()
        await this.page.waitForTimeout(700)
        await this.invertoryItemBackButton.click()

        /**Clicking Bike Light info */
        await this.sauceLabAllTheThings.hover()
        expect(this.inventoryItemURL).toContain('/inventory-item.html')
        await this.page.waitForTimeout(700)
        await this.sauceLabAllTheThings.click()
        await this.page.waitForTimeout(700)
        await this.invertoryItemBackButton.hover()
        await this.page.waitForTimeout(700)
        await this.invertoryItemBackButton.click()

        await this.page.waitForTimeout(700)
        await this.page.close()
    }




}