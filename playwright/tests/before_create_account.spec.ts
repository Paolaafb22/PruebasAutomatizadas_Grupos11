import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/ghost/#/setup/two');
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/before_create_account/1-create_login_webkit.png'})
  await page.getByPlaceholder('Eg. The Daily Awesome').click();
  await page.getByPlaceholder('Eg. The Daily Awesome').fill('pruebas');
  await page.getByPlaceholder('Eg. John H. Watson').click();
  await page.getByPlaceholder('Eg. John H. Watson').fill('Leonardo Wilches');
  await page.getByPlaceholder('Eg. john@example.com').click();
  await page.getByPlaceholder('Eg. john@example.com').fill('lwilches@gmail.com');
  await page.getByPlaceholder('At least 10 characters').click();
  await page.getByPlaceholder('At least 10 characters').fill('LEwima');
  await page.getByPlaceholder('At least 10 characters').press('Alt+6');
  await page.getByPlaceholder('At least 10 characters').press('Alt+4');
  await page.getByPlaceholder('At least 10 characters').fill('LEwima@951');
  await page.getByPlaceholder('At least 10 characters').press('Tab');
  await page.screenshot({path: 'result/before_create_account/2-fill_fields_login_webkit.png'})
  await page.getByRole('button', { name: 'Last step: Invite staff users' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/setup/three');
  await page.getByRole('button', { name: 'I\'ll do this later, take me to my site!' }).click();
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/site');
  await page.screenshot({path: 'result/before_create_account/3-view_dashboard_webkit.png'})
});