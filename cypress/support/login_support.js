Cypress.Commands.add('typeEmail', (email) => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(email)
})

Cypress.Commands.add('typeSenha', (senha) => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha)
})

Cypress.Commands.add('clickAcessar', () => {
    cy.get('.otUnI').click()
})

Cypress.Commands.add('loginInvalido', () => {
    cy.get('.styles__ContainerContent-sc-8zteav-1').should('be.visible')
});

Cypress.Commands.add('clickFecharModalLoginInvalido', () => {
    cy.get('#btnCloseModal').click()
})