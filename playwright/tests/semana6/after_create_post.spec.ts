import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://localhost:3002/ghost/#/signin');
  
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('lwilches@gmail.com');
  await page.getByPlaceholder('•••••••••••••••').click();
  await page.getByPlaceholder('•••••••••••••••').fill('LEwima123456');
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:3002/ghost/#/dashboard');
  await page.screenshot({path: 'result/after_create_post/1-dashboard__webkit.png'})
  await page.getByRole('link', { name: 'New post' }).click();
  await expect(page).toHaveURL('http://localhost:3002/ghost/#/editor/post');
  await page.getByPlaceholder('Post title').click();
  await page.getByPlaceholder('Post title').fill('post de pruebas automatizado con  playwrigth');

  await page.locator('.koenig-editor__editor').click();
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/after_create_post/2-post_screen_before_save__webkit.png'})
  await page.getByText('Draft - Saved').click();
  await page.goto('http://localhost:3002/ghost/#/dashboard');
  await page.screenshot({path: 'result/after_create_post/3-post_screen_after_save__webkit.png'})
});