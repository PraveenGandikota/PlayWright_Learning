/*const { test, expect } = require('@playwright/test')

test('Handle inputbox', async ({ page }) => {
  await page.goto('https://itera-qa.azurewebsites.net/home/automation')

  //inputBox-firstname
  await expect(await page.locator("//input[@id='name']")).toBeVisible()
  await expect(await page.locator("//input[@id='name']")).toBeEmpty()
  await expect(await page.locator("//input[@id='name']")).toBeEditable()
  await expect(await page.locator("//input[@id='name']")).toBeEnabled()

  await page.locator("//input[@id='name']").fill('John')
  //page.fill("//input[@id='name']",'John');

  await page.waitForTimeout(5000) //pausing code
})
*/
const { test, expect } = require('@playwright/test')

test('Handle inputbox', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://itera-qa.azurewebsites.net/home/automation')

  // Locate the input box
  const inputBox = page.locator("//input[@id='name']")

  // Assertions: visibility, emptiness, editability, and enablement
  await expect(inputBox).toBeVisible()
  await expect(inputBox).toBeEmpty()
  await expect(inputBox).toBeEditable()
  await expect(inputBox).toBeEnabled()

  // Fill the input box
  await inputBox.fill('John')

  // Pause for 5 seconds (not recommended for production use)
  await page.waitForTimeout(5000)
})
