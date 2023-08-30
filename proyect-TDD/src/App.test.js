// We are going to build an application for the selection and search of streaming radio stations

import { fireEvent, render, screen } from "@testing-library/react";
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
// 2a - The application must have an input field with the placeholder => "write the name of the radio"
// 2b - The application must have a search button => text "search"
// 2c - When we click on the search button, the search function is executed only once

describe("2 - We should be able to search for radios by name", () => {
  test('The application must have an input field with the placeholder => "write the name of the radio"', () => {
    render(<App />);
    const placeholder = "write the name of the radio";
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
  });
  test('The aplication must have a search button => text "search"', () => {
    const buttontext = "search";
    render(<App />);
    const button = screen.getByText(buttontext);
    expect(button).toBeInTheDocument();
  });
  test("When we click on the search button, the search function is executed only once", () => {
    render(<App />);
    const functionMock = jest.fn();
    const buttontext = "search";
    const button = screen.getByText(buttontext);
    button.addEventListener("click", functionMock);
    fireEvent.click(button);
  });
});

// 3 - There must be a list of stations
// 3a - there must be a list of stations
// 3a - The list must initialize vacion
// 3b - When a valid search is made, the list must show at least one result
// 3c - When we make an invalid search (does not exist), the list should show a message "no stations have been found for this search"

describe("3 - There must be a list of stations", () => {
  test("there must be a list of stations", () => {
    render(<App />);
    const list = screen.getByLabelText("list-stations");
    expect(list).toBeInTheDocument();
  });
  test("The list must initialize emty", () => {
    render(<App />);
    const list = screen.getByLabelText("list-stations");
    const childrenCount = list.childElementCount;
    expect(childrenCount).toBe(0);
  });
  test("When a valid search is made, the list must show at least one result", () => {
    const placeholder = "write the name of the radio";
    const input = screen.getByPlaceholderText(placeholder);
    const buttontext = "search";
    const button = screen.getByText(buttontext);
    fireEvent.change(input, { target: { value: "Country" } });
    fireEvent.click(button);
    const list = screen.getByLabelText("list-stations");
    const childrenCount = list.childElementCount;
    expect(childrenCount).toBeGreaterThanOrEqual(1);
  });
});
