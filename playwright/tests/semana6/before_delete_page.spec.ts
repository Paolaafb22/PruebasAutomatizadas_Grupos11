import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/ghost/#/signin');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('lwilches@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('LEwima@951');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/site');
  await page.getByRole('link', { name: 'Pages' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/pages');
  await page.getByRole('link', { name: 'New page' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/editor/page');
  await page.getByPlaceholder('Page Title').click();
  await page.getByPlaceholder('Page Title').fill('este es un nuevo post');
  await page.getByPlaceholder('Page Title').press('Shift+Home');
  await page.getByPlaceholder('Page Title').press('Control+c');
  await page.getByPlaceholder('Page Title').click();
  await page.getByPlaceholder('Page Title').press('Enter');
  await page.getByRole('link', { name: 'Pages' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/pages');
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/before_delete_page/1-dashboard__webkit.png'}) 

  var post = await page.locator("a.ember-view.permalink.gh-list-data.gh-post-list-title").first()
  var url  = await post.evaluate(e => (e as HTMLLinkElement ).href);
  post.click();

  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/before_delete_page/2-screen_page__webkit.png'}) 

  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Delete page' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/before_delete_page/3-delete_page__webkit.png'}) 
  await page.getByRole('button', { name: 'Delete' }).click();

  await expect(page).toHaveURL('http://localhost:3001/ghost/#/pages');
});