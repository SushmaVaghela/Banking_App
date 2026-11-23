class HomePageAtm {
     
    findFooterBranchATM(){
        cy.xpath("/html/body/footer/div[1]/div/div/nav/ul/li[2]/a").scrollIntoView().click();
         cy.url().should('include', 'hsbc.co.in/');

          }

     headerLogo() {
         cy.xpath("/html/body/div[1]/div/header/div[4]/div/div[2]/div/div/div/a/img").click();
    }

    instagramIcon() {
        cy.xpath("//[@id='pp_socialmediafooterlink_1']").scrollIntoView().should('be.visible');
    }

    facebookIcon() {
         cy.xpath("//[@id='pp_socialmediafooterlink_2']");
    }

    twitterIcon() {
        cy.xpath("//[@id='pp_socialmediafooterlink_3']");
    }

    youtubeIcon() {
        cy.xpath("//[@id='pp_socialmediafooterlink_4']");
    }

    privacyLink() { 
         cy.xpath("/html/body/footer/div[2]/div/div/nav/ul/li[3]/a").click().should('have.text', 'privacyHeader');
    }

}

   export default HomePageAtm;


