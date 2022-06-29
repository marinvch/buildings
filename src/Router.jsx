import { BrowserRouter, Route, } from "react-router-dom";
import { Main } from "./components/layout/Main";
import { SecondPage } from "./pages/secondPage";


export const Router = (children) => {
    return <BrowserRouter>
        <Route path="/" element={Main} />
        <Route path="/secondPage" element={SecondPage} />
    </BrowserRouter>
}