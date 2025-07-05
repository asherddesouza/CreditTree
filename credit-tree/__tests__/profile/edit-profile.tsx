import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../../src/app/profile/edit/page.client";

describe("Edit Profile", () => {
  it("renders the page correctly", () => {
    render(
      <Page
        email="test@ada.ac.uk"
        profile_image={1}
        uuid="63bb2093-cc4c-4e1a-8cb8-4acfeabdddab"
      />
    );

    const heading = screen.getByText("Edit Profile");
    const profileImage = screen.getByAltText("profile_image");
    const email = screen.getByText(/Current email/);
    const saveButton = screen.getByText("Save");

    expect(heading.textContent).toBe("Edit Profile");
    expect(profileImage).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fresources%2Fprofile-images%2Fred-profile-icon.png&w=640&q=75"
    );
    expect(email.textContent).toBe("Current email: test@ada.ac.uk");
    expect(saveButton.textContent).toBe("Save");
  });
});
