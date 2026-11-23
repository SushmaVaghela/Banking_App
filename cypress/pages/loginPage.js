 class LoginPage{

    verifyContinueButton(){
        cy.xpath("/html/body/div[7]/div/div/div/div/div[5]/div/a/span/span").scrollIntoView().should('be.visible');
        cy.wait(2000);
    }
    
 }
    


export default LoginPage