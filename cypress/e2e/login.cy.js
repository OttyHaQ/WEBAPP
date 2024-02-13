/// <reference types="cypress"/>
import { LoginPage } from "./Pages/loginPage";

const loginPage = new LoginPage();

describe('Login tests', () => {

  it('valid Email', () => {
    loginPage.enterEmail();
    loginPage.clickNext();
    loginPage.isPasswordDisplayed();
  })

  it('invalid Email', () => {
    loginPage.enterInvalidEmail();
    loginPage.clickNext();
    loginPage.isNextButtonDisabled();
    loginPage.invalidPopUpMessage();
  })

  it('non-existent email', () => {
    loginPage.enterNonexistentEmail();
    loginPage.clickNext();
    loginPage.isOnboardingPageDisplayed();
    
  })

  it('empty Email', () => {
    loginPage.clickNext();
    loginPage.isNextButtonDisabled();
    loginPage.invalidPopUpMessage();
  })

  it.only('valid password', () => {
    loginPage.enterEmail();
    loginPage.clickNext();
    cy.wait(3000)
    loginPage.enterValidPassword();
    loginPage.clickNext();
    cy.wait(5000)
    loginPage.isAccBalDisplayed();
  })

  it('invalid password', () => {
    loginPage.enterEmail();
    loginPage.clickNext();
    cy.wait(3000)
    loginPage.enterInvalidPassword();
    loginPage.clickNext();
    loginPage.invalidPasswordMessage();
  })

  it('empty password', () => {
    loginPage.enterEmail();
    loginPage.clickNext();
    cy.wait(3000)
    loginPage.clickNext();
    loginPage.passwordErrorMessage();
  })


})