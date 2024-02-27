/// <reference types="cypress"/>
// import { LoginPage } from "./Pages/loginPage";
// import { DashboardPage } from "./Pages/dashboardPage";

// const loginPage = new LoginPage();
// const dashboardPage = new DashboardPage();


describe('dashboard UI test', () => {

    it('verify Dashboard UI', () => {
        cy.fixture("login.json").then((loginloc) => {
            cy.userLogin(loginloc.email, loginloc.password)
            cy.visibility(loginloc.acctbal)
            cy.verifyLeftMenuBtns();
            // cy.verifyTopMenu();
            cy.verifyAcctDetailsSection()
            cy.verifyBillsBtns();
            cy.verifyNotificationClouds();
            cy.verifyCards();
            cy.verifyChatbotBtn();

        })
    })

})