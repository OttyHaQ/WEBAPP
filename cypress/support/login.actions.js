Cypress.Commands.add('userLogin', (email, password) => {
    cy.fixture("login.json").then((loginloc) =>{
        cy.get(loginloc.emailField).type(email)
        cy.get(loginloc.nextBtn).click()
        cy.get(loginloc.passwordTxt).should('be.visible')
        cy.get(loginloc.signOutLink).should('have.text', 'Sign out')
        cy.get(loginloc.passwordField).type(password)
        cy.get(loginloc.nextBtn).click()
    })
})

Cypress.Commands.add('invalidEmail', (email) => {
    cy.fixture("login.json").then((loginloc) =>{
        cy.get(loginloc.emailField).type(email)
        cy.get(loginloc.nextBtn).click()
    })
})

Cypress.Commands.add('clickNextBtn', () => {
    cy.fixture("login.json").then((loginloc) =>{
        cy.get(loginloc.nextBtn).click()
    })
})

Cypress.Commands.add('emptyPassword', (email) => {
    cy.fixture("login.json").then((loginloc) =>{
        cy.get(loginloc.emailField).type(email)
        cy.get(loginloc.nextBtn).click()
        cy.get(loginloc.nextBtn).click()
    })
})