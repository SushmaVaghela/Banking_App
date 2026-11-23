/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';

describe('HSBC Login Test Scenario', ()=> {

    const homePage = new HomePage();
    const loginPage = new LoginPage();
    let testData;

    before(()=> {
        cy.fixture('login.json').then((data)=> {
            testData = data
            homePage.visit(testData.url);
        })
    })

    it('Validate HSBC Login Flow', ()=> {

       homePage.verifyLogo();
       homePage.verifyHomePageTitle(testData.expectedTitle);
       homePage.clickLoginButton();

      loginPage.verifyContinueButton();


    })
})