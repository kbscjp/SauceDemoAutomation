import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

let inventoryPage: InventoryPage;
test.use({ storageState: 'auth.json' })

test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page)
    await inventoryPage.gotoInventoryPage()
})

test('Log Out', async ({ page }) => {
    await inventoryPage.LogOut()
})

test('About Page', async ({ page }) => {
    await inventoryPage.AboutPage()
})

test('Reset App State', async ({ page }) => {
    await inventoryPage.ResetAppState()
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

test('Facebook Button on Footer', async ({ page }) => {
    await inventoryPage.faceBookPage()
})
