 class HomePage{

    visit(url){
        cy.visit(url) 
    }

    verifyLogo(){
         cy.xpath('/html/body/div[1]/div/header/div[4]/div/div[2]/div/div/div/h1/img').should('be.visible');
    }

    verifyHomePageTitle(){
        cy.xpath('/html/body/div[1]/div/header/div[4]/div/div[2]/div/div/nav/ul/li[4]/div[1]/span[2]')
        .should('be.visible', 'expectedTitle');
        
    }
    
    clickLoginButton(){
     cy.xpath('/html/body/div[1]/div/header/div[4]/div/div[1]/div/div/div/div/div/nav/ul/li[5]/div/a[1]').click();
    }

    
}

export default HomePage


