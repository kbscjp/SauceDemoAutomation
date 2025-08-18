import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { faker } from '@faker-js/faker'
import username from '../test-data/usernames.json'

let loginPage: LoginPage;
const ERR_USERNAME_REQUIRED = 'Epic sadface: Username is required';
const ERR_PASSWORD_REQUIRED = 'Epic sadface: Password is required';
const ERR_INVALID_CREDS = 'Epic sadface: Username and password do not match any user in this service';
const ERR_LOCKED_ACCT = 'Epic sadface: Sorry, this user has been locked out.'


test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  await loginPage.visitLoginPage()
})

test.describe('Positive Scenarios', () => {
  test('Login using valid username and password', async ({ page }) => {
    await loginPage.loginAndSaveSession('standard_user', 'secret_sauce')
  })

  test('Login with User Problem Account', async ({ page }) => {
    await loginPage.loginAndSaveSession('problem_user', 'secret_sauce')
  })

  test('Login Perfmance Glitch User', async ({ page }) => {
    await loginPage.loginAndSaveSession('performance_glitch_user', 'secret_sauce')
  })

  test('Login Using Error User', async ({ page }) => {
    await loginPage.loginAndSaveSession('error_user', 'secret_sauce')
  })

  test('Login Using Visual User', async ({ page }) => {
    await loginPage.loginAndSaveSession('visual_user', 'secret_sauce')
  })

})


test.describe('Negative Scenarios', () => {

  test('Login while username is blank', async ({ page }) => {
    await loginPage.loginEmptyUsernameField('secret_sauce', ERR_USERNAME_REQUIRED)
  })

  test('Login while password is blank', async ({ page }) => {
    await loginPage.loginEmptyPasswordField('visual_user', ERR_PASSWORD_REQUIRED)
  })

  test('Login both field is empty', async ({ page }) => {
    await loginPage.loginBothFieldAreEmpty(ERR_USERNAME_REQUIRED)
  })

  test('Login using invalid username', async ({ page }) => {
    await loginPage.loginInvalidCredentials(`${faker.person.fullName().replace(' ', '_').toLowerCase()}`, 'secret_sauce', ERR_INVALID_CREDS)
  })

  test('Login using Invalid Password', async ({ page }) => {
    await loginPage.loginInvalidCredentials('standard_user', faker.food.ingredient(), ERR_INVALID_CREDS)
  })

  test('Login using invalid Credentials', async ({ page }) => {
    await loginPage.loginInvalidCredentials(`${faker.person.fullName().replace(' ', '_').toLowerCase()}`, faker.food.ingredient(), ERR_INVALID_CREDS)
  })

  test('User Account Locked', async ({ page }) => {
    await loginPage.loginUsingLockedAccount('locked_out_user', 'secret_sauce', ERR_LOCKED_ACCT)
  })

})




