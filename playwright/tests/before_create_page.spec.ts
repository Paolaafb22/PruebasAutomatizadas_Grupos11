import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/ghost/#/signin');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('lwilches@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('LEwima@951');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/site');
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/before_create_page/1-dashboard_webkit.png'})
  await page.getByRole('link', { name: 'Pages' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/pages');
  await page.getByRole('link', { name: 'New page' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/editor/page');
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/before_create_page/2-page_screen_webkit.png'})
  await page.getByPlaceholder('Page Title').click();
  await page.getByPlaceholder('Page Title').fill('nueva pagina ');
  await page.getByPlaceholder('Page Title').press('Enter');
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/before_create_page/3-page_post_screen_webkit.png'})
  await page.getByRole('link', { name: 'Pages' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/pages');
});