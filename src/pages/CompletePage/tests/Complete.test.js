import { render, screen } from "../../../test-util";
import userEvent from "@testing-library/user-event";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import Complete from "../Complete";

test("when fethcing complete Page , an Error", async () => {
    server.resetHandlers(
        rest.post("http://localhost:5001/order", (req, res, ctx) => {
            return res(ctx.status(500));
        })
    );
    render(<Complete />);

    const errorBanner = await screen.findByTestId("error-banner");
    expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});
