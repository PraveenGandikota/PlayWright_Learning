const { test, expect } = require('@playwright/test')

test('Handle radio button', async ({ page }) => {
  await page.goto('https://itera-qa.azurewebsites.net/home/automation')

  //single checkbox
  await page.locator("//input[@id='monday' and @type='checkbox']").check()
  //await page.locator("//input[@id='monday' and @type='checkbox']").check();

  expect(
    await page.locator("//input[@id='monday' and @type='checkbox']")
  ).toBeChecked()
  expect(
    await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()
  ).toBeTruthy()
  expect(
    await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()
  ).toBeFalsy()

  //Mutliple checkbox
  const checkboxLocators = [
    "//input[@id='monday' and @type='checkbox']",
    "//input[@id='sunday' and @type='checkbox']",
    "//input[@id='saturday' and @type='checkbox']",
  ]
  //select multiple checkboxes
  for (const locator of checkboxLocators) {
    await page.locator(locator).check()
  }
  //unselect multiple checkboxes
  for (const locator of checkboxLocators) {
    if ((await page, locator(locator).isChecked())) {
      await page.locator(locator).uncheck()
    }
  }
  await page.waitForTimeout(5000) //pausing code
})
