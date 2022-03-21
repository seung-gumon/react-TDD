import React, { useContext, useEffect } from "react";
import { OrderContext } from "../../contexst/OrderContext";
import Type from "./Type";

function OrderPage() {
    const [orderDataes] = useContext(OrderContext);

    return (
        <div>
            <h1>Travel Products</h1>
            <div>
                <Type orderType={"products"} />
            </div>
            <div style={{ display: "flex", marginTop: 20 }}>
                <div style={{ width: "50%" }}>
                    <Type orderType={"options"} />
                </div>
                <div>
                    <h2>TotalPrice : {orderDataes.totals.total}</h2>
                    <br />
                    <button>주문</button>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;
