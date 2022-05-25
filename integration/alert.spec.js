///<reference types="cypress" /> 




describe("teste alert", () => {

    
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
    });
    
    it("alerta_click_ok", () => {
        //Cypress trata de forma virtua o Alerta(por isso não é exibido no Browser)
        cy.get('[onclick="jsAlert()"]').click();
        cy.on('window:alert',(text) => {
            expect(text).to.contain('I am a JS Alert')
        });
        cy.get('#result').contains('You successfully clicked an alert');

    });
    
    it('confirm alert', () =>{
        cy.get(':nth-child(2) > button').click();

        cy.on('window.confirm' , (text) => {
            expect(text).to.contain('I am a JS Confirm')
        });
        cy.get('#result').contains('You clicked: Ok');
    });
    


    it('prompt message', () => {

        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('Test');
            cy.get('[onclick="jsPrompt()"]').click();
            //cy.get('#prompt-answer').contains('Answer: Test');

            cy.get('[id="result"]').contains('You entered: Test')
        })


    })

});