///<reference types="cypress" /> 

describe("teste alert", () => {


    it("alerta_click_ok", () => {

        cy.visit('http://demo.automationtesting.in/Alerts.html');

        cy.get('.active > .analystic').click();
        cy.get('#OKTab > .btn').click();



    });




});