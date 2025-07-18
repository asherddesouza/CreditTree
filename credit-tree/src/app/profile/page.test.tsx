import { render, screen, prettyDOM } from "@testing-library/react";
import Page from "./page.client";
import "@testing-library/jest-dom";

describe("Profile", () => {
  it("renders the page with the correct text", () => {
    render(<Page name="Test User" email="test@ada.ac.uk" />);

    const heading = screen.getByText("Profile");
    const name = screen.getByText("Test User");
    const email = screen.getByText("test@ada.ac.uk");
    const profileImage = screen.getByAltText("profile_image");
    const editProfileButton = screen.getByText("Edit Profile");
    const changePasswordButton = screen.getByText("Change Password");
    const deleteAccountButton = screen.getByText("Delete Account");

    expect(heading.textContent).toBe("Profile");
    expect(name.textContent).toBe("Test User");
    expect(email.textContent).toBe("test@ada.ac.uk");
    expect(profileImage).toBeInTheDocument();
    expect(editProfileButton.textContent).toBe("Edit Profile");
    expect(changePasswordButton.textContent).toBe("Change Password");
    expect(deleteAccountButton.textContent).toBe("Delete Account");
  });

  it("correctly sends users to the correct page clickouts", () => {
    render(<Page name="Test User" email="test@ada.ac.uk" />);

    const editProfileButton = screen.getByText("Edit Profile");
    const changePasswordButton = screen.getByText("Change Password");
    const deleteAccountButton = screen.getByText("Delete Account");

    expect(editProfileButton).toHaveAttribute("href", "profile/edit");
    expect(changePasswordButton).toHaveAttribute(
      "href",
      "profile/change-password"
    );
    expect(deleteAccountButton).toHaveAttribute(
      "href",
      "profile/delete-account"
    );
  });
});
