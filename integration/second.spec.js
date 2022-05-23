///<reference types="cypress" /> 

describe('acesso_login', () =>{

    it.only('colocar no carrinho', () => {

        cy.visit('https://www.saucedemo.com/')

        cy.get('[id="user-name"]').type('standard_user');
        cy.get('[id="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('.shopping_cart_link').click();

    })

    it('colocar no carrinho', () => {
        cy.visit('https://www.saucedemo.com/inventory.html')



    })


})