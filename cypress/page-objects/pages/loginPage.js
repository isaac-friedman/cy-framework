export default class LoginPage {
  static login(username, password) {
    cy.login(username, password)
  }

  static forgotPass() {
    cy.contains('Forgot your password ?').click()
  }

  static displayBadPassErr() {
    cy.isVisible()
  }
}
