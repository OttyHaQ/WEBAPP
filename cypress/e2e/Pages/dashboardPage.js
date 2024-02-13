export class DashboardPage {

    // left pane
    profile_pic = '.main-nav > article > .rounded-circle'
    home_btn = 'section > .active'
    save_btn = 'section > [title="Save"]'
    loan_btn = 'section > [title="Loan"]'
    pay_btn = '.rm-update'
    more_btn = 'section > [title="More"]'
    logout_btn = '.logout-box'
    logo = '[src="assets/reskins/logos/white-logo-renmoney.svg"]'

    // top menu
    fav_icon = '.d-md-flex > rm-header-action-buttons > .header > :nth-child(1) > img'
    message_icon = '.d-md-flex > rm-header-action-buttons > .header > :nth-child(2) > img'
    notification_icon = '.d-md-flex > rm-header-action-buttons > .header > :nth-child(3) > img'

    // account details section
    title = '.rm__rectangular--card_top > article > p'
    history_btn = 'History'
    tier = 'section.ng-star-inserted > rm-tier-button > .ant-btn'
    acct_name = '.rm__dashboard-card_acct--details > :nth-child(1)'
    acct_num = '.rm__dashboard-card_acct--details > :nth-child(2)'
    bank_name = '.rm__dashboard-card_acct--details > p'
    copy_icon = 'p > img'
    acct_bal = '.rm__dashboard-card_balance--amount'
    bal_decimal = '.rm__dashboard-card_balance--decimals'

    // Bills section
    add_money_btn = ':nth-child(1) > .rm__quick--action'
    send_money_btn = '[icon="assets/reskins/icons/blue-plane.svg"] > .rm__quick--action'
    buy_airtime_btn = '[icon="assets/reskins/icons/yellow-phone.svg"] > .rm__quick--action'
    pay_bills_btn = '[icon="assets/reskins/icons/green-bulb.svg"] > .rm__quick--action'
  

    // notification clouds
    tier_upgrade_not = '.rm__dashboard--ad'
    expectedLines = [
        'Remove all account restrictions. ',
        'Upgrade your account tier'
      ]; 

    //Cards section
    savings_card_1 = '[title="Start Saving"] > .rm__dashboard-products > .rm__dashboard-products--item > article > h6'
    savings_card_2 = '[title="Start Saving"] > .rm__dashboard-products > .rm__dashboard-products--item > article > p'
    save_btn_2 = '.rm__dashboard-main_products--btn'
    loan_card_1 = '[icon="assets/reskins/icons/loan-db-icon.svg"] > .rm__dashboard-products > .rm__dashboard-products--item > article > h6'
    loan_card_2 = '[icon="assets/reskins/icons/loan-db-icon.svg"] > .rm__dashboard-products > .rm__dashboard-products--item > article > p'
    apply_btn = '[icon="assets/reskins/icons/bills-dsb-icon.svg"] > .rm__dashboard-products'
    bills_card_1 = '[icon="assets/reskins/icons/bills-dsb-icon.svg"] > .rm__dashboard-products > .rm__dashboard-products--item > article > h6'
    bills_card_2 = '[icon="assets/reskins/icons/bills-dsb-icon.svg"] > .rm__dashboard-products > .rm__dashboard-products--item > article > p'
    bills_forward_icon = '#fc_widget'
    debit_card_1 = '[icon="assets/reskins/icons/debitcards-db-icon.svg"] > .rm__dashboard-products > .rm__dashboard-products--item > article > h6'
    debit_card_2 = '[icon="assets/reskins/icons/debitcards-db-icon.svg"] > .rm__dashboard-products > .rm__dashboard-products--item > article > p'

    // Chat icon
    chat_icon = '#fc_widget'

    verifyLeftMenuBtns(){
        cy.get(this.profile_pic).should('be.visible')
            .get(this.home_btn).should('be.visible').should('have.text', 'Home')
            .get(this.save_btn).should('be.visible').should('have.text', 'Save')
            .get(this.loan_btn).should('be.visible').should('have.text', 'Loan')
            .get(this.pay_btn).should('be.visible').should('have.text', 'Pay')
            .get(this.more_btn).should('be.visible').should('have.text', 'More')
            .get(this.logout_btn).should('be.visible').should('have.text', 'Log out')
            .get(this.logo).should('be.visible')          
    }    

    verifyAcctDetailsSection(){
        cy.get(this.title).should('have.text', 'Your Account Details')
            .get(this.tier).should('be.visible').should('have.text', ' Tier 2 ')
            .get(this.acct_name).should('be.visible')
            .get(this.acct_num).should('be.visible')
            .get(this.bank_name).should('be.visible').should('have.text', ' Renmoney Microfinance Bank ')
            .get(this.copy_icon).should('be.visible')
            .get(this.acct_bal).should('be.visible')
            .get(this.bal_decimal).should('be.visible')
            //.get(this.hide_icon).should('be.visible')
            expect(this.history_btn).to.be.equal('History')
            
    }

    verifyBillsBtns(){
        cy.get(this.add_money_btn).should('be.visible').should('have.text', 'Add Money')
            .get(this.send_money_btn).should('be.visible').should('have.text', 'Send Money')
            .get(this.buy_airtime_btn).should('be.visible').should('have.text', 'Buy Airtime')
            .get(this.pay_bills_btn).should('be.visible').should('have.text', 'Pay Bills')
    }

    verifyNotificationClouds(){
        cy.get(this.tier_upgrade_not).invoke('text').then((actualText) => {
            this.expectedLines.forEach((line) => {
              expect(actualText).to.include(line);
            });
          });
    }

    verifyCards(){
        cy.get(this.savings_card_1).should('be.visible').should('have.text', 'Start Saving')
            .get(this.savings_card_2).should('be.visible').should('have.text', 'Make every naira count, enjoy 20% interest p.a')
            .get(this.save_btn_2).should('be.visible').should('have.text', 'Save')
            .get(this.loan_card_1).should('be.visible').should('have.text', 'Get a Loan')
            .get(this.loan_card_2).should('be.visible').should('have.text', 'Money in your bank account within 10 minutes')
            .get(this.bills_card_1).should('be.visible').should('have.text', 'Airtime, Data & Bills')
            .get(this.bills_card_2).should('be.visible').should('have.text', 'Pay bills, buy airtime - whenever, wherever')
            .get(this.bills_forward_icon).should('be.visible')
            .get(this.debit_card_1).should('have.text', 'Debit Cards')
            .get(this.debit_card_2).should('have.text', 'Coming soon')           
    }

    verifyTopMenu(){
        cy.get(this.fav_icon).should('be.visible')
            .get(this.message_icon).should('be.visible')
            .get(this.notification_icon).should('be.visible')
    }

    verifyChatbotBtn(){
        cy.get(this.chat_icon).should('be.visible')
    }

    clickLoanCard(){
        cy.get(this.loan_btn).click()
    }
}