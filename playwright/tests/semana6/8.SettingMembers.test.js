
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
  await page.screenshot({path: './Escenario3pagina1.png'})

  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/dashboard');
  await page.screenshot({path: './Escenario3pagina2.png'})

  await page.getByRole('link', { name: '.settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings');
  await page.screenshot({path: './Escenario3pagina3.png'})

  
  await page.getByRole('link', { name: '.members_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Membership Access, subscription, and pricing options' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/members');
  await page.screenshot({path: './Escenario3pagina4.png'})
  await page.waitForEvent (5);

  await page.getByRole('button', { name: 'Customize Portal →' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/members?showPortalSettings=true');
  await page.screenshot({path: './Escenario3pagina5.png'})
  await page.waitForEvent (5);

  await page.getByRole('button', { name: '.paintbrush_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Look & feel' }).click();
  await page.locator('span:nth-child(3) > svg').click();
  await page.screenshot({path: './Escenario3pagina6.png'})

});