//identificador da liguagem do cypress.//
///<reference types="cypress" /> 


describe('buton test', () => {
   
    it('validate button', () => {
        
        cy.visit("http://demo.automationtesting.in/Register.html");

        cy.get('[placeholder="First Name"]').type("Test");
        cy.get('[placeholder="Last Name"]').type("Last Name");
        cy.get('[ng-model="Adress"]').type("Rua Teste, 1234");
        cy.get('[type="email"]').type("Email@test.com");
        cy.get('[type="tel"]').type("+14081231234");
        cy.get('[value="FeMale"]').click();
        cy.get('[id="checkbox1"]').click();
        cy.get('[id="checkbox2"]').click();
        cy.get('[id="checkbox3"]').click();
        cy.get('#msdd').click();
        cy.get('li').contains("Arabic").click();
        cy.get('div').contains("Languages").click();
        cy.get('[id="Skills"]').select("Ruby").should('have.value', "Ruby");
        cy.get('[id="countries"]').select('Select Country'); 
        cy.get("span[role='combobox']").click();
        cy.get("input[type='search']").type("Japan");
        cy.get("#select2-country-results").contains("Japan").click();  
        cy.get('[id="yearbox"]').select('1916');
        cy.get('[placeholder="Month"]').select('September');
        cy.get('[id="daybox"]').select('8');
        cy.get('[id="firstpassword"]').type("123456");
        cy.get('[id="secondpassword"]').type("123456");
        cy.get('[id="submitbtn"]').click();
        //cy.get('#Button1').click(); Refresh the form
        

    });

   

});