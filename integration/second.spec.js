///<reference types="cypress" /> 

describe('ultima_qa', () =>{

    it.only('random_stuff', () => {

        cy.visit('https://ultimateqa.com/complicated-page');
        cy.get('#et_pb_contact_name_0').type("User Name");
        cy.get('#et_pb_contact_email_0').type("Email@example.com");
        cy.get('#et_pb_contact_message_0').type("Message T2ukDKp_HaJ-PW5ncDGVsRseTXlOXdPgZb4m4lV_DSAjFk");
        cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input').type('18')
        cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit').click();''

        

    })

    


})