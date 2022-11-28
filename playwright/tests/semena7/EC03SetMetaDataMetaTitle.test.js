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
  await page.getByRole('link', { name: '.settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} General Basic publication details and site metadata' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/general');
  await page.locator('div:nth-child(2) > .gh-expandable > div > .gh-expandable-header > .gh-btn').first().click();
  await page.getByPlaceholder('Pruebas Automatizadas').click();
  await page.getByPlaceholder('Pruebas Automatizadas').fill(faker.word.preposition(100));
  await page.screenshot({path: './EC03.png'}) 
});


