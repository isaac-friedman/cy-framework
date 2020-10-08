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

  static clickSettings() {
    cy.contains("settings").click()
  }

  static unMenu(username) {
    cy.contains(username).click()
  }

  static logout(username) {
    cy.contains(username).click()
    cy.get('#logout_link').click()
  }
}
