//Pages actions
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert');

When("I enter email {kraken-string}", async function (USERNAME1) {
  let element = await this.driver.$('input[name="identification"]');
  return await element.setValue(USERNAME1);
});

When("I enter password {kraken-string}", async function (PASSWORD1) {
  let element = await this.driver.$('input[name="password"]');
  return await element.setValue(PASSWORD1);
});

When("I click Sign in->", async function () {
  let element = await this.driver.$('button[type="submit"]');
  return await element.click();
});
When ('I click on Page', async function () {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

    
When ('I click on New Page option', async function () {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
});

When('I write a title on the Editor {kraken-string}', async function(title_page) {
    let editorTitle = await this.driver.$('textarea.gh-editor-title');
    await editorTitle.click();
    return await editorTitle.setValue(title_page)
});

When('I write the text content on the Editor {kraken-string}', async function(textvontent) {
    let editorTextContent = await this.driver.$('article.koenig-editor > div > div > p');
    await editorTextContent.click();
    return await editorTextContent.setValue(textcontent)
});
