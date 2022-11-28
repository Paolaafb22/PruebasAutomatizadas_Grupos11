const { faker } = require('@faker-js/faker');

import { pool as pagePositivePool } from "../../fixtures/data_positiva/page.json"
import { pool as pageNegativePool} from "../../fixtures/data_negativa/page.json"


/**
 * Funcionalidad Page
 */


describe('Funcionalidad Page', () => {
  /**Login succes to GHOST */
  before(()=>{
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
        it('Funcionalidad page -Escenario 1',()=>{

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
            let article =  pagePositivePoolOb.article;
            cy.get('article.koenig-editor > div > div > p').invoke('text', article);

            //Clic publicar page
            cy.get('button.gh-publish-trigger').click();
            cy.wait(300);

           //Publica sitio

            cy.get('button.gh-btn-large').click();
            cy.wait(300);
        

            cy.get('button.gh-btn-pulse').click();
            cy.wait(300);

             //Ingresa dashboard
       cy.visit('http://localhost:2368/ghost/#/dashboard');
       cy.wait(300);

            //Regresa a modo edición
           /* cy.get('button.gh-back-to-editor').click();
            cy.wait(300);
            cy.screenshot()

            //Regresa pagina principal page
            cy.get('gh-editor-back-button').click();
            cy.wait(300);*/
      

          });
        });

    });
     
    

  });

