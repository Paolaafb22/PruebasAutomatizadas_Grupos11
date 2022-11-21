import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://localhost:3002/ghost/#/signin');

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('lwilches@gmail.com');
  await page.getByPlaceholder('•••••••••••••••').click();
  await page.getByPlaceholder('•••••••••••••••').fill('LEwima123456');
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:3002/ghost/#/dashboard');
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/after_create_page/1-dashboard_webkit.png'})
  await page.getByRole('link', { name: '.page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Pages' }).click();
  await expect(page).toHaveURL('http://localhost:3002/ghost/#/pages');
  await page.getByRole('link', { name: 'New page' }).click();
  await expect(page).toHaveURL('http://localhost:3002/ghost/#/editor/page');
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/after_create_page/2-page_screen_webkit.png'})
  await page.getByPlaceholder('Page title').click();
  await page.getByPlaceholder('Page title').fill('pagina de automatizacion');
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/after_create_page/3-page_post_screen_webkit.png'})
  await page.getByRole('link', { name: 'Pages' }).click();
});