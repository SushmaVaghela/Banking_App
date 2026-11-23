class CreditCardPage{

    creditCardsHeader() {
    cy.xpath("/html/body/main/div[1]/div/div/div/div/div/div/div/h1").should('have.text','creditCardHeader');
    }

    findRightCard() {
        cy.xpath("//[@id='chp_introduction_link_1']/a/span[1]").should('be.visible');
    }

    popupWindow() {
         cy.xpath("//[@id='title-pp_tools_productComparator_4']");
    }

    firstCardCheckbox() {
        cy.xpath("//[@id='pp_tools_productComparator_1']/div[3]/div[1]/div/div/div[1]/div[1]/div[1]/div").click();
    }

    compareButton(){
        cy.xpath("//[@id='pp_tools_productComparator_1']/div[3]/div[1]/div/div/div[2]/button/span").click();
    }

    visaCardImage(){
        cy.xpayh("//[@id='pp_tools_image_2']").should('be.visible');
    }

    secondCardBox(){
        cy.xpath("//[@id='pp_tools_productComparator_1']/div[2]/div/div[3]/div[2]/div/a").click();
    }

    secondCardCheckbox(){
        cy.xpath("//[@id='pp_tools_productComparator_1']/div[3]/div[1]/div/div/div[1]/div[2]/div[1]/div").click();
    }

    compareButton(){
        cy.xpath("//[@id='pp_tools_productComparator_1']/div[3]/div[1]/div/div/div[2]/button/span").click();
    }

    premireCardImage(){
        cy.xpath("//[@id='pp_tools_image_4']").should('be.visible');
    }

    thirdCardBox(){
        cy.xpath("//[@id='pp_tools_productComparator_1']/div[2]/div/div[3]/div[3]/div/a").click();
    }

    thirdCardCheckbox(){
        cy.xpath("//[@id='pp_tools_productComparator_1']/div[3]/div[1]/div/div/div[1]/div[3]/div[1]/div").scrollIntoView().click();
    }

    compareButton(){
        cy.xpath("//[@id='pp_tools_productComparator_1']/div[3]/div[1]/div/div/div[2]/button/span").click();
    }

    liveCardImage(){
        cy.xpath("//[@id='pp_tools_image_6']").should('be.visible');
    }

    fourthCardBox(){
        cy.xpath("//[@id='pp_tools_productComparator_1']/div[2]/div/div[3]/div[4]/div/a").click();
    }

    fourthCardCheckbox(){
        cy.xpath("//[@id='pp_tools_productComparator_1']/div[3]/div[1]/div/div/div[1]/div[4]/div[1]/div").scrollIntoView().click();
    }

    compareButton(){
        cy.xpath("//[@id='pp_tools_productComparator_1']/div[3]/div[1]/div/div/div[2]/button/span").click();
    }

   hsbcTajCardImage(){
        cy.xpath("//[@id='pp_tools_image_8']']").should('be.visible');
    }
}

export default CreditCardPage
