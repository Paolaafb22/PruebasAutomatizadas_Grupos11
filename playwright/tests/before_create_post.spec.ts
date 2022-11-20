import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/ghost/#/signin');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('lwilches@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('LEwima@951');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/site');
  await page.screenshot({path: 'result/before_create_post/1-dashboard__webkit.png'})
  await page.getByRole('link', { name: 'New post' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/editor/post');
  await page.getByPlaceholder('Post Title').click();
  await page.getByPlaceholder('Post Title').fill('este es un  post de pruebas automatizadas');
  await page.screenshot({path: 'result/before_create_post/2-post_screen_before_save__webkit.png'})
  await page.getByPlaceholder('Post Title').press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Posts' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/posts');
  await page.screenshot({path: 'result/before_create_post/3-post_screen_after_save__webkit.png'})
});