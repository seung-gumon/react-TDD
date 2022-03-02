import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
    render(<App />);
    //screen object 를 이용해서 원하는 엘레멘트에 접근(접근할 때 ID로)
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
    render(<App />);
    const minusButtonElement = screen.getByTestId("minus-button");
    expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
    render(<App />);
    const plusButtonElement = screen.getByTestId("plus-button");
    expect(plusButtonElement).toHaveTextContent("+");
});

test("When the + button is pressed, the counter changes to 1", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("plus-button");
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(1);
});

test("When the - button is pressed, the counter changes to -1", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("minus-button");
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(-1);
});

test("on/off button has blue color", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("on/off-button");
    expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("prevent the -,+ button from being pressed when the on/off button is cliecked", () => {
    render(<App />);
    const onOffButtonElement = screen.getByTestId("on/off-button");
    fireEvent.click(onOffButtonElement);
    const plusButton = screen.getByTestId("plus-button");
    expect(plusButton).toBeDisabled();
});
