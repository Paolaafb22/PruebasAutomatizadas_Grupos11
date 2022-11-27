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
  await page.getByRole('link', { name: '.members_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Membership Access, subscription, and pricing options' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/members');
  await page.getByRole('button', { name: 'Customize Portal →' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/members?showPortalSettings=true');
  await page.getByRole('button', { name: '.paintbrush_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Look & feel' }).click();
  await page.locator('input[type="text"]').click();
  await new Promise(r => setTimeout(r, 7000));
  await page.getByText('Show Portal button Portal button style Icon and text Icon only Text only Icon Up').click();
  await page.locator('input[type="text"]').fill(faker.lorem.paragraphs());
  await page.locator('input[type="text"]').press('Tab');
  await page.screenshot({path: './src/EC19.png'})
});
