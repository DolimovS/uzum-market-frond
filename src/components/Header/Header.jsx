import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav className="nav">
                <div className="nav_left">
                    <h1><NavLink to="/home">Uzum Markat</NavLink></h1>
                    <div className="nav_icons">
                        <NavLink to="/favorites" className="nav_icon">
                            <GiSelfLove />
                            {/* <p role="img" aria-label="favorites">💖</p> */}
                            <span className="nav_icon_text" >Saralanganlar</span>
                        </NavLink>
                        <NavLink to="/savat" className="nav_icon">
                            <FaCartShopping />
                            {/* <p role="img" aria-label="cart">🛒</p> */}
                            <span className="nav_icon_text">Savat</span>
                        </NavLink>
                        
                    </div>
                </div>
                <ul className="nav_catogoriya">
                        <li><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/elektronika">Elektronika</NavLink></li>
                        <li><NavLink to="/krasovka">Krossovka</NavLink></li>
                        <li><NavLink to="/zargarlikBuyumlari">Zargarlik Buyumlari</NavLink></li>
                        <li><NavLink to="/uyRozgorBuyumlari">Uy Rozgor Buyumlari</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
