import "./NavBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../CarWidget/CartWidget";

function NavBar(){
    retun (
        <nav className="navBar">
            <div>
                <img className="logo" src="{logo}" alt="logo de la marca" />
            </div>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="#">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="#">cafe</a>
                </li>
                <li className="navbar-item">
                    <a href="#">nosotros</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar