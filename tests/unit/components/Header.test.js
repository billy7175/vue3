import { render, screen } from "@testing-library/vue";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("displays header name", () => {
    render(Header);
    const name = screen.getByText("Logo");
    expect(name).toBeInTheDocument();
  });
});
