const { faker } = require('@faker-js/faker');


import {MockarooData,SCHEMAS} from "../../fixtures/mockarooApi/mockaroo"

const pagePositiveMockaroo = new MockarooData(5, SCHEMAS.pages_positive);
const pageNegativeMockaroo = new MockarooData(5, SCHEMAS.page_Negative);
let pagePositivePool = [];
let pageNegativePool = [];

/**
 * Funcionalidad Page
 */


describe('Funcionalidad Page', () => {
  /**Login succes to GHOST */
  before(()=>{

    faker.seed(20003);
       //connect to ghost page 
       cy.visit(Cypress.config('baseUrl'))
       cy.wait(300)   
       
        cy.get('input[name="identification"]').type(Cypress.config('email'))
        cy.wait(300)
        cy.get('input[name="password"]').type(Cypress.config('passwd'))
        cy.get('button[type="submit"]').click()
        cy.wait(300)
    });

      beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session');
        //Ingresa dashboard
       cy.visit('http://localhost:2368/ghost/#/dashboard');
      cy.wait(300);
   });

    describe ('Escenarios positivos -Pages',()=>{

        before(async () => {
          pagePositivePool = await pagePositiveMockaroo.generarDataPool();
        });

        it('F001-EC011	Agrega url valido a page',()=>{

          //Crea page
          /**
           * Usuario administrador ingresa a la aplicación Ghost con usuario previamente creado
           * Cuando ingresa a la funcionalidad Page, registra titulo y parrafo del contenido
           * Luego publica el page creado
           */
          pagePositivePool.forEach(pagePositivePoolOb => {

             //Ingresa funcionalidad Pages
              // cy.get('a[href="#/pages/"]').click()
              cy.visit('http://localhost:2368/ghost/#/editor/page')
              cy.wait(300);

              //Agregar titulo
              let title = pagePositivePoolOb.title;
              cy.get('textarea.gh-editor-title').type(title);
              cy.wait(1000);

              //Clic en configuración page
              cy.get('button.settings-menu-toggle').click();
              cy.wait(300);


              //Agrega url
              let pageUrl = pagePositivePoolOb.pageUrl.replaceAll(' ', '-');
              cy.get('input.post-setting-slug').clear().type(pageUrl, {force: true});
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

       it('F001-EC012	Agrega Tag valido a page',()=>{

          //Crea page
          /**
           * Usuario administrador ingresa a la aplicación Ghost con usuario previamente creado
           * Cuando ingresa a la funcionalidad Page, registra titulo y parrafo del contenido
           * Luego publica el page creado
           */
          pagePositivePool.forEach(pagePositivePoolOb => {

             //Ingresa funcionalidad Pages
              // cy.get('a[href="#/pages/"]').click()
              cy.visit('http://localhost:2368/ghost/#/editor/page')
              cy.wait(300);

              //Agregar titulo
              let title = pagePositivePoolOb.title;
              cy.get('textarea.gh-editor-title').type(title);
              cy.wait(1000);

              //Clic en configuración page
              cy.get('button.settings-menu-toggle').click();
              cy.wait(300);

          
          //agrega tag
          let tag = pagePositivePoolOb.tag.trim();
          
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

        it('F001-EC013	Agrega excerpt valido a page',()=>{

          //Crea page
          /**
           * Usuario administrador ingresa a la aplicación Ghost con usuario previamente creado
           * Cuando ingresa a la funcionalidad Page, registra titulo y parrafo del contenido
           * Luego publica el page creado
           */
          pagePositivePool.forEach(pagePositivePoolOb => {

             //Ingresa funcionalidad Pages
              // cy.get('a[href="#/pages/"]').click()
              cy.visit('http://localhost:2368/ghost/#/editor/page')
              cy.wait(300);

              //Agregar titulo
              let title = pagePositivePoolOb.title;
              cy.get('textarea.gh-editor-title').type(title);
              cy.wait(1000);

              
          //Clic en configuración page
          cy.get('button.settings-menu-toggle').click();
          cy.wait(300);

          
          //agrega excerpt
            let excerpt = pagePositivePoolOb.excerpt.trim();
            cy.get('textarea.post-setting-custom-excerpt')
            .clear().type(excerpt, {force: true});
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
		
		 it('F001-EC014 Agrega titulo valido a page',()=>{

          //Crea page
          /**
           * Usuario administrador ingresa a la aplicación Ghost con usuario previamente creado
           * Cuando ingresa a la funcionalidad Page, registra titulo y parrafo del contenido
           * Luego publica el page creado
           */
          pagePositivePool.forEach(pagePositivePoolOb => {

             //Ingresa funcionalidad Pages
              // cy.get('a[href="#/pages/"]').click()
              cy.visit('http://localhost:2368/ghost/#/editor/page')
              cy.wait(300);

              //Agregar titulo
              let title = pagePositivePoolOb.title;
              cy.get('textarea.gh-editor-title').type(title);
              cy.wait(1000);

              //Agregar texto al articulo
              let article = pagePositivePoolOb.article;
              cy.get('article.koenig-editor > div > div > p')
              .invoke('text', article);
              

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
        
        it('F001-EC015 Agrega titulo  y descripción valido a page',()=>{

          //Crea page
          /**
           * Usuario administrador ingresa a la aplicación Ghost con usuario previamente creado
           * Cuando ingresa a la funcionalidad Page, registra titulo y parrafo del contenido
           * Luego publica el page creado
           */
          pagePositivePool.forEach(pagePositivePoolOb => {

             //Ingresa funcionalidad Pages
              // cy.get('a[href="#/pages/"]').click()
              cy.visit('http://localhost:2368/ghost/#/editor/page')
              cy.wait(300);

              //Agregar titulo
              let title = pagePositivePoolOb.title;
              cy.get('textarea.gh-editor-title').type(title);
              cy.wait(1000);

              //Agregar texto al articulo
          let article = pagePositivePoolOb.article;
          cy.get('article.koenig-editor > div > div > p')
          .invoke('text', article);

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


    });//Final
     
    

  });

