import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav className="nav">
                <div className="nav_left">
                    <h1><NavLink to="/home">Uzum Markat</NavLink></h1>
                    <div className="nav_icons">
                        <NavLink to="/favorites" className="nav_icon">
                            <span role="img" aria-label="favorites">💖</span>
                            <span>Saralanganlar</span>
                        </NavLink>
                        <NavLink to="/savat" className="nav_icon">
                            <span role="img" aria-label="cart">🛒</span>
                            <span>Savat</span>
                        </NavLink>
                    </div>
                </div>
                <div className="nav_catogoriya">
                    <li><NavLink to="/elektronika">Elektronika</NavLink></li>
                    <li><NavLink to="/krasovka">Krossovka</NavLink></li>
                    <li><NavLink to="/zargarlikBuyumlari">Zargarlik Buyumlari</NavLink></li>
                    <li><NavLink to="/uyRozgorBuyumlari">Uy Rozgor Buyumlari</NavLink></li>
                </div>
            </nav>
            
        </div>
    )
}

export default Header
