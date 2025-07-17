import { chromium } from "@playwright/test";
import fs from 'fs'

(async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()

    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await page.waitForURL('**/inventory.html');

    // Ensure auth folder exists
    if (!fs.existsSync('auth')) {
        fs.mkdirSync('auth');
    }

    await page.context().storageState({ path: 'auth.json' })
    await browser.close()

    console.log('Auth session saved to auth/auth.json')
})