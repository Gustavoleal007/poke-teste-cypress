describe('teste de login', () => {

  it('login com sucesso', () => {
    cy.visit('http://127.0.0.1:5501/login.html')

cy.get('#usuario').type('ash');
cy.get('#senha').type('pikachu');
cy.get('div.login-container button').click();
  })

  it('login com erro', () => {
    cy.visit('http://127.0.0.1:5501/login.html')

    cy.get('#usuario').type('salame')
    cy.get('#senha').type('12345')
    cy.get('div.login-container button').click()

    // valida erro
    cy.get('#erro').should('be.visible')
  })

})
