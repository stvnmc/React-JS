// We are going to build an application for the selection and search of streaming radio stations

import { render, screen } from "@testing-library/react";
import App from "./App";

// 0 - The app should render correctly
describe("0- The app should render correctly", () => {
  test("0 - the aplicaion should render correctly", () => {
    const view = render(<App />);
    expect(view).toBeDefined();
  });
});

// 1 - the application name should be displayed somewhere => "RadioMusic"

describe("0 - The application name should be displayed somewhere => RadioMusic", () => {
  test("0 - the application name should be displayed somewhere => RadioMusic", () => {
    const nombre = "RadioMusic";
    render(<App />);
    const el = screen.getByText(nombre);
    expect(el).toBeInTheDocument();
  });
});

// 2 - We should be able to search for radios by name,
// 2a - The application must have an input field with the placeholder => ""
// 2b - The application must have a search button => text "search"
// 2c - When we click on the search button, the search function is executed only once

describe("We should be able to search for radios by name", ());

// 3 - There must be a list of stations
// 3a - The list must initialize vacion
// 3b - When a valid search is made, the list must show at least one result
// 3c - When we make an invalid search (does not exist), the list should show a message "no stations have been found for this search"
