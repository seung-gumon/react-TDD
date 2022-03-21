import { render, screen } from "../../../test-util";
import userEvent from "@testing-library/user-event";
import Type from "../Type";
import OrderPage from "../OrderPage";

test("update products total when products change", async () => {
    render(<Type orderType={"products"} />);

    const productsTotal = screen.getByText("상품 총 가격", { exact: false });
    expect(productsTotal).toHaveTextContent("0");

    // 아메리카 여행 상품 한개 올리기
    const americaInput = await screen.findByRole("spinbutton", {
        name: "America",
    });

    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");
    expect(productsTotal).toHaveTextContent("1000");
});

test("update option's total when options change", async () => {
    render(<Type orderType={"options"} />);

    const optionsTotal = screen.getByText("옵션 총 가격", { exact: false });
    expect(optionsTotal).toHaveTextContent("0");

    const insuraceCheckBox = await screen.findByRole("checkbox", {
        name: "Insurance",
    });
    userEvent.click(insuraceCheckBox);
    expect(optionsTotal).toHaveTextContent("500");

    const dinnerCheckBox = await screen.findByRole("checkbox", {
        name: "Dinner",
    });

    userEvent.click(dinnerCheckBox);
    expect(optionsTotal).toHaveTextContent("1000");

    userEvent.click(dinnerCheckBox);
    expect(optionsTotal).toHaveTextContent("500");
});

describe("total price of Goods and Options", () => {
    test("total price starts with 0 and Updating total Price when adding one product", async () => {
        render(<OrderPage />);

        const total = screen.getByText("TotalPrice", { exact: false });
        expect(total).toHaveTextContent("0");

        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });

        userEvent.type(americaInput, "1");

        expect(total).toHaveTextContent("1000");
    });

    test("Updating total Price when adding one option", async () => {
        render(<OrderPage />);
        const total = screen.getByText("TotalPrice :", { exact: false });

        const insuraceCheckBox = await screen.findByRole("checkbox", {
            name: "Insurance",
        });

        userEvent.click(insuraceCheckBox);
        expect(total).toHaveTextContent("500");
    });

    test("Updating total Price when removing option and product", async () => {
        render(<OrderPage />);
        const total = screen.getByText("TotalPrice :", { exact: false });

        const insuraceCheckBox = await screen.findByRole("checkbox", {
            name: "Insurance",
        });

        userEvent.click(insuraceCheckBox);

        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });

        userEvent.clear(americaInput);
        userEvent.type(americaInput, "3");

        userEvent.clear(americaInput);
        userEvent.type(americaInput, "1");

        expect(total).toHaveTextContent("1500");
    });
});
