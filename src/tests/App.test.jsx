import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../App";

describe("Book Store", () => {
  test("Shows Book store title", () => {
    render(<App />);
    expect(screen.getByText("Book Store")).toBeInTheDocument();
  });
});
