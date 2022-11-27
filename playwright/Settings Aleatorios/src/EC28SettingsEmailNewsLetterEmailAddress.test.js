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
  await page.getByRole('link', { name: 'Email newsletter Customize emails and set email addresses' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/newsletters');
  await page.getByRole('link', { name: 'Customize →' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/newsletters/63658b8bc782cd595cf042e0');
  await page.getByRole('button', { name: 'Email addresses' }).click();
  await page.getByPlaceholder('noreply@localhost').click();
  await page.getByPlaceholder('noreply@localhost').fill(faker.internet.email());
  await page.getByPlaceholder('noreply@localhost').press('Tab');
  await page.screenshot({path: './src/EC28.png'})

});


