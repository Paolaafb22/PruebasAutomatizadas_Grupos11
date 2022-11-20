describe('Login succes to GHOST', () => {
    beforeEach(()=>{
       cy.visit(Cypress.config('baseUrl'))
        cy.wait(3000)
        //cy.get('button').click()
    })
 
    it('I login with email and password', ()=>{
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(Cypress.config('email'))
            cy.wait(1000)
            cy.get('input[name="password"]').type(Cypress.config('passwd'))
            cy.screenshot()
            cy.get('button[type="submit"]').click()
        })
        cy.wait(2000)
        //logged in
        cy.screenshot()
        cy.get('a[href="#/site/"]').contains('View site').click()   
        cy.wait(2000)
        cy.screenshot()
        // Ghost 5.0 en adelante
        //cy.get('h2').then(($header)=>{
        //    expect($header[0].innerText).to.equal('Dashboard')
        //})  
    })
  })