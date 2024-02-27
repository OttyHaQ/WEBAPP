Cypress.Commands.add('verifyLeftMenuBtns', () => {
    cy.fixture("dashboard.json").then((dashloc) =>{
        cy.get(dashloc.profile_pic).should('be.visible')
            .get(dashloc.home_btn).should('be.visible').should('have.text', 'Home')
            .get(dashloc.save_btn).should('be.visible').should('have.text', 'Save')
            .get(dashloc.loan_btn).should('be.visible').should('have.text', 'Loan')
            .get(dashloc.pay_btn).should('be.visible').should('have.text', 'Pay')
            .get(dashloc.more_btn).should('be.visible').should('have.text', 'More')
            .get(dashloc.logout_btn).should('be.visible').should('have.text', 'Log out')
            .get(dashloc.logo).should('be.visible') 
    })
})

Cypress.Commands.add('verifyAcctDetailsSection', () => {
    cy.fixture("dashboard.json").then((dashloc) =>{
        cy.get(dashloc.title).should('have.text', 'Your Account Details')
            .get(dashloc.tier).should('be.visible').should('have.text', ' Tier 2 ')
            .get(dashloc.acct_name).should('be.visible')
            .get(dashloc.acct_num).should('be.visible')
            .get(dashloc.bank_name).should('be.visible').should('have.text', ' Renmoney Microfinance Bank ')
            .get(dashloc.copy_icon).should('be.visible')
            .get(dashloc.acct_bal).should('be.visible')
            .get(dashloc.bal_decimal).should('be.visible')
            //.get(dashloc.hide_icon).should('be.visible')
            expect(dashloc.history_btn).to.be.equal('History')
    })
})

Cypress.Commands.add('verifyBillsBtns', () => {
    cy.fixture("dashboard.json").then((dashloc) =>{
        cy.get(dashloc.add_money_btn).should('be.visible').should('have.text', 'Add Money')
            .get(dashloc.send_money_btn).should('be.visible').should('have.text', 'Send Money')
            .get(dashloc.buy_airtime_btn).should('be.visible').should('have.text', 'Buy Airtime')
            .get(dashloc.pay_bills_btn).should('be.visible').should('have.text', 'Pay Bills')
    })
})

Cypress.Commands.add('verifyNotificationClouds', () => {
    cy.fixture("dashboard.json").then((dashloc) =>{
        cy.get(dashloc.tier_upgrade_not).invoke('text').then((actualText) => {
            dashloc.expectedLines.forEach((line) => {
              expect(actualText).to.include(line);
            });
          });
    })
})

Cypress.Commands.add('verifyCards', () => {
    cy.fixture("dashboard.json").then((dashloc) =>{
        cy.get(dashloc.savings_card_1).should('be.visible').should('have.text', 'Start Saving')
            .get(dashloc.savings_card_2).should('be.visible').should('have.text', 'Make every naira count, enjoy 20% interest p.a')
            .get(dashloc.save_btn_2).should('be.visible').should('have.text', 'Save')
            .get(dashloc.loan_card_1).should('be.visible').should('have.text', 'Get a Loan')
            .get(dashloc.loan_card_2).should('be.visible').should('have.text', 'Money in your bank account within 10 minutes')
            .get(dashloc.bills_card_1).should('be.visible').should('have.text', 'Airtime, Data & Bills')
            .get(dashloc.bills_card_2).should('be.visible').should('have.text', 'Pay bills, buy airtime - whenever, wherever')
            // .get(dashloc.bills_forward_icon).should('be.visible')
            .get(dashloc.debit_card_1).should('have.text', 'Debit Cards')
            .get(dashloc.debit_card_2).should('have.text', 'Coming soon') 
    })
})

Cypress.Commands.add('verifyTopMenu', () => {
    cy.fixture("dashboard.json").then((dashloc) =>{
        cy.get(dashloc.fav_icon).should('be.visible')
            .get(dashloc.message_icon).should('be.visible')
            .get(dashloc.notification_icon).should('be.visible')
    })
})


Cypress.Commands.add('verifyChatbotBtn', () => {
    cy.fixture("dashboard.json").then((dashloc) =>{
        cy.get(dashloc.chat_icon).should('be.visible')
    })
})

Cypress.Commands.add('verifyChatbotBtn', () => {
    cy.fixture("dashboard.json").then((dashloc) =>{
        cy.get(dashloc.loan_btn).click()
    })
})
