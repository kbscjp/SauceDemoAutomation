import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { faker } from '@faker-js/faker'



test('Login using valid username and password', async ({ page }) => {
  const navigateTo = new LoginPage(page)

  await navigateTo.LoginPage()
  await navigateTo.loginUsingStandardUser()

})

test('Login using invalid username', async ({ page }) => {
  const navigateTo = new LoginPage(page)
  await navigateTo.LoginPage()
  await navigateTo.loginUsingInvalidUsername()

})

test('Login using Invalid Password', async ({ page }) => {
  const navigateTo = new LoginPage(page)

  await navigateTo.LoginPage()
  await navigateTo.loginUsingInvalidPassword()

})

test('Login using invalid Credentials', async ({ page }) => {
  const navigateTo = new LoginPage(page)

  await navigateTo.LoginPage()
  await navigateTo.loginUsingInvalidCredentials()

})

test('User Account Locked', async ({ page }) => {
  const navigateTo = new LoginPage(page)

  await navigateTo.LoginPage()
  await navigateTo.loginUsingLockedAccount()

})

test('Login with User Problem Account', async ({ page }) => {
  const navigateTo = new LoginPage(page)

  await navigateTo.LoginPage()
  await navigateTo.loginUsingProblemUser()
})

test('Login Perfmance Glitch User', async ({ page }) => {
  const navigateTo = new LoginPage(page)

  await navigateTo.LoginPage()
  await navigateTo.loginUsingPerformanceGlitchUser()
})

test('Login Using Error User', async ({ page }) => {
  const navigateTo = new LoginPage(page)

  await navigateTo.LoginPage()
  await navigateTo.loginUsingErrorUser()
})

test('Login Using Visual User', async ({ page }) => {
  const navigateTo = new LoginPage(page)

  await navigateTo.LoginPage()
  await navigateTo.loginUsingVisualUser()
})

test('Login while username is blank', async ({ page }) => {
  const navigateTo = new LoginPage(page)

  await navigateTo.LoginPage()
  await navigateTo.loginEmptyUsernameField()

})

test('Login while password is blank', async ({ page }) => {
  const navigateTo = new LoginPage(page)

  await navigateTo.LoginPage()
  await navigateTo.loginEmptyPasswordField()

})

test('Login both field is empty', async ({ page }) => {
  const navigateTo = new LoginPage(page)

  await navigateTo.LoginPage()
  await navigateTo.loginBothFieldAreEmpty()
})







