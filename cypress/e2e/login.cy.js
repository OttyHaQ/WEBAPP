/// <reference types="cypress"/>
// import { LoginPage } from "./Pages/loginPage";

// const loginPage = new LoginPage();

describe('Login tests', () => {

  it('valid login', () => {
    cy.fixture("login.json").then((loginloc) =>{
      cy.userLogin(loginloc.email, loginloc.password)
      cy.visibility(loginloc.acctbal)
    })
  })

  it('invalid Email', () => {
    cy.fixture("login.json").then((loginloc) =>{
      cy.invalidEmail(loginloc.invalidEmail)
      cy.errormsg(loginloc.alert, 'Invalid email or phone')
    })
  })

  it('non-existent email', () => {
    cy.fixture("login.json").then((loginloc) =>{
      cy.invalidEmail(loginloc.nonexistentEmail)
      cy.visibility(loginloc.onboardingForm)
    })
  })

  it('empty Email', () => {
    cy.fixture("login.json").then((loginloc) =>{
      cy.clickNextBtn()
      cy.errormsg(loginloc.alert, 'Invalid fields provided');
    })
  })

  it('invalid password', () => {
    cy.fixture("login.json").then((loginloc) =>{
      cy.userLogin(loginloc.email, loginloc.invalidPassword)
      cy.errormsg(loginloc.alert, 'Invalid username or password');
    })
  })

  it.only('empty password', () => {
    cy.fixture("login.json").then((loginloc) =>{
      cy.emptyPassword(loginloc.email)
      cy.errormsg(loginloc.alert, 'Error decrypting password');
    })
  })

})