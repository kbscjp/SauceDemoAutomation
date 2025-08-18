import { expect, Locator, Page } from "@playwright/test";
import inventoryData from '../test-data/inventoryDescriptions.json'

export class InventoryPage {

    readonly page: Page
    readonly addToCartButton: Locator
    readonly invetoryItemNames: Locator
    readonly shoppingCartButton: Locator
    readonly navigationButton: Locator
    readonly logOutMenu: Locator
    readonly allItems: Locator
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
    readonly productSortContainer: Locator
    readonly socialTwitter: Locator
    readonly socialFacebook: Locator
    readonly socialLinkedIn: Locator
    readonly shoppingCartBadge: Locator
    readonly aboutPage: Locator
    readonly aboutPageURL: string
    readonly resetAppState: Locator
    readonly facebookPageLink: string
    readonly twitterLink: string
    readonly linkedInLink: string
    readonly footerCopy: Locator
    readonly inventoryItemsDescription: Locator
    readonly allPriceItems: Locator


    constructor(page: Page) {
        this.page = page
        this.addToCartButton = page.locator('.pricebar .btn_small')
        this.invetoryItemNames = page.locator('inventory_item_name ')
        this.shoppingCartButton = page.locator('.shopping_cart_link')
        this.navigationButton = page.locator('.bm-burger-button')
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
        this.productSortContainer = page.locator('.product_sort_container')
        this.socialTwitter = page.locator('.social_twitter')
        this.socialFacebook = page.locator('.social_facebook')
        this.socialLinkedIn = page.locator('.social_linkedin')
        this.shoppingCartBadge = page.locator('shopping_cart_badge')
        this.aboutPage = page.locator('#about_sidebar_link')
        this.aboutPageURL = 'https://saucelabs.com/'
        this.resetAppState = page.locator('#reset_sidebar_link')
        this.facebookPageLink = 'https://www.facebook.com/saucelabs'
        this.twitterLink = 'https://x.com/saucelabs'
        this.linkedInLink = 'https://www.linkedin.com/company/sauce-labs/'
        this.footerCopy = page.locator('.footer_copy')
        this.inventoryItemsDescription = page.locator('.inventory_item_label .inventory_item_desc')
        this.allItems = page.locator('#inventory_sidebar_link')
        this.allPriceItems = this.page.locator('.inventory_item_price')

    }

    async AllItems() {
        await this.navigationButton.hover()
        await this.navigationButton.click()
        await this.allItems.hover()
        await this.allItems.click()
    }

    async LogOut() {
        await this.navigationButton.hover()
        await this.navigationButton.click()
        await this.logOutMenu.hover()
        await this.page.waitForTimeout(200)
        await this.logOutMenu.click()
        await this.page.waitForTimeout(200)
        await this.page.close()
    }

    async AboutPage() {
        await this.navigationButton.click()
        await this.aboutPage.hover()
        await this.page.waitForTimeout(200)
        await this.aboutPage.click()

        expect(this.aboutPageURL).toEqual('https://saucelabs.com/')
    }

    async ResetAppState() {
        await this.navigationButton.click()
        await this.resetAppState.hover()
        await this.page.waitForTimeout(200)
        await this.resetAppState.click()
    }



    async gotoInventoryPage() {
        await this.page.goto(this.inventoryURL)
        await expect(this.labelProducts).toHaveText('Products')
    }

    async validateAllItemsDescription() {

        const expectedDescriptions: string[] = inventoryData.Itemdescriptions

        for (let i = 0; i < 6; i++) {
            const actualDesctription = await this.inventoryItemsDescription.nth(i).textContent()
            expect(actualDesctription?.trim()).toBe(expectedDescriptions[i])
        }
    }


    async addToCartSauceLabsBackpack() {
        await this.page.goto(this.inventoryURL)
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
            console.log(`Click Item number ${i + 1}`)
            expect(this.shoppingCartBadge).toBeVisible
        }

        await this.shoppingCartButton.click()
        await this.continueShoppingButton.scrollIntoViewIfNeeded()
        await this.page.waitForTimeout(500)
        await this.page.close()

    }

    async inventoryItems() {
        const inventoryItems = [
            this.sauceLabItemBackPack,
            this.sauceLabItemTShirt,
            this.sauceLabItemOnesie,
            this.sauceLabItemBikeLight,
            this.sauceLabFleeceJacket,
            this.sauceLabAllTheThings
        ]

        for (const item of inventoryItems) {
            await this.clickItemAndBack(item)
        }
    }

    async sortCategories() {
        await this.page.goto(this.inventoryURL)

        const sortOptions = [
            'Name (Z to A)',
            'Price (low to high)',
            'Price (high to low)',
            'Name (A to Z)'
        ]

        for (const option of sortOptions) {
            await this.productSortContainer.click()
            await this.productSortContainer.selectOption(option)
        }
    }

    async faceBookPage() {
        await this.page.goto(this.inventoryURL)

        await this.socialFacebook.scrollIntoViewIfNeeded()
        await this.socialFacebook.click()
        expect(this.facebookPageLink).toEqual('https://www.facebook.com/saucelabs')

    }

    async xSauceLabs() {
        await this.page.goto(this.inventoryURL)

        await this.socialTwitter.scrollIntoViewIfNeeded()
        await this.socialTwitter.click()
        expect(this.twitterLink).toEqual('https://x.com/saucelabs')
    }

    async linkedInSauceLabs() {
        await this.page.goto(this.inventoryURL)

        await this.socialLinkedIn.scrollIntoViewIfNeeded()
        await this.socialLinkedIn.click()
        expect(this.linkedInLink).toEqual('https://www.linkedin.com/company/sauce-labs/')
    }

    async footerCopyRight() {
        await this.page.goto(this.inventoryURL)

        await this.footerCopy.scrollIntoViewIfNeeded()
        expect(this.footerCopy).toContainText('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')

    }


    private async clickItemAndBack(item: Locator) {
        await item.hover()
        await item.click()
        await this.invertoryItemBackButton.isVisible()
        await this.invertoryItemBackButton.click()
        expect(this.inventoryURL).toContain('inventory.html')
    }


}
