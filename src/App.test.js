import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("From order to order completation", async () => {
    render(<App />);

    const americaInput = await screen.findByRole("spinbutton", {
        name: "America",
    });

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "2");

    const englandInput = await screen.findByRole("spinbutton", {
        name: "England",
    });

    userEvent.clear(englandInput);
    userEvent.type(englandInput, "3");

    const insuraceCheckBox = await screen.findByRole("checkbox", {
        name: "Insurance",
    });

    userEvent.click(insuraceCheckBox);

    const orderButton = screen.getByRole("button", {
        name: "주문하기",
    });

    userEvent.click(orderButton);

    // 주문확인 페이지

    const summaryPage = screen.getByRole("heading", {
        name: "주문 확인",
    });
    expect(summaryPage).toBeInTheDocument();

    const productsHeading = screen.getByRole("heading", {
        name: "여행 상품: 5000",
    });
    expect(productsHeading).toBeInTheDocument();

    expect(screen.getByText("2 America")).toBeInTheDocument();
    expect(screen.getByText("3 England")).toBeInTheDocument();
    expect(screen.getByText("Insurance")).toBeInTheDocument();

    const confirmCheckBox = screen.getByRole("checkbox", {
        name: "주문하려는 것을 확인하셨나요?",
    });
    userEvent.click(confirmCheckBox);

    const confirmOrderButton = screen.getByRole("button", {
        name: "주문 확인",
    });
    userEvent.click(confirmOrderButton);
});
