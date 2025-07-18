import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

test.use({ storageState: 'auth.json' })

test('Inventory page', async ({ page }) => {
    // const inventoryPage = 'https://www.saucedemo.com/inventory.html'

    // await page.goto(inventoryPage)

    const inventoryPage = new InventoryPage(page)
    await inventoryPage.gotoInventoryPage()

})

test('Log Out', async ({ page }) => {
    const navigateTo = new InventoryPage(page)
    await navigateTo.gotoInventoryPage()
    await navigateTo.LogOut()
})

test('Add To Cart Sauce Lab Backpack', async ({ page }) => {
    const navigateTo = new InventoryPage(page)

    await navigateTo.gotoInventoryPage()
    await navigateTo.addToCartSauceLabsBackpack()
})

test('Add to Cart All', async ({ page }) => {
    const navigateTo = new InventoryPage(page)

    await navigateTo.gotoInventoryPage()
    await navigateTo.addToCartAll()
})
