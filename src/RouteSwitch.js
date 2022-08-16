import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App";
import Store from "./Components/Store"
import Nav from "./Components/Nav";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/store' element={<Store />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch