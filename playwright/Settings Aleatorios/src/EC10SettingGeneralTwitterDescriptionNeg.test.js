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
  await page.locator('div:nth-child(2) > .gh-expandable > div:nth-child(2) > .gh-expandable-header > .gh-btn').click();
  await page.getByPlaceholder('Thoughts, stories and ideas.').click();
  await page.getByPlaceholder('Thoughts, stories and ideas.').fill(faker.lorem.paragraph(300));
  await page.getByPlaceholder('Thoughts, stories and ideas.').press('Tab');
  await page.screenshot({path: './src/EC10.png'})

});