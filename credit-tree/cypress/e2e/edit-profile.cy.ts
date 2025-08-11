describe("Test that the edit profile page works as expected", () => {
  it("should be able to edit a user's profile", () => {
    cy.visit("http://localhost:3000/login");

    cy.get('input[name="email"]').type("testlogin@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");

    cy.get('button[type="submit"]').click();

    cy.url().should("contain", "/tree");
    cy.get("canvas").should("exist");

    cy.get('[data-testid="profile-button"]').should("exist").click();
    cy.url().should("contain", "/profile");

    cy.get("a").contains("Edit Profile").click();
    cy.url().should("contain", "/profile/edit");

    cy.get('input[name="new_email"]').type("testloginNEW@credittree.com");
    cy.get('button[type="submit"]').click();

    cy.url().should("contain", "/profile");
    cy.contains("testloginNEW@credittree.com").should("exist");

    cy.get("a").contains("Edit Profile").click();
    cy.url().should("contain", "/profile/edit");

    cy.get('input[name="new_email"]').type("testlogin@credittree.com");
    cy.get('button[type="submit"]').click();

    cy.url().should("contain", "/profile");
    cy.contains("testlogin@credittree.com").should("exist");
  });

  it("should be able to edit a user's profile", () => {
    cy.visit("http://localhost:3000/login");

    cy.get('input[name="email"]').type("testlogin@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");

    cy.get('button[type="submit"]').click();

    cy.url().should("contain", "/tree");
    cy.get("canvas").should("exist");

    cy.get('[data-testid="profile-button"]').should("exist").click();
    cy.url().should("contain", "/profile");

    cy.get("a").contains("Edit Profile").click();
    cy.url().should("contain", "/profile/edit");

    cy.get('input[name="new_email"]').type("testlogin@credittree.com");
    cy.get('button[type="submit"]').click();

    cy.url().should("contain", "/profile/edit");
    cy.contains(
      "Your new email can't be the same as your current email."
    ).should("exist");
  });
});
