import { test, expect } from '@playwright/test';
test('login de usuario', async ({ page }) => {

  await page.goto('http://localhost:3001/ghost/#/signin');
  
  await page.waitForTimeout(5000);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('lwilches@gmail.com');
  await page.getByPlaceholder('•••••••••••••••').click();
  await page.getByPlaceholder('•••••••••••••••').fill('LEwima123456');
  await page.screenshot({path: './result/login_user/screenshot/login.png'})
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:3001/ghost/#/dashboard');
  await page.screenshot({path: './result/login_user/screenshot/dashboard.png'})
  });