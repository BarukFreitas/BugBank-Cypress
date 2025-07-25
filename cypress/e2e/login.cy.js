describe('Login de usuário', () => {

    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/')
    });

    it('Tentar fazer login de usuário com dados inválidos', () => {
        cy.typeEmail('emailinvalido@email.com')
        cy.typeSenha('senhainvalida')
        cy.clickAcessar()
        cy.loginInvalido()
        cy.clickFecharModalLoginInvalido()
    })
})