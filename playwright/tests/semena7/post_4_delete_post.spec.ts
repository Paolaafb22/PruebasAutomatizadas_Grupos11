import { test, expect } from '@playwright/test';
import {InfoAccountFactory} from '../../model/infoAccountFactory'
import { InfoPostFactory } from '../../model/infoPostFactory';
import config from '../../playwright.config';

let _factoryPost! : InfoPostFactory
let _factoryAccount! : InfoAccountFactory
let _baseUrlGhost:string = ""

test.beforeEach(async ({ page }, testInfo) => {
  _factoryPost = new InfoPostFactory(55);
  _factoryAccount = new InfoAccountFactory();
  _baseUrlGhost = config.use?.baseURL || "http://localhost:2368/"
});


test('delete_post', async ({ page }) => {
  await page.goto(`${_baseUrlGhost}#/signin`);

  // carga data de pruebas
  
  const infoAccoubt = _factoryAccount.createInfoAccoutFromCsv();
  const infoPost =  _factoryPost.createPostFromCsvRandom()

  
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(infoAccoubt.email);
  await page.getByPlaceholder('•••••••••••••••').click();
  await page.getByPlaceholder('•••••••••••••••').fill(infoAccoubt.pwd);
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await expect(page).toHaveURL(`${_baseUrlGhost}#/dashboard`);
  await page.waitForTimeout(2000);

  await page.screenshot({path: '../../result/post_4_delete_post/1-dashboard__webkit.png'})
  await page.getByRole('link', { name: 'New post' }).click();
  await expect(page).toHaveURL(`${_baseUrlGhost}#/editor/post`);
  await page.getByPlaceholder('Post title').click();
  await page.getByPlaceholder('Post title').fill(infoPost.postName);
  await page.locator('.koenig-editor__editor').click();
  await page.waitForTimeout(5000);

  let urlText  = await page.url();
  let url :URL = new URL(urlText);
  let codePost =url.hash.split('\/')[3]

  await page.locator('.koenig-editor__editor').click();
  await page.locator('.koenig-editor__editor').fill(infoPost.postDesc);
  
  await page.screenshot({path: '../../result/post_4_delete_post/2-post_screen_before_save__webkit.png'})
  await page.waitForTimeout(5000);
  await page.getByText('Draft - Saved').click();
  await page.goto(`${_baseUrlGhost}#/posts`);
  await page.screenshot({path: '../../result/post_4_delete_post/3-post_screen_after_save__webkit.png'})


  let link = await page.locator(`a[href='${url.hash}']`).first();
  await expect(link).not.toBeNull();
  //var evLink  = await link.evaluate( e=> (e as HTMLLinkElement).href);

  

  await link.click();
  
  await expect(page).toHaveURL(urlText);

  await page.getByRole('button', { name: 'Settings' }).click();

  await page.waitForTimeout(2000);
  await page.screenshot({path: '../../result/post_4_delete_post/4-post_screen_settings__webkit.png'})
  
  await page.getByRole('button', { name: 'Delete post' }).click();
  await page.waitForTimeout(2000);
  await page.screenshot({path: '../../result/post_4_delete_post/5-post_screen_delete__webkit.png'})

  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page).toHaveURL(`${_baseUrlGhost}#/posts`);


});