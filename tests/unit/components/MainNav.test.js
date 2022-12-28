import { render, screen } from "@testing-library/vue";
import MainNav from "@/components/MainNav.vue";

describe("MainNav.vue", () => {
  it("displays company name", () => {
    render(MainNav);
    // screen.debug();
    // const name = screen.getByText("Bobo Careers");
    // expect(name).toBeInTheDocument();
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map(
      (item) => item.textContent
    );
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
    // expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
