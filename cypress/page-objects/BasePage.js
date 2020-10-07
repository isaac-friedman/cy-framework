export default class BasePage {
  //This would be a good candidate for our custom command
  static waitS(seconds) {
    cy.wait(seconds * 1000);
  }

  static logMsg(message) {
    cy.log(message);
  }

  static mobileScreen() {
    //use our custom commands
    cy.setViewport('samsung-s9');
  }

  static tabletScreen() {
    cy.setViewport('ipad-2')
  }

  static laptopScreen() {
    cy.setViewport('macbook-15')
  }
}
