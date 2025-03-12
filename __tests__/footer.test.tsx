import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders a footer", () => {
    const footer = screen.getByRole("contentinfo");

    expect(footer).toBeInTheDocument();
  });

  it("constains a link that opens in a new tab", () => {
    const link = screen.getByTestId("github-link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("href", "https://github.com/raff29");
  });

  it("constains an email link", () => {
    const emailLink = screen.getByTestId("email-link");

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:raphael.pinto1@outlook.com"
    );
  });
});
