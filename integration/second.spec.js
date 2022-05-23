///<reference types="cypress" /> 

describe('cadastro_ficha', () =>{

    it('colocar no carrinho', () => {

        cy.visit('http://practice.automationtesting.in/shop/')

        cy.get('[data-product_id="169"]').click()
        

    })




})