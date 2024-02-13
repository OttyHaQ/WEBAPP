export class LoansPage {

    //Loans page

    learn_more_link = 'p > span'
    apply_link = '.rm__rectangular--card_btn > span'
    apply_now_btn = '.ant-btn > .ng-star-inserted'


    // Loan amount page

    loan_amt_field = '.rm__input-input'
    loan_purpose_field = '.ant-select-selection-search-input'
    rent = '.ant-select-item-option-active > .ant-select-item-option-content'
    continue_btn = '.ant-btn'

    loan_amt = 10000

    // Personal Info page

    middle_name_field = ':nth-child(11) > app-input > .rm__input > .rm__input-input'
    marital_status = ':nth-child(3) > app-custom-select > .rm__input > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input'
    single = '[title="Single"] > .ant-select-item-option-content'
    edu_status = ':nth-child(4) > app-custom-select > .rm__input > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input'
    graduate = '.ant-select-item-option-active > .ant-select-item-option-content'
    state_field = ':nth-child(5) > app-custom-select > .rm__input > .ant-select > .ant-select-selector > .ant-select-selection-search'
    lagos = '.ant-select-item-option-active > .ant-select-item-option-content'
    lga = ':nth-child(6) > app-custom-select > .rm__input > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input'
    agege = '[title="Agege"] > .ant-select-item-option-content'
    res_status_field = ':nth-child(7) > app-custom-select > .rm__input > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input'
    renting = '.ant-select-item-option-active > .ant-select-item-option-content'
    day_field = 'section > :nth-child(1) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input'
    day = '[title="3"] > .ant-select-item-option-content'
    month_field = ':nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input'
    month = '[title="Feb"] > .ant-select-item-option-content'
    year_field = ':nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input'
    year = '[title="2021"] > .ant-select-item-option-content'
    res_address_field = ':nth-child(9) > app-input > .rm__input > .rm__input-input'
    landmark_field = ':nth-child(10) > app-input > .rm__input > .rm__input-input'
    nok_firstName_field = ':nth-child(11) > app-input > .rm__input > .rm__input-input'
    nok_middleName_field = ':nth-child(12) > app-input > .rm__input > .rm__input-input'
    nok_lastName_field = ':nth-child(13) > app-input > .rm__input > .rm__input-input'
    nok_relationship_field = ':nth-child(14) > app-custom-select > .rm__input > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input'
    nok_relationship = '.ant-select-item-option-selected > .ant-select-item-option-content'
    nok_phone_num_field = ':nth-child(15) > app-input > .rm__input > .rm__input-input'

    middle_name = 'Monday'
    state = 'lagos'
    res_address = 'Kolajo Estate'
    landmark = 'Ogba Market'
    nok_firstName = 'Edidiong'
    nok_middleName = 'Monday'
    nok_lastName = 'Akpanudo'
    nok_phone_num = '07038799273'


    clickApplyLink(){
        cy.get(this.apply_link).click()
    }

    inputLoanAmt(){
        cy.get(this.loan_amt_field).type(this.loan_amt)
    }

    selectLoanPurpose(){
        cy.get(this.loan_purpose_field).click()
            .get(this.rent).click()
    }

    selectMaritalStatus(){
        cy.get(this.marital_status).click()
            .get(this.single).click()
    }

    selectEducationalStatus(){
        cy.get(this.edu_status).click()
            .get(this.graduate).click()
    }

    selectState(){
        cy.get(this.state_field).type(this.state)
            .get(this.lagos).click()
    }

    selectlga(){
        cy.get(this.lga).click()
            .get(this.agege).click()
    }
    
    selectResidentialStatus(){
        cy.get(this.res_status_field).click()
            .get(this.renting)
    }

    selectDateMovedIn(){
        cy.get(this.day_field).click()
            .get(this.day).click()
            .get(this.month_field).click()
            .get(this.month).click()
            .get(this.year_field).click()
            .get(this.year).click()
    }

    inputResidentialAddress(){
        cy.get(this.res_address_field).type(this.res_address)
    }

    inputLandmark(){
        cy.get(this.landmark_field).type(this.landmark)
    }

    inputNOKDetails(){
        cy.get(this.nok_firstName_field).type(this.nok_firstName)
            .get(this.nok_middleName_field).type(this.nok_middleName)
            .get(this.nok_lastName_field).type(this.nok_lastName)
            .get(this.nok_relationship_field).click()
            .get(this.nok_relationship).click()
            .get(this.nok_phone_num_field).type(this.nok_phone_num)
    }

    clickNxt(){
        cy.get(this.continue_btn).click()
    }
}