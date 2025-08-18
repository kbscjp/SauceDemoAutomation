import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

let inventoryPage: InventoryPage;
test.use({ storageState: 'auth.json' })

test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page)
    await inventoryPage.gotoInventoryPage()
})

test.describe('Inventory Items', () => {
    test('Validating the Descriptions of All Items', async ({ page }) => {
        await inventoryPage.validateAllItemsDescription()
    })

    test('Add To Cart Sauce Lab Backpack', async ({ page }) => {
        await inventoryPage.addToCartSauceLabsBackpack()
    })

    test('Add to Cart All', async ({ page }) => {
        await inventoryPage.addToCartAll()
    })

    test('Checking of name of items is clicable', async ({ page }) => {
        await inventoryPage.inventoryItems()
    })

    test('Testing the Sorting Options', async ({ page }) => {
        await inventoryPage.sortCategories()
    })
})


test.describe('Navigation Panel', () => {
    test('All Items', async ({ page }) => {
        await inventoryPage.AllItems()
    })

    test('About Page', async ({ page }) => {
        await inventoryPage.AboutPage()
    })

    test('Log Out', async ({ page }) => {
        await inventoryPage.LogOut()
    })

    test('Reset App State', async ({ page }) => {
        await inventoryPage.ResetAppState()
    })
})

test.describe('Footer Contents', () => {
    test('Facebook Button on Footer', async ({ page }) => {
        await inventoryPage.faceBookPage()
    })

    test('X SauceLab Page', async ({ page }) => {
        await inventoryPage.xSauceLabs()
    })

    test('Linked In SauceLab Page', async ({ page }) => {
        await inventoryPage.linkedInSauceLabs()
    })

    test('Copy Right', async ({ page }) => {
        await inventoryPage.footerCopyRight()
    })
})


// test('Validating Price Items', async ({ page }) => {
//     inventoryPage.validatingPriceItem()
// })



