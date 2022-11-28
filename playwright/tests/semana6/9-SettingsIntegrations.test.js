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
  await page.screenshot({path: './Escenario4pagina1.png'})

  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/dashboard');
  await page.screenshot({path: './Escenario4pagina2.png'})

  await page.getByRole('link', { name: '.settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings');
  await page.screenshot({path: './Escenario4pagina3.png'})
  await page.waitForEvent (5);

  
  await page.getByRole('link', { name: 'Integrations Make Ghost work with apps and tools' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/integrations');
  await page.screenshot({path: './Escenario4pagina4.png'}) 
  await page.waitForEvent (5); 

  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Ulysses Icon Ulysses' }).click()
    
  ]);
  await page.screenshot({path: './Escenario4pagina5.png'})

});

