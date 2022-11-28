describe('List Tag  GHOST', () => {
    beforeEach(()=>{
       cy.visit(Cypress.config('baseUrl'))
       cy.wait(3000)
    })
 
    it('I list ghost tag', ()=>{
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(Cypress.config('email'))
            cy.wait(1000)
            cy.get('input[name="password"]').type(Cypress.config('passwd'))
            cy.get('button[type="submit"]').click()
        })
        cy.wait(2000)
        //logged in
        cy.get('a[href="#/site/"]').contains('View site').click() 
        // List Tag
        cy.wait(2000)
        cy.screenshot()
        cy.wait(4000)
        cy.get('a[href="#/tags/"]').click()
        cy.wait(4000)
        cy.screenshot()
        // Comprobacion     
        cy.get('h2').then(($header)=>{
            expect($header[0].innerText).to.equal('Tags')
        }) 
    })

  })