import { describe, it, expect } from "vitest";
import { evenOrOdd, multiply } from "@/example.js";
describe("basic math", () => {
  it("adds two numbers", () => {
    expect(evenOrOdd(1 + 1)).toBe("Even");
  });

  it("adds two numbers", () => {
    expect(evenOrOdd(1 + 2)).toBe("Odd");
  });
});

describe("multiply", () => {
  it("multiplies two numbers together", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
