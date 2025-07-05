import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../../src/app/profile/delete-account/page.client";

describe("Delete Account", () => {
  it("renders the page correctly", () => {
    render(<Page />);

    const heading = screen.getByText("Delete Account");
    const infoTooltip = screen.getByText(/Are you sure/);
    const confirmTooltip = screen.getByText(/Type CONFIRM/);
    const deleteButton = screen.getByText("Delete Account");

    expect(heading.textContent).toBe("Delete Account");
    expect(infoTooltip.textContent).toBe(
      "Are you sure you want to delete your account? This is a permanent action."
    );
    expect(confirmTooltip.textContent).toBe(
      "Type CONFIRM into the field below if you're sure."
    );
    expect(deleteButton.textContent).toBe("Delete Account");
  });
});
