class BranchATMPage {

    branchATMHeader(){
        cy.xpath("//[@id='content_intro_hero_banner_2']/div/h1").should('have.text', 'branchHeader');
  }

   locatorButton(){
         cy.xpath("//[@id='content_main_button_1']/span[1]").scrollIntoView().click();
    }

    countrySearchBox(country){
         cy.xpath("//[@id='searchInput']").type(country);
    }

   indiaDropDownOption(){
         cy.xpath("//input[@value='India']").click();
        
    } 

    atmHeaderName(){
        cy.xpath("/html/body/main/div[3]/div/div[2]/div/div/div[1]/div/ul/li/button/h2/span").should('have.text', 'atmHeader');
     
    }

    showMoreResultsBotton(){
        cy.xpath("/html/body/main/div[3]/div/div[2]/div/div/div[1]/div/button[2]/span[1]").click();
    }

    onlyATM(){
         cy.xpath("//[@id='radioFilters']/span[2]/label").click();
    }

    
      }

        export default BranchATMPage;