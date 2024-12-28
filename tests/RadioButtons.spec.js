const { test, expect } = require('@playwright/test')

test('Handle radio button', async ({ page }) => {
  await page.goto('https://itera-qa.azurewebsites.net/home/automation')

  //radio button
  await page.locator("//input[@value='option2']").check() //male
  //await page.check("//input[@value = 'option2']");

  await expect(await page.locator("//input[@value='option2")).toBeVisible()
  await expect(
    await page.locator("//input[@value='option2']").isChecked()
  ).toBeTruthy() //male
  await expect(
    await page.locator("//input[@value='option2']").isChecked()
  ).toBeFalsy() //female

  /*// Check the checkbox
  await page.getByLabel('I agree to the terms above').check();

   // Assert the checked state
   expect(page.getByLabel('Subscribe to newsletter')).toBeChecked();
   
   // Select the radio button
    await page.getByLabel('XL').check();
    //page.fill("//input[@id='name']",'John');
    */
  await page.waitForTimeout(5000) //pausing code
})
