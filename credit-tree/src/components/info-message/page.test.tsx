import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import InfoMessage from "./page";
import styles from "./page.module.css";

describe("InfoMessage Component", async () => {
  it("renders the component when fully populated", async () => {
    render(<InfoMessage setModalVisible={() => {}} modalVisible={true} />);

    expect(screen.getByText("CreditTree")).toBeInTheDocument();
    expect(screen.getByText("Welcome to CreditTree")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Talk to the birds to gain Insights on how you can improve your Credit Health!"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText("Green birds represent your credit score increasing.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Red birds represent your credit score decreasing.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Yellow birds represent hard searches on your report.")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Purple birds represent court orders & insolvencies on your report."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("Black birds represent your report's payment history.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Pink birds represent fraud warnings on your report.")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Blue birds represent electoral roll changes and notices on your credit report."
      )
    ).toBeInTheDocument();

    expect(screen.getByAltText("green bird")).toBeInTheDocument();
    expect(screen.getByAltText("red bird")).toBeInTheDocument();
    expect(screen.getByAltText("yellow bird")).toBeInTheDocument();
    expect(screen.getByAltText("purple bird")).toBeInTheDocument();
    expect(screen.getByAltText("black bird")).toBeInTheDocument();
    expect(screen.getByAltText("pink bird")).toBeInTheDocument();
    expect(screen.getByAltText("blue bird")).toBeInTheDocument();
  });
});
