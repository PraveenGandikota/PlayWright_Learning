//const { test, expect } = require('@playwright/test')
/*
import { test, except } from '@playwright/test'

test('Locators', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html')

  //click on login button - property
  //await page.locator('id=login2').click()
  await page.click('id=login2')

  //provide username -css
  //await page.locator('loginusername').fill("pavanol")

  await page.fill('#loginusername', 'pavanol')
  //awawit page.type('#loginusername','pavanol')

  //provide passwowrd -css
  await page.fill("input[id='loginpassword']", 'test@123')
  //click on login button -XPath
  await page.click("//button[normalize-space()='login in']")

  //verify logout link presence
  const logoutlink = await page.locator("//a[normalize-space()='log out']")
  await except(logoutlink).toBeVisible()
  await page.close()
})*/

import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.demoblaze.com/index.html')

  // Click on the login button - property
  await page.click('#login2')

  // Provide username - CSS
  await page.fill('#loginusername', 'pavanol')

  // Provide password - CSS

  await page.fill("input[id='loginpassword']", 'test@123')

  // Click on login button - XPath
  await page.click("//button[normalize-space()='Log in']")

  // Verify logout link presence
  const logoutLink = page.locator("//a[normalize-space()='Log out']")
  await expect(logoutLink).toBeVisible()

  // Close the page
  await page.close()
})
