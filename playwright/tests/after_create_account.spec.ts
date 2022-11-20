import { test, expect } from '@playwright/test';
test('create_account', async ({ page }) => {
  
  await page.goto('http://localhost:3002/ghost/#/setup');
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/after_create_account/1-create_login_webkit.png'})
  await page.getByPlaceholder('The Daily Awesome').click();
  await page.getByPlaceholder('The Daily Awesome').fill('PruebasAutomatizacion');
  await page.getByPlaceholder('Jamie Larson').click();
  await page.getByPlaceholder('Jamie Larson').fill('Leonardo Wilches');
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('lwilches@gmail.com');
  await page.getByPlaceholder('At least 10 characters').click();
  await page.getByPlaceholder('At least 10 characters').fill('LEwima123456');
  await page.screenshot({path: 'result/after_create_account/2-fill_fields_login_webkit.png'})
  await page.getByRole('button', { name: 'Create account & start publishing →' }).click();
  await page.goto('http://localhost:3002/ghost/#/setup/done');
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/after_create_account/3-view_dashboard_webkit.png'})
});