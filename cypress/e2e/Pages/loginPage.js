export class LoginPage {

    isOnboardingPageDisplayed(){
        cy.fixture("login.json").then((loginloc) =>{
            cy.get(loginloc.acctForm).should('be.visible')
        })
    }

    invalidEmailMessage(){
        cy.fixture("login.json").then((loginloc) =>{
            cy.get(loginloc.alert).should('have.text', 'Invalid email or phone')
        })

    }

    invalidPasswordMessage(){
        cy.fixture("login.json").then((loginloc) =>{
            cy.get(loginloc.alert).should('have.text', 'Invalid username or password')
        })

    }

    invalidFieldMessage(){
        cy.fixture("login.json").then((loginloc) =>{
            cy.get(loginloc.alert).should('have.text', 'Invalid fields provided')
        })
    }

    isAccBalDisplayed(){
        cy.fixture("login.json").then((loginloc) =>{
            cy.get(loginloc.acctbal).should('be.visible')
        })
        //cy.get('.rm__dashboard-card_balance').should('be.visible');
    }

    invalidPasswordMessage(){
        cy.fixture("login.json").then((loginloc) =>{
            cy.get(loginloc.alert).should('have.text', 'Invalid username or password')
        })
        // cy.get('.ant-message-notice-content').should('have.text', 'Invalid username or password');
    }

    passwordErrorMessage(){
        cy.fixture("login.json").then((loginloc) =>{
            cy.get(loginloc.alert).should('have.text', 'Error decrypting password')
        })
        // cy.get('.ant-message-notice-content').should('have.text', 'Error decrypting password');
    }
}