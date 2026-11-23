/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

import CreditCardPage from '../pages/creditCardPage';
import HomePageCard from '../pages/homepageCard';


const homepageCard = new HomePageCard();
const creditCardPage = new CreditCardPage();

let testData;

before(() => {
      cy.origin('https://www.hsbc.co.in/', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false  })
        })

    cy.fixture('creditCard.json').then((data) => {
        testData = data
        cy.visit(testData.url)
    })
})

describe('HSBC Credit Card Flow Validation', () => {

    it('Validate HSBC Credit Card Flow', () => {

        homepageCard.creditCardsLink();

        creditCardPage.creditCardsHeader(testData.creditCardHeader);
        creditCardPage.findRightCard();
        creditCardPage.popupWindow();
        creditCardPage.firstCardCheckbox();
        creditCardPage.compareButton();
        creditCardPage.visaCardImage();
        creditCardPage.secondCardBox();
        creditCardPage.secondCardCheckbox();
        creditCardPage.compareButton();
        creditCardPage.premireCardImage();
        creditCardPage.thirdCardBox();
        creditCardPage.thirdCardCheckbox();
        creditCardPage.compareButton();
        creditCardPage.liveCardImage();
        creditCardPage.fourthCardBox();
        creditCardPage.fourthCardCheckbox();
        creditCardPage.compareButton();
        creditCardPage.hsbcTajCardImage();

        

        
       
   })
})
