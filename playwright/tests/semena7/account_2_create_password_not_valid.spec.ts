import { test, expect ,  request } from '@playwright/test';
import { InfoAccountFactory } from '../../model/infoAccountFactory';
import config from '../../playwright.config';

/******************************************************* 
Note: este test corre despues de crer el contenedor de ghost
*********************************************************/

let _baseUrlGhost:string = ""
let _factoryAccount! : InfoAccountFactory
test.beforeEach(async ({ page }, testInfo) => {
    _factoryAccount = new InfoAccountFactory();
    _baseUrlGhost = config.use?.baseURL || "http://localhost:2368/"
});



test('create_account_password_not_valid', async ({ page , request }) => {
  
  // Reads the CSV file and saves it  
  
  const factory  = new InfoAccountFactory();
  const infoAccoubt = factory.createInfoAccoutFromCsv();


  await page.goto(`${_baseUrlGhost}#/setup`);
  await page.waitForTimeout(5000);
  await page.screenshot({path: '../../result/after_create_account_password_not_valid/1-create_login_webkit.png'})
  await page.getByPlaceholder('The Daily Awesome').click();
  await page.getByPlaceholder('The Daily Awesome').fill(infoAccoubt.nomsite);
  await page.getByPlaceholder('Jamie Larson').click();
  await page.getByPlaceholder('Jamie Larson').fill(infoAccoubt.name);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(infoAccoubt.email);
  await page.getByPlaceholder('At least 10 characters').click();
  await page.getByPlaceholder('At least 10 characters').fill("2");
  await page.screenshot({path: '../../result/after_create_account_password_not_valid/2-fill_fields_login_webkit.png'})
  await page.getByRole('button', { name: 'Create account & start publishing →' }).click();
  var errMessage = await page.getByText('Password must be at least 10 characters long.')
  expect(errMessage).not.toBeNull();
});