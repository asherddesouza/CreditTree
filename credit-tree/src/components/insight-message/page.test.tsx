import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import InsightMessage from "./page";
import styles from "./page.module.css";

describe("InsightMessage Component", async () => {
  it("renders the component when fully populated", async () => {
    render(
      <InsightMessage
        title="Your credit limit has increased!"
        date="May 2025"
        numberChange={{
          from: "£300",
          to: "£800",
          sentiment: "positive",
        }}
        infoCard={{
          iconUrl: "/resources/credit-card.png",
          name: "Capital One",
          number: "0645 4534 4354 0543",
          type: "Credit Card",
        }}
        description="Keep it up!"
        birdColour="pink"
        setModalVisible={() => {}}
        modalVisible={true}
      />
    );

    expect(
      screen.getByText("Your credit limit has increased!")
    ).toBeInTheDocument();
    expect(screen.getByText("May 2025")).toBeInTheDocument();
    expect(screen.getByText("£300")).toBeInTheDocument();
    expect(screen.getByText("→")).toHaveClass(styles.greenArrow);
    expect(screen.getByText("£800")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByAltText("accountIcon").getAttribute("src")).toContain(
        "credit-card.png"
      );
    });

    await waitFor(() => {
      expect(screen.getByAltText("insightBird").getAttribute("src")).toContain(
        "pink.png"
      );
    });

    expect(screen.getByText("Capital One")).toBeInTheDocument();
    expect(screen.getByText("0645 4534 4354 0543")).toBeInTheDocument();
    expect(screen.getByText("Credit Card")).toBeInTheDocument();
    expect(screen.getByText("Keep it up!")).toBeInTheDocument();
  });

  it("renders the minimum required props", async () => {
    render(
      <InsightMessage
        title="Your credit limit has increased!"
        date="May 2025"
        description="Keep it up!"
        setModalVisible={() => {}}
        modalVisible={true}
      />
    );

    expect(
      screen.getByText("Your credit limit has increased!")
    ).toBeInTheDocument();
    expect(screen.getByText("May 2025")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByAltText("insightBird").getAttribute("src")).toContain(
        "black.png"
      );
    });
    expect(screen.getByText("Keep it up!")).toBeInTheDocument();
  });
});
