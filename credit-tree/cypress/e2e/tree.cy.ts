describe("Test that the CreditTree page works as expected", () => {
  it("should be able to access /tree", () => {
    cy.visit("http://localhost:3000/login");

    cy.get('input[name="email"]').type("testlogin@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");

    cy.get('button[type="submit"]').click();

    cy.url().should("contain", "/tree");
    cy.get("canvas").should("exist");
  });
});
