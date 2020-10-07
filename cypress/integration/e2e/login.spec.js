import { url } from '../../../config'
import TopNav from '../../page-objects/components/topNav'
import LoginPage from '../../page-objects/pages/loginPage'

describe("successful login", () => {
  before(() => {
    cy.visit(url)
    TopNav.clickSignin()
  })
  it("Should log in", () => {
    LoginPage.login("username", "password") //identical to cy.login. Miserable architecture
  })
})

describe("unsuccessful login", () => {
  before(() => {
    cy.visit(url)
    TopNav.clickSignin()
  })
  it("Shouldn't log in", () => {
    cy.login('badname', 'badpass')
    LoginPage.displayBadPassErr()
  })
})
