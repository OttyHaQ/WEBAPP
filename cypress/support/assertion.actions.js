
Cypress.Commands.add('errormsg', (element, msg) => {
        cy.get(element).should('have.text', msg)
    })

Cypress.Commands.add('visibility', (element) => {
        cy.get(element).should('be.visible')
    })

