

Cypress.Commands.add('clickApplyLink', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.loanBtn).click()
        cy.get(loanReqLoc.apply_link).click()
    })
})

Cypress.Commands.add('inputLoanAmt', (amt) => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.loan_amt_field).type(amt)
    })
})

Cypress.Commands.add('selectLoanPurpose', (purpose) => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.loan_purpose_field).click()
            .get(purpose).click()
    })
})

Cypress.Commands.add('inputMiddleName', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.middle_name_field).clear().type(loanReqLoc.middle_name)
    })
})

Cypress.Commands.add('selectMaritalStatus', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.marital_status).click()
            .get(loanReqLoc.single).click()
    })
})

Cypress.Commands.add('selectEducationalStatus', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.edu_status).click()
            .get(loanReqLoc.graduate).click()
    })
})

Cypress.Commands.add('selectState', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.state_field).type(loanReqLoc.state)
            .get(loanReqLoc.selectState).click()
    })
})

Cypress.Commands.add('selectlga', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.lga_field).type(loanReqLoc.lga)
        cy.get(loanReqLoc.selectLga).click()
    })
})

Cypress.Commands.add('selectResidentialStatus', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.res_status_field).type("renting")
            .get(loanReqLoc.res_status).click()
    })
})

Cypress.Commands.add('selectDateMovedIn', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.day_field).type("25")
            .get(loanReqLoc.day).click()
            .get(loanReqLoc.clearIcon).click()
            .get(loanReqLoc.month_field).type("May")
            .get(loanReqLoc.month).click()
            .get(loanReqLoc.year_field).type("2019")
            .get(loanReqLoc.year).click()
    })
})

Cypress.Commands.add('inputResidentialAddress', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.res_address_field).clear().type(loanReqLoc.res_address)
    })
})

Cypress.Commands.add('inputLandmark', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.landmark_field).clear().type(loanReqLoc.landmark)
    })
})

Cypress.Commands.add('inputNOKDetails', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.nok_firstName_field).clear().type(loanReqLoc.nok_firstName)
        .get(loanReqLoc.nok_middleName_field).clear().type(loanReqLoc.nok_middleName)
        .get(loanReqLoc.nok_lastName_field).clear().type(loanReqLoc.nok_lastName)
        .get(loanReqLoc.nok_relationship_field).click()
        .get(loanReqLoc.nok_relationship).click()
        .get(loanReqLoc.nok_phone_num_field).clear().type(loanReqLoc.nok_phone_num)
    })
})

Cypress.Commands.add('inputEmploymentDetails', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.employment_stat_field).click()
        .get(loanReqLoc.employment_stat).click()
        .get('.ant-btn').click()
        .get(loanReqLoc.company_name_field).type(loanReqLoc.company_name)
        .get(loanReqLoc.sector_field).click()
        .get(loanReqLoc.sector).click()
        .get(loanReqLoc.industry_field).click()
        .get(loanReqLoc.industry).click()
        .get(loanReqLoc.salary_field).clear().type("400,000")
        .get(loanReqLoc.salary_date_field).type("25")
        .get(loanReqLoc.salary_date).click()
        .get(loanReqLoc.company_address_field).clear().type(loanReqLoc.company_address)
        .get(loanReqLoc.company_state_field).type(loanReqLoc.state)
        .get(loanReqLoc.company_state).click()
        .get(loanReqLoc.company_lga_field).type(loanReqLoc.lga)
        .get(loanReqLoc.company_lga).click()
        .get(loanReqLoc.work_phone_field).clear().type(loanReqLoc.acct_phone)
        .get(loanReqLoc.work_email_field).clear().type(loanReqLoc.work_email)
    })
})

Cypress.Commands.add('inputBankDetails', () => {
    cy.fixture('loanFlow.json').then((loanReqLoc) =>{
        cy.get(loanReqLoc.bank_details_header).should('have.text', 'Provide bank details')
        .get(loanReqLoc.bank_field).click()
        .get(loanReqLoc.bank).click()
        .get(loanReqLoc.acct_num_field).clear().type(loanReqLoc.acct_num)
        .get(loanReqLoc.acct_name_field).should('be.visible')
        .get(loanReqLoc.acct_phone_field).clear().type(loanReqLoc.acct_phone)
    })
})

Cypress.Commands.add('getWidget', (iframe) => {
        
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible', { timeout: 120000})
    .then(cy.wrap)   
       
})
