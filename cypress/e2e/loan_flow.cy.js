/// <reference types="cypress"/>
import { LoginPage } from "./Pages/loginPage";
import { DashboardPage } from "./Pages/dashboardPage";
import { LoansPage } from "./Pages/loansPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const loansPage = new LoansPage();


describe('loan_Flow', () => {

    it('get a loan', () => {
        loginPage.enterEmail();
        loginPage.clickNext();
        loginPage.enterValidPassword();
        loginPage.clickNext();
        
        dashboardPage.clickLoanCard();
        
        loansPage.click
        loansPage.clickApplyLink();
        loansPage.inputLoanAmt();
        loansPage.selectLoanPurpose();
        loansPage.clickNxt();
        // loansPage.selectMaritalStatus();
        // loansPage.selectEducationalStatus();
        // loansPage.selectState();
        // loansPage.selectlga();
        // loansPage.selectResidentialStatus();
        // loansPage.selectDateMovedIn();
        // loansPage.inputResidentialAddress();
        // loansPage.inputLandmark();
        // loansPage.inputNOKDetails();
        loansPage.clickNxt();
        loansPage.clickNxt();
        loansPage.clickNxt();
        
        cy.intercept('GET', 'https://api-sandbox.renmoney.com/middleware/api/v1/account/0057919770/000014/lookup').as('getAccount');
        cy.wait('@getAccount')
            .its('status').should('eq', 200);
        cy.get('.rm-account-name').should('be.visible');
        loansPage.clickNxt();
        loansPage.clickNxt();
        
    })

})


// }) Wait for the route aliased as 'getAccount' to respond
// // without changing or stubbing its response
// cy.intercept('https://api.example.com/accounts/*').as('getAccount')
// cy.visit('/accounts/123')
// cy.wait('@getAccount').then((interception) => {
// // we can now access the low level request
// // that contains the request body,
// // response body, status, etc
// })