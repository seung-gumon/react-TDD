import React, { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { orderContext } from "../../contexst/OrderContext";
import ErrorBanner from "../../components/ErrorBanner";

function Complete({ setStep }) {
    const [orderDatas] = useContext(orderContext);
    const [orderHistory, setOrderHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const orderCompleted = async (orderDatas) => {
        try {
            let res = await axios.post("http://localhost:5000/order", orderDatas);
            setOrderHistory(res.data);
            return setLoading(false);
        } catch (e) {
            setError(true);
        }
    };

    useEffect(() => {
        orderCompleted(orderDatas);
    }, []);

    const orderTable = useMemo(
        orderHistory.map((item) => (
            <tr key={item.orderNumber}>
                <td>{item.orderNumber}</td>
                <td>{item.price}</td>
            </tr>
        )),
        [orderHistory]
    );

    if (error) {
        return <ErrorBanner message="에러가 발생했습니다." />;
    }

    if (loading) {
        return <div>loading</div>;
    } else {
        return (
            <div style={{ textAlign: "center" }}>
                <h2>주문이 성공했습니다.</h2>
                <h3>주문이 성공했습니다.</h3>
                <table style={{ margin: "auto" }}>
                    <tbody>
                        <tr>
                            <th>주문 번호</th>
                            <th>주문 가격</th>
                        </tr>
                        {orderTable}
                    </tbody>
                </table>
                <button onClick={() => setStep(0)}></button>
            </div>
        );
    }
}

export default Complete;
