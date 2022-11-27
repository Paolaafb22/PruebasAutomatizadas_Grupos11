import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker'   

test('test', async ({ page }) => {
  await page.goto('http://localhost:2368/ghost/');
  await page.goto('http://localhost:2368/ghost/#/signin');
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('123@gmail.com');
  await page.getByPlaceholder('•••••••••••••••').click();
  await page.getByPlaceholder('•••••••••••••••').fill('pruebas123456');
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.getByRole('link', { name: '.settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}' }).click();
  await page.getByRole('link', { name: '.settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} General Basic publication details and site metadata' }).click();
  await page.locator('.gh-expandable-header > .gh-btn').first().click();
  await page.locator('#ember94').click();
  await page.locator('#ember94').press('Shift+Home');
  await page.locator('#ember94').fill(faker.lorem.paragraph());
  await page.screenshot({path: './EC01.png'}) 
  await page.locator('#ember94').press('Tab');
});

