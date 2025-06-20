import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <div>
             <nav className="nav">
                <div className="nav_left">
                        <h1><NavLink to="/">Uzum Markat</NavLink></h1>
                        <div className="nav_icons">
                                <NavLink to="/favorites" className="nav_icon">
                                    <span role="img" aria-label="favorites">💖</span>
                                    <span>Saralanganlar</span>
                                </NavLink>
                                <NavLink to="/cart" className="nav_icon">
                                    <span role="img" aria-label="cart">🛒</span>
                                    <span>Savat</span>
                                </NavLink>
                        </div>
                </div>
                <div className="nav_catogoriya">
                    <li><NavLink to="/">Elektronika</NavLink></li>
                    <li><NavLink to="/">Krossovka</NavLink></li>
                    <li><NavLink to="/">Zargarlik Buyumlari</NavLink></li>
                    <li><NavLink to="/">Uy Rozgor Buyumlari</NavLink></li>
                </div>
             </nav>
        </div>
    )
}

export default Header
