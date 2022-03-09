import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorBanner from "../../components/ErrorBanner";
import Products from "./Products";

function Type({ orderType }) {
    const [item, setItems] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        loadItems(orderType);
    }, [orderType]);

    const loadItems = async (orderType) => {
        try {
            const response = await axios.get(`http://localhost:5000/${orderType}`);
            setItems(response.data);
        } catch (error) {
            setError(true);
        }
    };

    if (error) {
        return <ErrorBanner message="에러가 발생했습니다." />;
    }

    const ItemComponents = orderType === "products" ? Products : null;

    const optionItems = item.map((item) => {
        return <ItemComponents key={item.name} name={item.name} path={item.imagePath} />;
    });

    return <div>{optionItems}</div>;
}

export default Type;
