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
  await page.getByRole('button', { name: '.members_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Account page settings' }).click();
  await page.locator('input[name="members_support_address"]').click();
  await page.locator('input[name="members_support_address"]').fill('prueba');
  await page.locator('input[name="members_support_address"]').press('Tab');
  await page.locator('input[name="members_support_address"]').click();
  await page.locator('input[name="members_support_address"]').fill(faker.internet.email());
  await page.locator('input[name="members_support_address"]').press('Tab');
  await page.screenshot({path: './src/EC20.png'})

});
