Cypress.Commands.add('clickRegistrarBtn', () => {
    cy.get('.ihdmxA').click()
    cy.wait(1000)
})

Cypress.Commands.add('typeEmailCadastro', (email) => {
    cy.get(':nth-child(2) > .input__default').type(email, {force: true})
})

Cypress.Commands.add('typeNomeCadastro', (nome) => {
    cy.get(':nth-child(3) > .input__default').type(nome, {force: true})
})

Cypress.Commands.add('typeSenhaCadastro', (senha) => {
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha, {force: true})
})

Cypress.Commands.add('typeConfirmarSenhaCadastro', (senha) => {
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha, {force: true})
})

Cypress.Commands.add('clickSwitchSaldo', () => {
    cy.get('#toggleAddBalance').click({force: true})
})

Cypress.Commands.add('clickCadastrarBtn', () => {
   cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true})
})

Cypress.Commands.add('SucessoCadastro', () => {
    cy.get('.styles__ContainerContent-sc-8zteav-1').should('be.visible')
});

Cypress.Commands.add('clickFecharModalSucesso', () => {
    cy.get('#btnCloseModal').click()
})