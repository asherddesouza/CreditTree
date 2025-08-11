describe("Test that account flows work as expected", () => {
  it("should create a test user and then delete it", () => {
    cy.visit("http://localhost:3000/register");

    cy.get('input[name="name"]').type("Test User");
    cy.get('input[name="email"]').type("test-user@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");
    cy.get('input[name="confirmPassword"]').type("Pa55word!");

    cy.get('button[type="submit"]', { timeout: 20000 }).click();

    cy.url({ timeout: 20000 }).should("contain", "/tree");

    cy.visit("http://localhost:3000/profile");

    cy.get("a").contains("Delete Account").click();

    cy.get('input[name="password"]', { timeout: 10000 }).type("Pa55word!");
    cy.get('input[name="confirm"]', { timeout: 10000 }).type("CONFIRM");

    cy.get("button").contains("Delete Account").click();

    cy.url({ timeout: 10000 }).should("contain", "/register");
  });

  it("should not create a test user with missing fields", () => {
    cy.visit("http://localhost:3000/register");

    cy.get('input[name="name"]').type("Test User");
    cy.get('input[name="email"]').type("test-user@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");

    cy.get('button[type="submit"]').click();

    cy.url({ timeout: 10000 }).should("contain", "/register");
    cy.contains("Error: You can't have any empty fields.").should("exist");
  });

  it("should not create a test user with incorrect password entry", () => {
    cy.visit("http://localhost:3000/register");

    cy.get('input[name="name"]').type("Test User");
    cy.get('input[name="email"]').type("test-user@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");
    cy.get('input[name="confirmPassword"]').type("OTHERPASSWORD55!");

    cy.get('button[type="submit"]').click();

    cy.url({ timeout: 10000 }).should("contain", "/register");
    cy.contains("Your passwords don't match. Please retry.").should("exist");
  });

  it("should login to a test user", () => {
    cy.visit("http://localhost:3000/login");

    cy.get('input[name="email"]').type("testlogin@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");

    cy.get('button[type="submit"]').click();

    cy.url({ timeout: 10000 }).should("contain", "/tree");
    cy.get("canvas").should("exist");
  });

  it("shouldn't be able to login with incorrect credentials", () => {
    cy.visit("http://localhost:3000/login");

    cy.get('input[name="email"]').type("testlogin@credittree.com");
    cy.get('input[name="password"]').type("wrongpassword!");

    cy.get('button[type="submit"]').click();

    cy.url({ timeout: 10000 }).should("contain", "/login");
    cy.get("canvas").should("not.exist");
  });
});
