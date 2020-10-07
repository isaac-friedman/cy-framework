import BasePage from '../BasePage'
export default class LoginPage extends BasePage {
  static login(username, password) {
    cy.login(username, password)
  }

  static forgotPass() {
    cy.contains('Forgot your password ?').click()
  }

  static displayBadPassErr() {
    cy.isVisible('.alert-error')
  }
}
