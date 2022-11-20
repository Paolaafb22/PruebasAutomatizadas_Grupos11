describe('Edit Tag  GHOST', () => {
    beforeEach(()=>{
       //connect to ghost page 
       cy.visit(Cypress.config('baseUrl'))
       cy.wait(3000)       
    })
 
    it('I Edit TAG Kraken', ()=>{
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
        // Create Tag Ghost
        cy.wait(3000)
        cy.get('a[href="#/tags/'+tagName+'/"]').then(($arr)=>{
            if ($arr.length != 0){
                $arr[0].click()
                cy.wait(3000)
                cy.get('input[id="tag-name"]').type('-DELETE')
                cy.wait(3000)
                cy.screenshot()
                cy.get('span').contains('Save').click()
            }
            
        })
        cy.wait(3000)
        cy.get('a[href="#/tags/"').then(($arrt)=>{
            $arrt[0].click()
        })
        cy.wait(3000)
        cy.screenshot()
        // Comprueba Creacion Tag ghost 
        cy.get('span[title="'+tagName+'"]').then(($header)=>{
            expect($header[0].innerText).to.equal(tagName)
        })
        cy.wait(2000)

    })

  })