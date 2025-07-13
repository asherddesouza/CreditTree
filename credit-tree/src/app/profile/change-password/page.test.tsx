import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./page.client";

describe("Edit Profile", () => {
  it("renders the page correctly", () => {
    render(<Page />);

    const heading = screen.getByText("Change Password");
    const tooltip = screen.getByText(/Your new password must be/);
    const submitButton = screen.getByText("Submit");

    expect(heading.textContent).toBe("Change Password");
    expect(tooltip.textContent).toBe(
      "Your new password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
    );
    expect(submitButton.textContent).toBe("Submit");
  });
});
