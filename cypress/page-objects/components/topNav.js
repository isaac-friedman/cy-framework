export default class topNav {
  static clickLogo() {
    cy.get('.brand').click()
  }

  static search() {
    cy.get('#searchTerm').type("engfeh {enter}")
  }
}
