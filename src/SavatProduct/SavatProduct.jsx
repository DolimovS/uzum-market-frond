import { useState } from "react";
import { getCart } from "../utils/LocalGetSet";
import './SavadProduct.css'

const SavatProduct = () => {
    const [cartItems, setCartItems] = useState(getCart() || []);

    // Mahsulot sonini oshirish
    const increaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    // Mahsulot sonini kamaytirish
const decreaseQty = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = cart
        .map((item) =>
            item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); // UI ni yangilaydi
};

    // Jami summa hisoblash
    const totalSum = cartItems.reduce(
        (sum, item) => sum + (item.narxi * item.count),
        0
    );

    // Buyurtma berish
    const handleOrder = () => {
        alert("Buyurtma berildi!");
        // Bu yerda buyurtma logikasini yozish mumkin
    };

    return (
        <div className="cart-container">
            <h2>Savat</h2>
            {cartItems.length === 0 ? (
                <p className="savat_bosh">Savat bo'sh</p>
            ) : (
                cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img
                            src={item.image || item.rasm}
                            alt={item.title}
                            className="cart-img"
                            style={{ width: 80, height: 80, objectFit: "cover" }}
                        />
                        <div className="cart-info">
                            <p className="cart-title">{item.nomi}</p>
                            <p className="cart-desc">{item.tavsifi}</p>
                            <p className="cart-price">{item.narxi} so'm</p>
                        </div>
                        <div className="cart-controls">
                            <button onClick={() => decreaseQty(item.id)}>-</button>
                            <span>{item.count}</span>
                            <button onClick={() => increaseQty(item.id)}>+</button>
                        </div>
                        <div className="cart-sum">
                            Jami: {item.narxi * item.count} so'm
                        </div>
                    </div>
                ))
            )}
            {cartItems.length > 0 && (
                <div className="cart-footer">
                    <div className="cart-total">
                        Umumiy summa: <b>{totalSum} so'm</b>
                    </div>
                    <button className="order-btn" onClick={handleOrder}>
                        Buyurtma berish
                    </button>
                </div>
            )}
        </div>
    );
};

export default SavatProduct;