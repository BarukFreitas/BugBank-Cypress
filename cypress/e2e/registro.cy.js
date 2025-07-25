describe('Registro de usuário', () => {

    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/')
        cy.wait(2000)
    });

    it('Deve fazer registro de usuário com sucesso', () => {
        cy.clickRegistrarBtn()
        cy.typeEmailCadastro('teste@email.com')
        cy.typeNomeCadastro('teste')
        cy.typeSenhaCadastro('123')
        cy.typeConfirmarSenhaCadastro('123')
        cy.clickSwitchSaldo()
        cy.clickCadastrarBtn()
        cy.SucessoCadastro()
        cy.clickFecharModalSucesso()
    })
})