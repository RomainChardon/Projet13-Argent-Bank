import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import './assets/styles/main.scss';

import Nav from "./components/Nav.jsx";
import Login from "./pages/Login.jsx";
import Profil from "./pages/Profil.jsx";
import Footer from "./components/Footer.jsx";
import {PrivateProfil} from "./privateRoutes/PrivateProfil.jsx";
import {PrivateLogin} from "./privateRoutes/PrivateLogin.jsx";



const App = () => {

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<PrivateLogin Component={Login} />} />
                <Route path="/profil" element={<PrivateProfil Component={Profil} />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App
