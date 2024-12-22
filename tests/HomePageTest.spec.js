const { test, expect } = require('@playwright/test')

test('Home Page', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html')

  // Get and log the page title
  const pageTitle = await page.title()
  console.log('Page title is:', pageTitle)

  // Assert the page title
  await expect(page).toHaveTitle('STORE')

  // Get and log the page URL
  const pageUrl = await page.url()
  console.log('Page URL is:', pageUrl)

  // Assert the page URL
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

  // Close the page
  await page.close()
})
