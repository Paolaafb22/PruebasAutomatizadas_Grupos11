import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3001/ghost/#/signin');

    await page.getByPlaceholder('Email Address').click();
    await page.getByPlaceholder('Email Address').fill('123@gmail.com');
    await page.screenshot({path: './1_correo.png'})

    await page.getByPlaceholder('Email Address').press('Tab');
    await page.getByPlaceholder('Password').fill('pruebas123456');
    await page.screenshot({path: './2_Password.png'})

    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL('http://localhost:3001/ghost/#/site');
    await page.screenshot({path: './3_Design.png'})

    await page.getByRole('link', { name: 'Integrations' }).click();
    await expect(page).toHaveURL('http://localhost:3001/ghost/#/settings/integrations');
    await page.screenshot({path: './4_Integration.png'}) 

    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByRole('link', { name: 'Ulysses Icon Ulysses' }).click()
    ]);
    await page.screenshot({path: './5_Ulysses.png'})
  });