export class LoginPage {

    email = "otakpanudo@gmail.com"
    password = "Abc1234@"
    invalidEmail = "otakpanudo"
    nonexistentEmail = "oookapanudo@gmail.com"
    invalidPassword = "afgb7y@"

    enterEmail(){
        cy.get('.rm__input-input').type(this.email)
    }

    enterInvalidEmail(){
        cy.get('.rm__input-input').type(this.invalidEmail)  
    }

    enterNonexistentEmail(){
        cy.get('.rm__input-input').type(this.nonexistentEmail)
    }

    isOnboardingPageDisplayed(){
        cy.get('.rm__form').should('be.visible');
    }

    clickNext(){
        cy.get('.ant-btn').click()
    }


    isPasswordDisplayed(){
        cy.get('main').should('be.visible')
    }

    isNextButtonDisabled(){
        cy.get('.ant-btn').should('be.disabled')
    }

    invalidPopUpMessage(){
        cy.get('.ant-message-notice-content').should('have.text', 'Invalid fields provided');
    }

    enterValidPassword(){
        cy.get('h1').should('have.text', 'Enter your password')
        cy.get('.rm__input-input').type(this.password)
    }

    enterInvalidPassword(){
        cy.get('.rm__input-input').type(this.invalidPassword)
    }

    isAccBalDisplayed(){
        cy.get('.rm__dashboard-card_balance').should('be.visible');
    }

    invalidPasswordMessage(){
        cy.get('.ant-message-notice-content').should('have.text', 'Invalid username or password');
    }

    passwordErrorMessage(){
        cy.get('.ant-message-notice-content').should('have.text', 'Error decrypting password');
    }
}