import React from "react";
import { render, screen } from "@testing-library/react";
import { PrimaryNavItem } from "./PrimaryNavItem";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
describe("PrimaryNavItem", () => {
  it("renders the link text correctly", () => {
    const linkText = "Home";
    render(
      <MemoryRouter>
        <PrimaryNavItem text={linkText} />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(linkText);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders correct text style", () => {
    const linkText = "Home";
    const style = { color: "red" };
    render(
      <MemoryRouter>
        <PrimaryNavItem textStyle={{ color: "red" }} text={linkText} />
      </MemoryRouter>
    );
    const component = screen.getByText(linkText);
    expect(component).toHaveStyle(style);
  });

  it("sets 'is-active' class when isActive prop is true", () => {
    render(
      <MemoryRouter>
        <PrimaryNavItem text="About" isActive={true} />
      </MemoryRouter>
    );
    const navItemElement = screen.getByText("About").closest("li");
    expect(navItemElement).toHaveClass("is-active");
  });

  it("renders nested children when isActive prop is true", () => {
    const nestedContent = "Nested Content";
    render(
      <MemoryRouter>
        <PrimaryNavItem text="Menu" isActive>
          {nestedContent}
        </PrimaryNavItem>
      </MemoryRouter>
    );
    const nestedContentElement = screen.getByText(nestedContent);
    expect(nestedContentElement).toBeInTheDocument();
  });

  it("renders the correct href attribute", async () => {
    const href = "products";
    const text = "Products";
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <PrimaryNavItem text={text} href={href} />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(text).parentElement;
    expect(linkElement).toHaveAttribute("href", "/" + href);
  });
});
