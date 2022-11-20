const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (Identificacion) {
    let element = await this.driver.$('input#identification.gh-input.email');
    return await element.setValue(Identificacion);
});

When('I enter password {kraken-string}', async function (Password) {
    let element = await this.driver.$('input#password.gh-input.password');
    return await element.setValue(Password);
});

When('I click next', async function() {
    let element = await this.driver.$('button#ember7');
    return await element.click();
})

When('I click settings', async function() {
    let element = await this.driver.$('a#ember33');
    return await element.click();
})

When('I click expand', async function() {
    let element = await this.driver.$('.flex > .gh-expandable > .gh-expandable-block > .gh-expandable-header > .gh-btn > span');
    return await element.click();
})

When('I click look and feel', async function() {
    let element = await this.driver.$('.modal-fullsettings-section-labs > :nth-child(3)');
    return await element.click();
})


When('I click icon', async function() {
    let element = await this.driver.$('.gh-portal-settings-icons > span:nth-child(2) > svg');
    return await element.click();
})




 

  