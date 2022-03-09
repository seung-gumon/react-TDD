import React from "react";

function ErrorBanner({ message = "에러입니다" }) {
    return (
        <div data-testid="error-banner" style={{ backgroundColor: "red", color: "white" }}>
            {message}
        </div>
    );
}

export default ErrorBanner;
