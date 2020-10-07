export default class TopNav {
  static clickLogo() {
    cy.get('.brand').click()
  }

  static search(terms) {
    cy.get('#searchTerm').type(`${terms}{enter}`)
  }

  static clickSignin() {
    cy.get('#signin_button').click()
  }
}
