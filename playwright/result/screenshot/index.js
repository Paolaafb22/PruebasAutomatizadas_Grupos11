//Importar Playwright
const playwright = require('playwright');
import { test, expect } from '@playwright/test';

const url = 'http://localhost:2368/ghost/';

//Función flecha asíncrona
(async () => {
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ['chromium']) {
    //Contenido de la prueba
    console.log(browserType+'-------------------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext({
      recordvideo:{
        dir:'videos'
      }
    });
    const page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 7000));
    await page.screenshot({path: './pagina.png'})
    await page.click('css=button')
    await new Promise(r => setTimeout(r, 9000));
    await page.screenshot({path: './pagina2.png'})
    console.log('Project loaded')

    test('test', async ({ page }) => {

  await page.goto('http://localhost:2368/ghost/');

  await page.goto('http://localhost:2368/ghost/#/signin');

  await page.getByPlaceholder('jamie@example.com').click();

  await page.getByPlaceholder('jamie@example.com').fill('123@gmail.com');

  await page.getByPlaceholder('•••••••••••••••').click();

  await page.getByPlaceholder('•••••••••••••••').fill('pruebas123456');

  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/dashboard');

  await page.getByRole('link', { name: '.settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings');

  await page.getByRole('link', { name: '.settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} General Basic publication details and site metadata' }).click();
  await expect(page).toHaveURL('http://localhost:2368/ghost/#/settings/general');

  await page.locator('.gh-expandable-header > .gh-btn').first().click();

  await page.locator('#ember94').click();

  await page.locator('#ember94').fill('Pruebas Automatizadas"Cuando se trata de comparar páginas con el número de palabras, 500 palabras es un número importante para recordar. Usando un interlineado sencillo, 500 palabras es lo mismo que una página. Con interlineado doble, son alrededor de 2 páginas. En ambos casos se utilizan márgenes de una pulgada estándar (2,54 centímetros) y una fuente como Times New Roman o Arial en tamaño 12 puntos.  Alterar estos ajustes u otros elementos del documento, como el espaciado de los párrafos puede cambiar la longitud final del texto. Un recuento de 500 palabras es estándar para muchos escritos, incluyendo entradas de blog, artículos de noticias y artículos de secundaria."');

  await page.getByRole('button', { name: 'Save' }).click();

});
    //Interactuar con la aplicación web
    //...

    //Finalizar la prueba
   // await browser.close();
  }
  return;
})();//Llamado propio de la función


