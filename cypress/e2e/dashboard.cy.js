/// <reference types="cypress"/>
import { LoginPage } from "./Pages/loginPage";
import { DashboardPage } from "./Pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();


describe('dashboard UI test', () => {

    it('verify Dashboard UI', () => {
        loginPage.enterEmail();
        loginPage.clickNext();
        cy.wait(5000)
        loginPage.enterValidPassword();
        loginPage.clickNext();
        cy.wait(10000)
        dashboardPage.verifyLeftMenuBtns();
        // dashboardPage.verifyTopMenu();
        dashboardPage.verifyAcctDetailsSection()
        dashboardPage.verifyBillsBtns();
        dashboardPage.verifyNotificationClouds();
        dashboardPage.verifyCards();
        dashboardPage.verifyChatbotBtn();
    
    })

})