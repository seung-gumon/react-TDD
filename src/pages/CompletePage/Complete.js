import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { OrderContext } from "../../contexst/OrderContext";
import ErrorBanner from "../../components/ErrorBanner";

function Complete({ setStep }) {
    const [orderDatas, , resetOrderDatas] = useContext(OrderContext);
    const [orderHistory, setOrderHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const orderCompleted = async (orderDatas) => {
        try {
            let res = await axios.post("http://localhost:5001/order", orderDatas);
            setOrderHistory(res.data);
            return setLoading(false);
        } catch (e) {
            setError(true);
        }
    };

    const handleClick = () => {
        setStep(0);
        return resetOrderDatas();
    };

    useEffect(() => {
        orderCompleted(orderDatas);
    }, []);

    const orderTable = orderHistory.map((item) => (
        <tr key={item.orderNumber}>
            <td>{item.orderNumber}</td>
            <td>{item.price}</td>
        </tr>
    ));

    if (error) {
        return <ErrorBanner message="에러가 발생했습니다." />;
    }

    if (loading) {
        return <div>loading</div>;
    } else {
        return (
            <div style={{ textAlign: "center" }}>
                <h2>주문이 성공했습니다.</h2>
                <h3>지금까지 모든 주문</h3>
                <table style={{ margin: "auto" }}>
                    <tbody>
                        <tr>
                            <th>주문 번호</th>
                            <th>주문 가격</th>
                        </tr>
                        {orderTable}
                    </tbody>
                </table>
                <button onClick={handleClick}>첫페이지로</button>
            </div>
        );
    }
}

export default Complete;
