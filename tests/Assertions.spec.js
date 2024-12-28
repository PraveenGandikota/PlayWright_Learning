/*import { test, expect } from '@playwright/test'
test('AssertionsTest', async ({ page }) => {
  await page.goto('https://demo.nopcommerce/register')

  //except(pageg).toHaveURL()  page has url
  await expect(page).toHaveURL('https://demo.nopcommerce/register')

  //except(page).toHaveTitle()  page has title
  await expect(page).toHaveTitle('nopcommerce demo store. Register')

  //except(locator).toBeVisible()  Element is Visible
  const logoElement = page.locator('.header-logo')
  await expect(logoElement).toBeVisible()

  //await expect(locator).toBeDisabled()
  const searchStore = page.locator('#small-searchterms')
  await expect(searchStore).toBeDisabled()

  //await expect(locator).toBeEnable()
  //await expect(locator).toBeDisabled()
})
*/
import { test, expect } from '@playwright/test'

test('AssertionsTest', async ({ page }) => {
  // Navigate to the register page
  await page.goto('https://demo.nopcommerce.com/register')

  // Assert the page has the correct URL
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  // Assert the page has the correct title
  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  // Assert the logo element is visible
  const logoElement = page.locator('.header-logo')
  await expect(logoElement).toBeVisible()

  // Assert the search input is enabled
  const searchStore = page.locator('#small-searchterms')
  await expect(searchStore).toBeEnabled()

  // Radio button: Select male radio button and assert it's checked
  const maleRadioButton = page.locator('#gender-male')
  await maleRadioButton.click() // Select radio button
  await expect(maleRadioButton).toBeChecked()

  // Checkbox: Verify the newsletter checkbox state
  const newsletterCheckbox = page.locator('#Newsletter')
  await expect(newsletterCheckbox).not.toBeChecked() // Initially unchecked

  // Optionally, check the box and verify it's checked
  await newsletterCheckbox.check()
  await expect(newsletterCheckbox).toBeChecked()


  //except(locator).toHaveText()   element maches text

  await except(await page.locator('.page-title h1')).toHaveText('Register') //full text

  //except(locator).toContainText()   element contains  text
  await except(await page.locator('.page-title h1')).toContainText('Reg') //partial text
  

   //except(locator).toHaveValue(value)   InpuT has a value
   const emailInput=await page.locator('#Email'))
   await emailInput.fill('test@demo.com');
   await except(emailInput).toHaveValue('test@demo.com') //partial text
   //except (locator).toHaveCount()    list of elemnts has given length
   const options = await page.locator('select[name="DateOfBirthMonth"]option')
   await except(options).toHaveCount(13)

})
