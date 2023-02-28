/// <reference types = "cypress"/>
describe ('realizar pesquisa e cadastro', () => {


    
    it ('cadastro de usuario', () =>{
        cy.visit('https://www.netshoes.com.br/auth/login')
        
        cy.get('#email').type('vinnie3141@uorak.com')
        
        cy.get(':nth-child(2) > .column > .form-group > [data-testid="submitButton"]').click()
    
        //Cadastro de Pessoa Física//
        cy.get('#name').type('Vinicius')
        cy.get('#lastName').type('Nobrega')
        cy.get(':nth-child(2) > .radio > .radio__label').click()
    
        cy.get('#dayOfBirth').select('17')
        cy.get('#monthOfBirth').select('Março')
        cy.get('#yearOfBirth').select('1991')
    
        cy.get('#password').type('123456789')

        cy.get('#cpf').type('71353126277')
        cy.get('#homePhone').type('11963608531')
        cy.get('#mobilePhone').type('11948099474')
        cy.get('#zipCode').type('07193280')
        cy.get('#streetNumber').type('182')
        cy.get('#additionalInfo').type('Casa')
        cy.get('#reference').type('Supermercado Barbosa')
    

         cy.get(':nth-child(8) > .column > .checkbox > .checkbox__label > .checkbox__input').click()
         cy.get('.btn').click()

         


        });
    
    });