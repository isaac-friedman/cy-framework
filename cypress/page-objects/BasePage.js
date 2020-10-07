export default class BasePage {
  static waitS(seconds) {
    cy.wait(seconds * 1000);
  }

  static logMsg(message) {
    cy.log(message)
  }
}
