const { faker } = require('@faker-js/faker');

describe('Login succes to GHOST', () => {
    beforeEach(()=>{
       //connect to ghost page 
       cy.visit(Cypress.config('baseUrl'))
       cy.wait(3000)       
    })
 
    it('I Preview page', ()=>{
        
        //login to Ghost
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(Cypress.config('email'))
            cy.wait(1000)
            cy.screenshot()
            cy.get('input[name="password"]').type(Cypress.config('passwd'))
            cy.get('button[type="submit"]').click()

            Cypress.Cookies.preserveOnce('ghost-admin-api-session');
        })
        
        //Ingresa funcionalidad Pages
      cy.get('a[href="#/pages/"]').click()
      cy.wait(300);
      cy.screenshot()

      //'Crear page'
      cy.get('a[href="#/editor/page/"]').click()
      cy.wait(300);
      cy.screenshot()
     
      //Agregar titulo
        let title = faker.lorem.words();
        cy.get('textarea.gh-editor-title').type(title);
        cy.wait(300);
        cy.screenshot()
      //Agregar texto al articulo
        let article = faker.lorem.words(10);
        cy.get('article.koenig-editor > div > div > p')
          .invoke('text', article);
      
       //Previsualizar page
       cy.get('button.gh-editor-preview-trigger').click();
       cy.wait(300);
       cy.screenshot()

    })

  })

