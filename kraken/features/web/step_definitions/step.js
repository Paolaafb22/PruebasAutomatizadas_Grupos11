// Modificado para Version Ghost 5.18.0 y Ghost 3.42
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert');

// feature: Login Ghost 
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

// feature: List Ghost Tags
When("I click Tags", async function () {
  let element = await this.driver.$('a[href="#/tags/"]');
  return await element.click();
});
// feature: Create or  edit Ghost Tag
When("I click New Tag", async function () {
  let element = await this.driver.$('a[href="#/tags/new/"]');
  return await element.click();
});
When("I Click to edit Tag {kraken-string}", async function (TAG_NAME) {
    let searchElement = 'a[href="#/tags/' + TAG_NAME + '/"';
    let element = await this.driver.$(searchElement);
    return await element.click();
  });
When("I enter Tag name {kraken-string}", async function (TAG_NAME) {
  let element = await this.driver.$('input[id="tag-name"]');
  return await element.setValue(TAG_NAME);
});
When("I enter edit Tag name {kraken-string}", async function (TAG_NAME) {
  let element = await this.driver.$('input[id="tag-name"]');
  return await element.setValue(TAG_NAME + '-DELETE');
});
When("I click Save Tag Name", async function () {
  //let element = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]'); Ghost 5.18.0
  let element = await this.driver.$('section[class="view-actions"]');
  return await element.click();
});
When("I click list Tags", async function () {
    let pageTags = await this.driver.$('a[href="#/tags/"]');
    return await pageTags.click();
  });
// feature: Borrar Tag Ghost
When("I click Delete Tag Name {kraken-string}", async function (GH_VERSION) {
  // Verifica version ghost de file properties.json para ejecutar busqueda selector
    if (GH_VERSION == '5.18') {
      let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon"]');
      return await element.click();
    }
    else{
      let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]');
      return await element.click();
    }
       
  });

  When("I click Delete to Confirm", async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
  });

//------------------------------------------------------------------
// Comprobacion Feature: Login Ghost
Then("I see Ghost Dashboard", async function () {
  //let element = await this.driver.$('a[title="Dashboard"]'); version ghost 5.18.0
  let element = await this.driver.$('a[href="#/site/"]');
  element.click();
});
// Comprobacion Feature: List Ghost Tags
Then("I see Ghost Tags", async function () {
  let element = await this.driver.$('button[class="gh-btn gh-btn-group-selected"]');
  element.click();
});
// Comprobacion Feature: Create or edit Ghost Tag
Then("I see New Ghost Tag {kraken-string}", async function (TAG_NAME) {
  let searchElement = 'a[href="#/tags/' + TAG_NAME + '/"';
  testKrakenTag = false;
  let elementTag = await this.driver.$(searchElement);
  if (elementTag) {
    testKrakenTag = true;
  } 
  assert.equal(testKrakenTag,true)
});
// Comprobar feature: Borrar Tag

Then("I don´t see New Ghost Tag {kraken-string}", async function (TAG_NAME) {
    let searchElement = 'a[href="#/tags/"]';
    let elementTag = await this.driver.$('a[href="#/tags/"]');
    return await elementTag.click();
  });

  /////////////////////////
  
  

When('I Lw enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('input[name="identification"]');
    return await element.setValue(email);
});

When('I Lw enter password {kraken-string}', async function (password) {
    let element = await this.driver.$(' input[name="password"]');
    return await element.setValue(password);
});

When('I Lw click in sign in', async function() {
    let element = await this.driver.$('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    return await element.click();
})

Then('I Lw expect see page {kraken-string}', async function (pageItem  ) {
   let titulo = await this.driver.$('h2.gh-canvas-title=Dashboard');
   expect(  titulo != undefined );
});


When('I Lw click in post', async function () {

    let element = await this.driver.$('*=Posts');
    console.log(element.id);
    return await element.click();
  });


When('I Lw click in new post', async function () {

    //let element = await this.driver.$('a.ember-view.gh-secondary-action.gh-nav-new-post');
    //return await element.click();

    let element = await this.driver.$('a[href="#/editor/post/"]');
    return await element.click();

  });

When('I Lw enter title post {kraken-string}', async function (mensaje) {
    let element = await this.driver.$('textarea[placeholder="Post title"]');
    return await element.setValue(mensaje);
});

Then('I Lw expect the post save', async function (pageItem ) {
    //let div  = await this.driver.$("div.gh-editor-post-status > span > div " );
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});

When ('I Lw click  over post {string} ',  async (postDesc)=>{ 
    var post = {} 
    await this.driver.$("a.ember-view permalink gh-list-data gh-post-list-title > h3.gh-content-entry-title " ).forEach(element => {
        if (element.innerText() == postDesc) {
           post = element;
        }        
    });
    post.click();
    
});

When ('I Lw click button detail',  async (postDesc)=>{ 
    await this.driver.$('button[title="Settings"]').click();
});


When ('I Lw click button delete post', async ()=> {
    await this.driver.$('button.gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button').click();
        
} );

When ('I Lw click button confirm delete',async ()=>{
    await this.driver.$('gh-btn gh-btn-red gh-btn-icon ember-view').click();
});

Then('I Lw expect confirm delete {string}', async (postDesc)=>{

    var post = {} 
    await this.driver.$("a.ember-view permalink gh-list-data gh-post-list-title > h3.gh-content-entry-title " ).forEach(element => {
        if (element.innerText() == postDesc) {
           post = element;
        }        
    });
    expect( post).equal(undefined);
});