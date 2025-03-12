import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("render the header", () => {
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
  });

  it("goes to about page", () => {
    const link = screen.getByText("Home");
    expect(link.closest("a")).toHaveAttribute("href", "/");
  });

  it("goes to the about page", () => {
    const aboutLink = screen.getByText("About");
    expect(aboutLink.closest("a")).toHaveAttribute("href", "/about");
  });
});
