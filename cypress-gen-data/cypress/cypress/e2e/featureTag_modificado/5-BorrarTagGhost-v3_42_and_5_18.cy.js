describe('Borrar Tag  GHOST', () => {
    beforeEach(()=>{
       //connect to ghost page 
       cy.visit(Cypress.config('baseUrl'))
       cy.wait(3000)       
    })
 
    it('I Delete TAG Kraken', ()=>{
        let tagName = Cypress.config('TAG_name')

        //login to Ghost
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(Cypress.config('email'))
            cy.wait(1000)
            cy.get('input[name="password"]').type(Cypress.config('passwd'))
            cy.get('button[type="submit"]').click()
        })
        cy.wait(2000)
        cy.get('a[href="#/tags/"]').click()
        // Borrar Tag Ghost
        cy.wait(3000)
        cy.screenshot()
        cy.get('a[href="#/tags/'+tagName+'/"]').then(($arr)=>{
            if ($arr.length != 0){
                $arr[0].click()
                cy.wait(3000)
                cy.get('span').contains('Delete tag').click()        
            }    
        })
        cy.wait(3000)
        cy.screenshot()
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click()  
        cy.wait(3000)      
        //cy.url().should('eq', 'http://localhost:2368/ghost/#/tags')
        cy.wait(3000)
        cy.get('a[href="#/tags/"').then(($arrt)=>{
            $arrt[0].click()
        })
        cy.screenshot()
    })

  })