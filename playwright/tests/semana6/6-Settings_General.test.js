



import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {

  await page.goto('http://localhost:2368/ghost/');

  await page.goto('http://localhost:2368/ghost/#/signin');

  await page.getByPlaceholder('jamie@example.com').click();

  await page.getByPlaceholder('jamie@example.com').fill('123@gmail.com');
  await page.screenshot({path: './Escenario 1 pagina.png'})

  await page.getByPlaceholder('•••••••••••••••').click();

  await page.getByPlaceholder('•••••••••••••••').fill('pruebas123456');
  await page.screenshot({path: './Escenario 1 pagina 2.png'})

  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/dashboard');
  await page.screenshot({path: './Escenario 1 pagina3.png'})

  await page.getByRole('link', { name: '.settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings');

  await page.getByRole('link', { name: '.settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} General Basic publication details and site metadata' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/general');
  await page.screenshot({path: './Escenario 1  pagina4.png'})

  await page.locator('.gh-expandable-header > .gh-btn').first().click();

  await page.locator('#ember94').click();

  await page.locator('#ember94').fill('Pruebas Automatizadas"Cuando se trata de comparar páginas con el número de palabras, 500 palabras es un número importante para recordar. Usando un interlineado sencillo, 500 palabras es lo mismo que una página. Con interlineado doble, son alrededor de 2 páginas. En ambos casos se utilizan márgenes de una pulgada estándar (2,54 centímetros) y una fuente como Times New Roman o Arial en tamaño 12 puntos.  Alterar estos ajustes u otros elementos del documento, como el espaciado de los párrafos puede cambiar la longitud final del texto. Un recuento de 500 palabras es estándar para muchos escritos, incluyendo entradas de blog, artículos de noticias y artículos de secundaria."');
  await page.screenshot({path: './Escenario 1 pagina5.png'})

  await page.getByRole('button', { name: 'Save' }).click();
  await page.screenshot({path: './Escenario 1 pagina6.png'})

});