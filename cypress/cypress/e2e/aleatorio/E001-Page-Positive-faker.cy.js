const { faker } = require('@faker-js/faker');

const editorPage = 'http://localhost:2368/ghost/#/editor/page';

/**
 * Funcionalidad Page
 */


describe('Funcionalidad Page', () => {
  /**Login succes to GHOST */

  before(()=>{

    /**Método que inicia el generador de números aleatorios compartido.
     *  Llamar a los mismos métodos con la misma versión de faker y seed 
     * produce los mismos resultados*/
     faker.seed(20001);
    

       //connect to ghost page 
       cy.visit(Cypress.config('baseUrl'))
       cy.wait(300)   
       
        cy.get('input[name="identification"]').type(Cypress.config('email'))
        cy.wait(300)
        cy.get('input[name="password"]').type(Cypress.config('passwd'))
        cy.get('button[type="submit"]').click()
        cy.wait(300)
    });

    //Elimina contenido
    after(() => {
      cy.visit('http://localhost:2368/ghost/#/settings/labs');
      cy.wait(2000);
      
      //Clic Delete
      cy.get('button.gh-btn-red').click();
      cy.wait(300);

      //Confirma eliminación
      cy.get('div.modal-footer > .gh-btn-red').first().click();
      cy.wait(300);
    });

      beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
        //Ingresa dashboard
       cy.visit('http://localhost:2368/ghost/#/dashboard');
      cy.wait(300);
   });
   

    describe ('Escenarios positivos -Pages',()=>{
       
      it('F001-EC001	Crea page con titulo y descripción',()=>{

        //Crea page
        /**
         * Usuario administrador ingresa a la aplicación Ghost con usuario previamente creado
         * Cuando ingresa a la funcionalidad Page, registra titulo y parrafo del contenido
         * Luego regresa al menú princiapl page
         */
        //Ingresa funcionalidad Pages
        //'Crear page'
        cy.visit(editorPage);
        cy.wait(300);


        //Agregar titulo
        let title = faker.lorem.words();
        cy.get('textarea.gh-editor-title').type(title);
        cy.wait(300);

        //Agregar texto al articulo
        let article = faker.lorem.paragraphs();
        cy.get('article.koenig-editor > div > div > p')
        .invoke('text', article);

        //Regresar page
        cy.get('a[href="#/pages/"]').click()
        cy.wait(300);
    

        });

        it('F001-EC002	Crea page y asigna Tag',()=>{

          //Crea page
          /**
           * Usuario administrador ingresa a la aplicación Ghost con usuario previamente creado
           * Cuando ingresa a la funcionalidad Page, registra titulo y parrafo del contenido
           * Luego regresa al menú principal page
           */
          //Ingresa funcionalidad Pages
          //'Crear page'
          cy.visit(editorPage);
          cy.wait(300);


          //Agregar titulo
          let title = faker.lorem.words();
          cy.get('textarea.gh-editor-title').type(title);
          cy.wait(300);

          //Agregar texto al articulo
          let article = faker.lorem.paragraphs();
          cy.get('article.koenig-editor > div > div > p')
          .invoke('text', article);

          let tag = faker.lorem.word();
          //Clic en configuración page
          cy.get('button.settings-menu-toggle').click();
          cy.wait(300);

          //Ingresa tag
          cy.get('#tag-input').clear().type(tag).type('{enter}');
          cy.wait(300);

          //Clic en configuración page
          cy.get('button.settings-menu-toggle').click();
          cy.wait(300);

          //Regresar page
          cy.get('a[href="#/pages/"]').click()
          cy.wait(300);
      

          });
     

      it('F001-EC003	Crea  y publica page',()=>{

        //Crea page
        /**
         * Usuario administrador ingresa a la aplicación Ghost con usuario previamente creado
         * Cuando ingresa a la funcionalidad Page, registra titulo y parrafo del contenido
         * Luego publica page
         */
        //Ingresa funcionalidad Pages
       //'Crear page'
        cy.visit(editorPage);
        cy.wait(300);


        //Agregar titulo
        let title = faker.lorem.words();
        cy.get('textarea.gh-editor-title').type(title);
        cy.wait(300);

        //Agregar texto al articulo
        let article = faker.lorem.paragraphs();
        cy.get('article.koenig-editor > div > div > p')
        .invoke('text', article);

        let tag = faker.lorem.word();
        //Clic en configuración page
        cy.get('button.settings-menu-toggle').click();
        cy.wait(300);

        //Ingresa tag
        cy.get('#tag-input').clear().type(tag).type('{enter}');
        cy.wait(300);

        //Clic en configuración page
        cy.get('button.settings-menu-toggle').click();
        cy.wait(300);

        //Clic publicar page
        cy.get('button.gh-publish-trigger').click();
        cy.wait(300);
        
        //Publica sitio
        cy.get('button.gh-btn-large').click();
        cy.wait(300);
        cy.get('button.gh-btn-pulse').click();
        cy.wait(300);
    

        });
    
     it('F001-EC004	Crea y despublica page',()=>{

          //Crea page
          /**
           * Usuario administrador ingresa a la aplicación Ghost con usuario previamente creado
           * Cuando ingresa a la funcionalidad Page, registra titulo y parrafo del contenido
           * Luego publica page regresa al menu editor page y despublica page
           */
          //Ingresa funcionalidad Pages
          //'Crear page'
          cy.visit(editorPage);
          cy.wait(300);


          //Agregar titulo
          let title = faker.lorem.words();
          cy.get('textarea.gh-editor-title').type(title);
          cy.wait(300);

          //Agregar texto al articulo
          let article = faker.lorem.paragraphs();
          cy.get('article.koenig-editor > div > div > p')
          .invoke('text', article);

          let tag = faker.lorem.word();
          //Clic en configuración page
          cy.get('button.settings-menu-toggle').click();
          cy.wait(300);

          //Ingresa tag
          cy.get('#tag-input').clear().type(tag).type('{enter}');
          cy.wait(300);

          //Clic en configuración page
          cy.get('button.settings-menu-toggle').click();
          cy.wait(300);

          //Clic publicar page
          cy.get('button.gh-publish-trigger').click();
          cy.wait(300);
          
          //Publica sitio
          cy.get('button.gh-btn-large').click();
          cy.wait(300);
          cy.get('button.gh-btn-pulse').click();
          cy.wait(300);

          //Regresa a modo edición
          cy.get('button.gh-back-to-editor').click();
          cy.wait(300);
    
          //Despublicar
          cy.get('button.gh-unpublish-trigger').click();
          cy.wait(300);
          
          cy.get('button.gh-revert-to-draft').click();
          cy.wait(300);
      
          });    

          it('F001-EC005	Visualiza page publicada',()=>{

            //Crea page
            /**
             * Usuario administrador ingresa a la aplicación Ghost con usuario previamente creado
             * Cuando ingresa a la funcionalidad Page, registra titulo y parrafo del contenido,tag
             * Luego ingresa a configuración y visualiza el contenido publicado
             */
            //Ingresa funcionalidad Pages
            //'Crear page'
            cy.visit(editorPage);
            cy.wait(300);
  
  
            //Agregar titulo
            let title = faker.lorem.words();
            cy.get('textarea.gh-editor-title').type(title);
            cy.wait(300);
  
            //Agregar texto al articulo
            let article = faker.lorem.paragraphs();
            cy.get('article.koenig-editor > div > div > p')
            .invoke('text', article);
  
            let tag = faker.lorem.word();
            //Clic en configuración page
            cy.get('button.settings-menu-toggle').click();
            cy.wait(300);
  
            //Ingresa tag
            cy.get('#tag-input').clear().type(tag).type('{enter}');
            cy.wait(300);
  
            //Clic en configuración page
            cy.get('button.settings-menu-toggle').click();
            cy.wait(300);
  
            //Clic publicar page
            cy.get('button.gh-publish-trigger').click();
            cy.wait(300);
            
            //Publica sitio
            cy.get('button.gh-btn-large').click();
            cy.wait(300);
            cy.get('button.gh-btn-pulse').click();
            cy.wait(300);

            //Regresa a modo edición
            cy.get('button.gh-back-to-editor').click();
            cy.wait(300);
      
            //Clic en configuración page
            cy.get('button.settings-menu-toggle').click();
            cy.wait(300);

            cy.get('p.ghost-url-preview').invoke('text').then(val => cy.visit(val));
            cy.wait(300)
        
            });

      });
      });

  
     
    

 

