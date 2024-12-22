import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=demoblaze&oq=demoblaze&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDkwNjhqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Demo Blaze Demo Blaze https' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('#loginpassword').press('Enter');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByText('Place order ×').click();
  await page.getByLabel('Place order').getByLabel('Close').click();
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  await page.getByRole('link', { name: 'About us' }).click();
  await page.getByText('About us ×').click();
  await page.locator('#videoModal').getByLabel('Close').click();
  await page.getByRole('link', { name: 'Log out' }).click();
});