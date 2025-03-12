import Loading from "@/components/Loading";
import { render, screen } from "@testing-library/react";

describe("loading component", () => {
  beforeEach(() => {
    render(<Loading />);
  });
  it("displays the component correctly", () => {
    expect(screen.getByText("Loading collision data...")).toBeInTheDocument();
  });
  it('catches the correct arial-label', () => {
    const spinner = screen.getByRole('progressbar');
    expect(spinner).toHaveAttribute('aria-label', "Loading collision data...")
    expect(spinner).toHaveAccessibleName( "Loading collision data...")

  })
});
