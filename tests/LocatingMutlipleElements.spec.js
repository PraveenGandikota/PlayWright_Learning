import { test, expect } from '@playwright/test'

test('LocateMutlipleElements', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.demoblaze.com/index.html')

  const links = await page.$$('a')
  //iterating over all items
  for (let link of links) {
    const linktext = await link.textContent()
    console.log(linktext)
  }
  page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
  //extracting products:
  const products = await page.$$("//div[@id='tbodyid']//div//h4/a")
  for (const product of products) {
    const productName = await product.textContent()
    console.log(productName)
  }
  // Close the page
  await page.close()
})
