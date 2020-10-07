export default class topNav {
  static clickLogo() {
    cy.get('.brand').click()
  }

  static search(terms) {
    cy.get('#searchTerm').type(`${terms}{enter}`)
  }
}
