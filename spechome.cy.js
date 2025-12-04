describe('teste home', () => {
  it('home funcional', () => {
    cy.visit('http://127.0.0.1:5501/home.html')
    cy.get('#pokedex div:nth-child(1) > h3').click();
    cy.get('#modal span.fechar').click();
    cy.get('#busca').click();
    cy.get('#busca').type('palkia{enter}');
    cy.get('#pokedex h3').click();
    cy.get('#modal span.fechar').click();
    cy.get('header').click();
    cy.get('#busca').clear();
    cy.get('button').click();
  })
})