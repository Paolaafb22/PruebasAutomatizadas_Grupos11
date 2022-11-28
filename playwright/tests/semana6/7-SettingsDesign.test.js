import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {

  await page.goto('http://localhost:2368/ghost/');

  await page.goto('http://localhost:2368/ghost/#/signin');

  await page.getByPlaceholder('jamie@example.com').click();

  await page.getByPlaceholder('jamie@example.com').fill('123@gmail.com');
  await page.screenshot({path: './pagina.png'})

  await page.getByPlaceholder('•••••••••••••••').click();

  await page.getByPlaceholder('•••••••••••••••').fill('pruebas123456');
  await page.screenshot({path: './Escenario2pagina1.png'})

  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/dashboard');
  await page.screenshot({path: './Escenario2pagina2.png'})

  await page.getByRole('link', { name: '.settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings');
  await page.screenshot({path: './Escenario2pagina3.png'})

  await page.getByRole('link', { name: '.paint-palette_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Design Customize your site and manage themes' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/design');
  await page.screenshot({path: './Escenario2pagina4.png'})

  await page.getByRole('button', { name: '.paintbrush_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Brand' }).click();
  await page.locator('#ember81 div').first().click();
  await page.screenshot({path: './Escenario2pagina5.png'})

  await page.getByRole('textbox', { name: 'Accent color picker' }).fill('#1a66ff');
  await page.screenshot({path: './Escenario2pagina6.png'})

});

