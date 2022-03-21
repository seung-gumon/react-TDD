import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ErrorBanner from "../../components/ErrorBanner";
import Products from "./Products";
import Options from "./Options";
import { OrderContext } from "../../contexst/OrderContext";

function Type({ orderType }) {
    const [item, setItems] = useState([]);
    const [error, setError] = useState(false);

    const [orderDataes, updateItemCount] = useContext(OrderContext);

    useEffect(() => {
        loadItems(orderType);
    }, [orderType]);

    const loadItems = async (orderType) => {
        try {
            const response = await axios.get(`http://localhost:5001/${orderType}`);
            setItems(response.data);
        } catch (error) {
            setError(true);
        }
    };

    if (error) {
        return <ErrorBanner message="에러가 발생했습니다." />;
    }

    const ItemComponents = orderType === "products" ? Products : Options;

    const optionItems = item.map((item) => (
        <ItemComponents
            key={item.name}
            name={item.name}
            path={item.imagePath}
            updateItemCount={(itenName, newItemCount) => updateItemCount(itenName, newItemCount, orderType)}
        />
    ));

    let orderTypeKorean = orderType === "products" ? "상품" : "옵션";

    return (
        <>
            <h2>주문 종류</h2>
            <p>하나의 가격</p>
            <p>
                {orderTypeKorean} 총 가격 : {orderDataes.totals[orderType]}
            </p>
            <div style={{ display: "flex", flexDirection: orderType === "options" && "column" }}>{optionItems}</div>
        </>
    );
}

export default Type;
