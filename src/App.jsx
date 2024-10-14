import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import './assets/styles/main.scss';

import Nav from "./components/Nav.jsx";
import Login from "./pages/Login.jsx";
import User from "./pages/User.jsx";
import Footer from "./components/Footer.jsx";

function App() {

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<User />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
