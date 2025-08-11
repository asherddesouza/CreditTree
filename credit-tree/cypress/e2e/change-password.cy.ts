describe("Test that the change password page works as expected", () => {
  it("should be able to change a user's password", () => {
    // Login to the test user account

    cy.visit("http://localhost:3000/login");

    cy.get('input[name="email"]').type("testlogin@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");

    cy.get('button[type="submit"]').click();

    cy.url({ timeout: 10000 }).should("contain", "/tree");
    cy.get("canvas").should("exist");

    cy.get('[data-testid="profile-button"]', { timeout: 20000 })
      .should("exist")
      .click();
    cy.url({ timeout: 10000 }).should("contain", "/profile");

    // Go to the change password page

    cy.get("a").contains("Change Password").click();
    cy.url({ timeout: 10000 }).should("contain", "/profile/change-password");

    cy.get('input[name="old_password"]').type("Pa55word!");
    cy.get('input[name="new_password"]').type("NewPa55word!");
    cy.get('input[name="confirm_new_password"]').type("NewPa55word!");

    cy.contains("button", "Submit").should("exist").click();

    cy.url({ timeout: 10000 }).should("contain", "/profile");

    cy.get('[data-testid="logout-button"]', { timeout: 20000 })
      .should("exist")
      .click();

    // Attempt to login with the new password

    cy.url({ timeout: 10000 }).should("contain", "/login");

    cy.get('input[name="email"]').type("testlogin@credittree.com");
    cy.get('input[name="password"]').type("NewPa55word!");

    cy.get('button[type="submit"]').click();

    cy.url({ timeout: 20000 }).should("contain", "/tree");
    cy.get("canvas").should("exist");

    cy.get('[data-testid="profile-button"]', { timeout: 20000 })
      .should("exist")
      .click();
    cy.url({ timeout: 20000 }).should("contain", "/profile");

    // Change back to the original password

    cy.get("a").contains("Change Password").click();
    cy.url({ timeout: 20000 }).should("contain", "/profile/change-password");

    cy.get('input[name="old_password"]').type("NewPa55word!");
    cy.get('input[name="new_password"]').type("Pa55word!");
    cy.get('input[name="confirm_new_password"]').type("Pa55word!");

    cy.contains("button", "Submit").should("exist").click();

    cy.url({ timeout: 20000 }).should("contain", "/profile");

    cy.get('[data-testid="logout-button"]', { timeout: 20000 })
      .should("exist")
      .click();

    cy.url({ timeout: 20000 }).should("contain", "/login");

    // Check that the original password works again

    cy.get('input[name="email"]').type("testlogin@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");

    cy.get('button[type="submit"]').click();

    cy.url({ timeout: 20000 }).should("contain", "/tree");
    cy.get("canvas").should("exist");
  });

  it("should not change a user's password if the old password is incorrect", () => {
    // Login to the test user account

    cy.visit("http://localhost:3000/login");

    cy.get('input[name="email"]').type("testlogin@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");

    cy.get('button[type="submit"]').click();

    cy.url({ timeout: 20000 }).should("contain", "/tree");
    cy.get("canvas").should("exist");

    cy.get('[data-testid="profile-button"]', { timeout: 20000 })
      .should("exist")
      .click();
    cy.url({ timeout: 20000 }).should("contain", "/profile");

    // Go to the change password page and enter the incorrect old password

    cy.get("a").contains("Change Password").click();
    cy.url({ timeout: 20000 }).should("contain", "/profile/change-password");

    cy.get('input[name="old_password"]').type("INCORRECT_PASSWORD11!");
    cy.get('input[name="new_password"]').type("NewPa55word!");
    cy.get('input[name="confirm_new_password"]').type("NewPa55word!");

    cy.contains("button", "Submit").should("exist").click();

    cy.url({ timeout: 20000 }).should("contain", "/profile/change-password");
    cy.contains("Your old password is incorrect.").should("exist");
  });

  it("should not change a user's password if the new passwords don't match", () => {
    // Login to the test user account

    cy.visit("http://localhost:3000/login");

    cy.get('input[name="email"]').type("testlogin@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");

    cy.get('button[type="submit"]', { timeout: 20000 }).click();

    cy.url({ timeout: 20000 }).should("contain", "/tree");
    cy.get("canvas").should("exist");

    cy.get('[data-testid="profile-button"]', { timeout: 20000 })
      .should("exist")
      .click();
    cy.url({ timeout: 20000 }).should("contain", "/profile");

    // Go to the change password page and enter the incorrect old password

    cy.get("a").contains("Change Password").click();
    cy.url({ timeout: 20000 }).should("contain", "/profile/change-password");

    cy.get('input[name="old_password"]').type("Pa55word!");
    cy.get('input[name="new_password"]').type("NewPa55word!");
    cy.get('input[name="confirm_new_password"]').type("DifferentNewPa55word!");

    cy.contains("button", "Submit").should("exist").click();

    cy.url({ timeout: 20000 }).should("contain", "/profile/change-password");
    cy.contains("Your passwords don't match. Please retry.").should("exist");
  });

  it("should not change a user's password if the new password is insecure", () => {
    // Login to the test user account

    cy.visit("http://localhost:3000/login");

    cy.get('input[name="email"]').type("testlogin@credittree.com");
    cy.get('input[name="password"]').type("Pa55word!");

    cy.get('button[type="submit"]', { timeout: 20000 }).click();

    cy.url({ timeout: 20000 }).should("contain", "/tree");
    cy.get("canvas").should("exist");

    cy.get('[data-testid="profile-button"]').should("exist").click();
    cy.url({ timeout: 20000 }).should("contain", "/profile");

    // Go to the change password page and enter the incorrect old password

    cy.get("a").contains("Change Password").click();
    cy.url({ timeout: 20000 }).should("contain", "/profile/change-password");

    cy.get('input[name="old_password"]').type("Pa55word!");
    cy.get('input[name="new_password"]').type("password1");
    cy.get('input[name="confirm_new_password"]').type("password1");

    cy.contains("button", "Submit").should("exist").click();

    cy.url({ timeout: 20000 }).should("contain", "/profile/change-password");
    cy.contains(
      "Your password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ).should("exist");
  });
});
