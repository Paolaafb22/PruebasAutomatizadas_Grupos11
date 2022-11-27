import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker'


test('test', async ({ page }) => {
  await page.goto('http://localhost:2368/ghost/');
  await page.goto('http://localhost:2368/ghost/#/signin');
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('123@gmail.com');
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill('pruebas123456');
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/dashboard');
  await page.getByRole('link', { name: '.settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings');
  await page.getByRole('link', { name: '.compass_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Navigation Set up primary and secondary menus' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/navigation');
  await page.locator('#ember102').click();
  await page.locator('#ember109').fill(faker.internet.url());
  await page.locator('#ember109').press('Tab');
  await page.screenshot({path: './src/EC30.png'})
  await page.locator('#ember109').click();

}); 
