import React, { useContext, useState } from "react";
import { OrderContext } from "../../contexst/OrderContext";

const SummaryPage = () => {
    const [checked, setChecked] = useState(false);
    const [orderDataes] = useContext(OrderContext);

    return (
        <div>
            <h1>주문 확인</h1>
            <h2>여행 상품 : {orderDataes.totals.products}</h2>
            <form>
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
