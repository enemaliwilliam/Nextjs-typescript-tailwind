import React from "react";
import Button from "../Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Button", () => {
  it("renders component", () => {
    render(<Button label="Sample" />);
    expect(screen.getByRole("button")).toHaveTextContent("Sample");
  });
});
