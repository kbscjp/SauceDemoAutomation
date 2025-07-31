import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test.use({ storageState: 'auth.json' })

test('Cart Page', async ({ page }) => {
    const navigateTo = new CartPage(page)

    await navigateTo.CartPage()
})

test('Check Out button', async ({ page }) => {
    const navigateTo = new CartPage(page)

    await navigateTo.CheckOutButton()

})

test('Continue Shopping', async ({ page }) => {
    const navigateTo = new CartPage(page)

    await navigateTo.ContinueShopping()
})
