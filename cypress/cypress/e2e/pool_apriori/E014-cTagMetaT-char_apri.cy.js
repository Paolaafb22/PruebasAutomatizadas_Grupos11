describe("E014-CreateTag", () => {
    const aprioriDb = require('../../fixtures/tagDatapool.json');
  //  const aprioriDb = require('../fixtures/tagDatapool.json');
    const randomRow = aprioriDb[Math.floor(Math.random() * aprioriDb.length)];
    randomRow['tag-meta-title'] = randomRow['one-character'];
  // inicio Test
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
    cy.wait(3000);
    //login to Ghost
    cy.get("form").within(() => {
      cy.get('input[name="identification"]').type(Cypress.config("email"));
      cy.wait(1000);
      cy.get('input[name="password"]').type(Cypress.config("passwd"));
      cy.get('button[type="submit"]').click();
    });
  });

  it("Input Meta-Title one-character", () => {
    
    //connect to ghost page
    cy.wait(2000);
    cy.get('a[href="#/tags/"]').click();
    // Create Tag Ghost
    cy.wait(2000);
    cy.get('a[href="#/tags/new/').click();
    cy.wait(2000);
    // fill form tag 
    cy.get('input[id="tag-name"]').type(randomRow['tag-name']);
    cy.wait(1000);
    cy.get('input[id="tag-slug"]').clear();
    cy.get('input[id="tag-slug"]').type(randomRow['tag-slug'])
    cy.get("span").contains("Expand").click();
    cy.wait(1000);
    cy.get('input[id="meta-title"]').type(randomRow['tag-meta-title']);
    cy.wait(1000);
    cy.screenshot();
    cy.get("span").contains("Save").click();
    cy.wait(3000);
    cy.get('a[href="#/tags/"').then(($arr) => {
      $arr[0].click();
    });
    cy.wait(2000);
    cy.screenshot();
    // Comprueba Creacion Tag ghost 'span[title="tag-slug"]'
    cy.get('span[title="'+ randomRow['tag-slug']+ '"]' ).then(($header) => {
      expect($header[0].innerText).to.equal(randomRow['tag-slug']);
    });
    cy.wait(2000);
  });
});
