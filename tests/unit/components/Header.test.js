import { render, screen } from "@testing-library/vue";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("displays header name", () => {
    render(Header);
    const name = screen.getByText("Logo");
    expect(name).toBeInTheDocument();
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map(
      (item) => item.textContent
    );
    expect(navigationMenuTexts).toEqual([
      "Home",
      "About",
      "Contact",
      "Services",
    ]);
  });
});
