class HomePageCard{
     
    creditCardsLink() {
     cy.xpath("/html/body/main/div[2]/div/div[1]/div/div/div[2]/div[1]/div/ul/li/div/a/span[1]").scrollIntoView().click();
    }



}

export default HomePageCard