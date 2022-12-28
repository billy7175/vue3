import { render, screen } from "@testing-library/vue";
import MainNav from "@/components/MainNav.vue";

describe("MainNav.vue", () => {
  it("displays company name", () => {
    render(MainNav);
    // screen.debug();
    const name = screen.getByText("Bobo Careers");
    expect(name).toBeInTheDocument();
    // expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
