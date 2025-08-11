describe("Test that the profile page works as expected", () => {
  it("should be able to access /profile", () => {
    cy.visit("http://localhost:3000/login");

    cy.get('input[name="email"]').type("testlogin@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");

    cy.get('button[type="submit"]').click();

    cy.url({ timeout: 20000 }).should("contain", "/tree");
    cy.get("canvas").should("exist");

    cy.get('[data-testid="profile-button"]', { timeout: 10000 })
      .should("exist")
      .click();
    cy.url({ timeout: 20000 }).should("contain", "/profile");
  });
});
