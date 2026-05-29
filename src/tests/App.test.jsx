import { render, screen, act, within } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../App";

describe("Book Store", () => {
  test("Shows Book store title", () => {
    render(<App />);
    expect(screen.getByText("Book Store")).toBeInTheDocument();
  });
  test("Shows Book list", () => {
    render(<App />);
    expect(screen.getByText("Clean Code")).toBeInTheDocument();
  });
  test("Showing the Add book to basket button for all books", () => {
    render(<App />);
    const buttons = screen.getAllByText("Add to Basket");
    expect(buttons.length).toBe(5);
    expect(buttons[0]).toBeInTheDocument();
  });
  test("Showing the empty basket initially", () => {
    render(<App />);
    expect(screen.getByText("No books added yet")).toBeInTheDocument();
  });
  test("Showing total price as zero initially", () => {
    render(<App />);
    expect(screen.getByText("Total: 0")).toBeInTheDocument();
  });
  test("When add book to basket should show books name in basket", async () => {
    render(<App />);
    const buttons = screen.getAllByText("Add to Basket");
    act(() => {
      buttons[0].click();
    });

    act(() => {
      buttons[1].click();
    });

    const ul = await screen.findByRole("list");
    const items = within(ul).getAllByRole("listitem");
    expect(items).toHaveLength(2);
  });
});
