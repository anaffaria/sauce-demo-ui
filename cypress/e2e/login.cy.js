import login from "../pages/login";
import data from "../fixtures/login.json";

describe("Login", () => {
  beforeEach(() => {
    login.visitPage(data.url);
  });

  it("Realiza login com sucesso", () => {
    login.fillInUserField(data.validUser);
    login.fillInPasswordField(data.validPassword);
    login.clickOnLogin();

    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");

    cy.get(".app_logo").should("have.text", "Swag Labs");
  });

  it("Tentativa de login com senha inválida", () => {
    login.fillInUserField(data.validUser);
    login.fillInPasswordField(data.invalidPassword);
    login.clickOnLogin();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });

  it("Tentativa de login com usuário inválido", () => {
    login.fillInUserField(data.invalidUser);
    login.fillInPasswordField(data.validPassword);
    login.clickOnLogin();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });

  it("Tentativa de login com usuário bloqueado", () => {
    login.fillInUserField(data.lockedUser);
    login.fillInPasswordField(data.validPassword);
    login.clickOnLogin();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and(
        "have.text",
        "Epic sadface: Sorry, this user has been locked out."
      );
  });

});
