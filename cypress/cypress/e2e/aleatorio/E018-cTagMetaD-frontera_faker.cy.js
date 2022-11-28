//Test Fields app GHOST
const { faker } = require('@faker-js/faker');

describe("E018-CreateTag", () => {
  
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

  it("Input Meta-Description limit character", () => {
    
    //connect to ghost page
    cy.wait(2000);
    cy.get('a[href="#/tags/"]').click();
    // Create Tag Ghost
    cy.wait(2000);
    cy.get('a[href="#/tags/new/').click();
    cy.wait(2000);
    // fill form tag--Generate fake data
    cy.get('input[id="tag-name"]').type(faker.random.alpha(10));
    cy.wait(1000);
    cy.get('input[id="tag-slug"]').clear();
    faker.seed(118)
    cy.get('input[id="tag-slug"]').type(faker.lorem.word(10));
    cy.get("span").contains("Expand").click();
    cy.get('textarea[id="meta-description"]').type(faker.random.alpha(500));
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
    faker.seed(118)
    cy.get('span[title="'+ faker.lorem.word(10) + '"]' ).then(($header) => {
      faker.seed(118)
      expect($header[0].innerText).to.equal(faker.lorem.word(10));
    });
    cy.wait(2000);
  });
});
