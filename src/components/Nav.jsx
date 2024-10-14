import {Link} from "react-router-dom";
import Logo from "../assets/img/argentBankLogo.png"

function Nav() {
    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>

            {/*
                TODO : Add connected user
                <div>
                    <a class="main-nav-item" href="./user.html">
                      <i class="fa fa-user-circle"></i>
                      Tony
                    </a>
                    <a class="main-nav-item" href="./index.html">
                      <i class="fa fa-sign-out"></i>
                      Sign Out
                    </a>
                </div>
            */}
        </nav>
    )
}

export default Nav;
