export default class LoginPage {
  static login(username, password) {
    cy.login(username, password)
  }

  static forgotPass() {

  }

  static displayBadPassErr() {
    //TODO
  }
}
