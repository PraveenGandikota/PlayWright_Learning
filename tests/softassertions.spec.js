const { test, expect } = require('@playwright/test')

test('Soft assertions', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html')

  //hard assertions

  await expect(page).toHaveTitle('STORE')
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
  await expect(page.locator('.navbar-brand')).toBeVisible()

  //soft assertions:
  await expect.soft(page).toHaveTitle('STORE')
  await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
  await expect.soft(page.locator('.navbar-brand')).toBeVisible()
})
