import "./App.css";
import OrderPage from "./pages/OrderPage/OrderPage";
import { OrderContextProvider } from "./contexst/OrderContext";

function App() {
    return (
        <div>
            <OrderContextProvider>
                <OrderPage />
            </OrderContextProvider>
        </div>
    );
}

export default App;
