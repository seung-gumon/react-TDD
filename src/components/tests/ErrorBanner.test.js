import { render, screen } from "@testing-library/react";
import ErrorBanner from "../ErrorBanner";

test("props 를 잘 Display 하는지 ?", () => {
    render(<ErrorBanner message="에러입니다" />);

    expect(screen.getByText("에러입니다")).toBeInTheDocument();
});
