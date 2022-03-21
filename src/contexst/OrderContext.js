import { createContext, useEffect, useMemo, useState } from "react";

export const OrderContext = createContext();

const priceItem = {
    products: 1000,
    options: 500,
};

const calculateSubTotal = (orderType, orderCounts) => {
    let optionsCount = 0;
    for (const count of orderCounts[orderType].values()) {
        optionsCount += count;
    }

    return optionsCount * priceItem[orderType];
};

export function OrderContextProvider(props) {
    const [orderCounts, setOrderCounts] = useState({
        products: new Map(),
        options: new Map(),
    });

    const [totals, setTotals] = useState({
        products: 0,
        options: 0,
        total: 0,
    });

    useEffect(() => {
        const productsTotal = calculateSubTotal("products", orderCounts);
        const optionsTotal = calculateSubTotal("options", orderCounts);
        const total = productsTotal + optionsTotal;
        setTotals({
            products: productsTotal,
            optionsTotal: optionsTotal,
            total,
        });
    }, [orderCounts]);

    const value = useMemo(() => {
        function updateItemCount(itemName, newItemCount, orderType) {
            const newOrderCounts = { ...orderCounts };
            const orderCountsMap = orderCounts[orderType];
            orderCountsMap.set(itemName, parseInt(newItemCount));
            setOrderCounts(newOrderCounts);
        }

        return [{ ...orderCounts, totals }, updateItemCount];
    }, [orderCounts, totals]);

    return <OrderContext.Provider value={value} {...props} />;
}
