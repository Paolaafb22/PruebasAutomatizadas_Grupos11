describe('Login succes to GHOST', () => {
    beforeEach(()=>{
       //connect to ghost page 
       cy.visit(Cypress.config('baseUrl'))
       cy.wait(3000)       
    })
 
    it('I Delete page', ()=>{
        
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
        let title = 'Prueba Elimina pages 123';
        cy.get('textarea.gh-editor-title').type(title);
        cy.wait(300);
        cy.screenshot()
      //Agregar texto al articulo
        let article = 'Previsualiza contenido de pruebas';
        cy.get('article.koenig-editor > div > div > p')
          .invoke('text', article);

          //Ingresa Configurar
          cy.get('button.gh-btn-action-icon').click();
       cy.wait(300);
       cy.screenshot()
       
       let excerpt = 'Ingresa Excerpt dato de pruebas. configuración pages';
        cy.get('textarea.post-setting-custom-excerpt').type(excerpt);
        cy.wait(300);
        cy.screenshot()

        //Sale de Configurar
        cy.get('span.settings-menu-open').click();
        cy.wait(300);
        cy.screenshot()

       //Clic publicar page
       cy.get('button.gh-publish-trigger').click();
       cy.wait(300);
       cy.screenshot()

       //Publica sitio

       cy.get('button.gh-btn-large').click();
       cy.wait(300);
       cy.screenshot()

       cy.get('button.gh-btn-pulse').click();
       cy.wait(300);
       cy.screenshot()

       //Regresa a modo edición
       cy.get('button.gh-back-to-editor').click();
       cy.wait(300);
       cy.screenshot()

       //Ingresa Configurar
       cy.get('button.gh-btn-action-icon').click();
       cy.wait(300);
       cy.screenshot()

        //Elimina pages Creado y publicado
        cy.get('div.settings-menu-content > form > button').click();
        cy.wait(300);
        cy.screenshot()
        cy.get('div.modal-content > div.modal-footer > button.gh-btn-red').click();
        cy.wait(300);
        cy.screenshot()

    })

  })

