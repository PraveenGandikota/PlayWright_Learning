/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
 page.getByText() to locate by text content.
 page.getByLabel() to locate a form control by associated label's text.
 page.getByPlaceholder() to locate an input by placeholder.
 page.getByAltText() to locate an element, usually image, by its text alternative.
 page.getByTitle() to locate an element by its title attribute.
 page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
 */

import { test, expect } from '@playwright/test'

test('Built-inLocators', async ({ page }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  )
  //page.getByAltText() -to locate an element , usually image, by its txt alternative.
  const logo = await page.getByAltText('company-branding')
  await expect(logo).toBeVisible()
  //page.getByPlaceholde() - to locate an input by placeholder.
  await page.getByPlaceholder('Username').fill('Admin')
  await page.getByPlaceholder('Password').fill('admin123')

  //page.getByRole
  await page.getByRole('button', { type: 'submit' }).click()

  const name = await page
    .locator('//pl[@class="oxd-userdropdown-name"]')
    .textContent()
  await expect(await page.getByText(name)).toBeVisible()
  // await expect(await page.getByText('Vishwas dsadsasdfs')).toBeVisible()
})
