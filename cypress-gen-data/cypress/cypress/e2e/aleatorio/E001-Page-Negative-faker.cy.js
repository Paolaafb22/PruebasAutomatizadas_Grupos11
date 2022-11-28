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
     faker.seed(20002);
    

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
   

    describe ('Escenarios Negativos -Pages',()=>{
      
      it('F001-EC006	Crea page y asigna Tag carácter invalido',()=>{

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

        let tag = ',' + faker.lorem.word();
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

      //  expect(cy.get('.gh-alerts').find('.gh-alert')).to.exist;

        //Clic publicar page
        cy.get('button.gh-publish-cta-secondary').click();
        cy.wait(300);

        });

        it('F001-EC007	Crea page y agrega Excerpt mayor al limite',()=>{

          
          //Ingresa funcionalidad Pages
          //'Crear page'
          cy.visit(editorPage);
          cy.wait(300);
  
  
          //Agregar titulo
          let title =  faker.lorem.words();
          cy.get('textarea.gh-editor-title').type(title);
          cy.wait(300);
  
          //Agregar texto al articulo
          let article = faker.lorem.paragraphs();
          cy.get('article.koenig-editor > div > div > p')
          .invoke('text', article);
  
          
          //Clic en configuración page
         cy.get('button.settings-menu-toggle').click();
          cy.wait(300);
  
          //Ingresa excerpt
          let excerpt = faker.lorem.words(300);

          cy.get('textarea.post-setting-custom-excerpt')
          .clear().type(excerpt, {force: true});
          cy.wait(300);

          //Clic en configuración page
          cy.get('button.settings-menu-toggle').click();
          cy.wait(300);
   
          //Clic publicar page
          cy.get('button.gh-publish-trigger').click();
          cy.wait(300);
          
          });
		  
		  it('F001-EC008	Crea page y titulo mayor al limite',()=>{

            
            //Ingresa funcionalidad Pages
            //'Crear page'
            cy.visit(editorPage);
            cy.wait(300);
    
    
            //Agregar titulo
            let title ='BUG--'+ faker.lorem.words(200);
            cy.get('textarea.gh-editor-title').type(title);
            cy.wait(300);
    
            //Agregar texto al articulo
            let article = 'BUG'+faker.lorem.paragraphs();
            cy.get('article.koenig-editor > div > div > p')
            .invoke('text', article);
    
            //Regresar page
            cy.get('a[href="#/pages/"]').click()
            cy.wait(300);

            //stay
            cy.get('button[class="gh-btn"]').click();
            cy.wait(300);

            });
			
			it('F001-EC009	Crea page y asigna escribe limite Tag',()=>{

        
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

        let tag = ',' + faker.lorem.word(311);
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

        //Clic publicar page
        cy.get('button.gh-publish-cta-secondary').click();
        cy.wait(300);      
        

        });      

      it('F001-EC010	Publica page con titulo vacio',()=>{

        //Crea page
        
        //'Crear page'
        cy.visit(editorPage);
        cy.wait(300);


        //Agregar titulo
      
        //Agregar texto al articulo
        let article = faker.lorem.paragraphs();
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



        });

      });//Final

      });

  
     
    

 

