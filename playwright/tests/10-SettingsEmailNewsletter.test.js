import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {

  await page.goto('http://localhost:2368/ghost/');

  await page.goto('http://localhost:2368/ghost/#/signin');

  await page.getByPlaceholder('jamie@example.com').click();

  await page.getByPlaceholder('jamie@example.com').fill('123@gmail.com');
  await page.screenshot({path: './Escenario 5 pagina1.png'})

  await page.getByPlaceholder('•••••••••••••••').click();

  await page.getByPlaceholder('•••••••••••••••').fill('pruebas123456');
  await page.screenshot({path: './Escenario 5 pagina 2.png'})

  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/dashboard');
  await page.screenshot({path: './Escenario 5 pagina3.png'})

  await page.getByRole('link', { name: '.settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings');
  await page.screenshot({path: './Escenario 5 pagina4.png'})

  await page.getByRole('link', { name: 'Email newsletter Customize emails and set email addresses' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/newsletters');
  await page.screenshot({path: './Escenario 5 pagina5.png'})

  await page.waitForEvent (5);
  await page.getByRole('link', { name: 'Customize →' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/newsletters/63658b8bc782cd595cf042e0');
  await page.screenshot({path: './Escenario 5 pagina6.png'})
  await page.waitForEvent (5);

  await page.getByPlaceholder('Weekly Roundup').fill('esto es una prueba');
  await page.getByPlaceholder('Weekly Roundup').press('Tab');
  await page.screenshot({path: './Escenario 5 pagina7.png'})





});