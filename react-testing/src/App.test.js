import { render, fireEvent } from "@testing-library/react";
import NewInputNote from "./components/NewInputNote";
import App from "./App";

describe("REACT - Testing the components", () => {
  test("El listado se renderiza correctamente", () => {
    const view = render(<NewInputNote />);
    expect(view).toBeDefined();
  });
  test("listing renders a listing correctly", () => {
    const notes = ["put down the garbage"];
    const view = render(<NewInputNote notes={notes} />);
    expect(view).toBeDefined();
  });
  // test("the listing renders a only one note", () => {
  //   const notes = ["put down the garbage", "buy a eggs"];
  //   const view = render(<NewInputNote notes={notes} />);
  //   const div = view.getByLabelText("list");
  //   expect(div.childElementCount).toBe(2);
  // });
});

describe("REACT - we do integration testing", () => {
  test("Rendering the app", () => {
    const view = render(<App />);
    expect(view).toBeDefined();
  });
  test("Rendering the input", () => {
    const placeholderteText = "Intriduce in new note";
    const view = render(<App />);
    const input = view.getByPlaceholderText(placeholderText);
    expect(input).toBeDefined();
  });
  test("when make click in the buton add, the event will be triggered", () => {
    const functionMock = jest.fn();
    const view = render(<NewInputNote addNewNote={functionMock} />);
    const button = view.screen.getByText("add");
    fireEvent.click(button);
    expect(functionMock).toHaveBeenCalledTimes(2);
  });
  test("Add new note", () => {
    const placeholderteText = "Introduce a new note";
    const utils = render(<App />);
    const input = utils.screen.getByPlaceholderText(placeholderteText);
    const button = utils.screen.getByText("add");
    const div = utils.screen.getAllByLabelText("list-note");
    const sonInitial = div.childElementCount;
    fireEvent.change(input, { target: { value: "put gas" } });
    fireEvent.click(button);
    const sonFinal = div.childElementCount;
    expect(sonFinal).toBeGreaterThan(sonInitial);
    expect(sonInitial).toBeLessThan(sonFinal);
    expect(sonInitial).not.toBe(sonFinal);
  });
});
