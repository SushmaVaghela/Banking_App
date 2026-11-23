/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

import HomePageAtm from '../pages/homePageATM';
import BranchATMPage from '../pages/branchATMPage';

const homePageATM = new HomePageAtm();
const branchATMPage = new BranchATMPage();

let testData;

describe('HSBC ATM Search Test Scenario', () => {

    before(() => {
        cy.fixture('atm.json').then((data) => {
            testData = data;
            cy.visit(testData.baseUrl)

           
        });
    });

    it('Validate HSBC ATM Search Flow', () => {

      homePageATM.findFooterBranchATM();

       cy.origin('https://www.hsbc.co.in/', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false  })
        })

            //cy.visit('https://www.hsbc.co.in/ways-to-bank/branches/')

      branchATMPage.branchATMHeader(testData.branchHeader);
      branchATMPage.locatorButton();
      branchATMPage.countrySearchBox(testData.country);
      branchATMPage.indiaDropDownOption();
      branchATMPage.atmHeaderName(testData.atmHeader);
      branchATMPage.showMoreResultsBotton();
      branchATMPage.onlyATM();

      homePageATM.headerLogo();
      homePageATM.instagramIcon();
      homePageATM.facebookIcon();
      homePageATM.twitterIcon();
      homePageATM.youtubeIcon();
      homePageATM.privacyLink(testData.privacyHeader);            

      
    });
})