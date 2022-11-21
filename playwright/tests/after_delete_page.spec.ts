import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://localhost:3002/ghost/#/signin');
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('lwilches@gmail.com');
  await page.getByPlaceholder('•••••••••••••••').click();
  await page.getByPlaceholder('•••••••••••••••').fill('LEwima123456');
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL('http://localhost:3002/ghost/#/dashboard');
  await page.getByRole('link', { name: '.page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Pages' }).click();
  await expect(page).toHaveURL('http://localhost:3002/ghost/#/pages');
  await page.getByRole('link', { name: 'New page' }).click();


  await expect(page).toHaveURL('http://localhost:3002/ghost/#/editor/page');
  await page.getByPlaceholder('Page title').fill('prubas de eliminacion');
  await page.getByPlaceholder('Page title').click();
  await page.getByPlaceholder('Page title').press('Enter');

  
  await page.getByRole('link', { name: 'Pages' }).click();

  await expect(page).toHaveURL('http://localhost:3002/ghost/#/pages');

  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/after_delete_page/1-dashboard__webkit.png'}) 

  var  post = page.locator("a.ember-view.permalink.gh-list-data.gh-post-list-title").first() 
  var url  = await post.evaluate(e => (e as HTMLLinkElement ).href);
  await page.screenshot({path: './result/post/delete_post/screenshot/post.png'})
  post.click();
  await expect(page).toHaveURL( url.substring(0, url.length -1 ) );


  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/after_delete_page/2-screen_page__webkit.png'}) 


  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Delete page' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({path: 'result/after_delete_page/3-delete_page__webkit.png'}) 

  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page).toHaveURL('http://localhost:3002/ghost/#/pages');
});