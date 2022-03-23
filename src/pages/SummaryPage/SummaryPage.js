import React, { useContext, useState } from "react";
import { OrderContext } from "../../contexst/OrderContext";

const SummaryPage = ({ setStep }) => {
    const [checked, setChecked] = useState(false);
    const [orderDataes] = useContext(OrderContext);

    const productsArray = Array.from(orderDataes.products);
    const productList = productsArray.map(([key, value]) => (
        <li key={key}>
            {value} {key}
        </li>
    ));

    const hasOptions = orderDataes.options.size > 0;
    let optionsRender = null;
    if (hasOptions) {
        const optionsArray = Array.from(orderDataes.options.keys());
        const optionList = optionsArray.map((key) => <li key={key}>{key}</li>);
        optionsRender = (
            <>
                <h2>옵션 : {orderDataes.totals.options}</h2>
                <ul>{optionList}</ul>
            </>
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setStep(2);
    };

    return (
        <div>
            <h1>주문 확인</h1>
            <h2>여행 상품 : {orderDataes.totals.products}</h2>
            <ul>{productList}</ul>
            {optionsRender}
            <form onSubmit={handleSubmit}>
                <input type={"checkbox"} checked={checked} id="confirm-checkbox" onChange={(e) => setChecked(e.target.checked)} />
                <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요 ?</label>
                <br />
                <button disabled={!checked} type="submit">
                    주문 확인
                </button>
            </form>
        </div>
    );
};

export default SummaryPage;
