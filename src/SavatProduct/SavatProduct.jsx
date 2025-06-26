import { useState, useEffect } from "react";
import { getCart } from "../utils/LocalGetSet";
import { sendToTelegram } from "../utils/TelegramBot";
import './SavadProduct.css';
import { HiXMark } from "react-icons/hi2";
import { useOrqagaQaytish } from "../utils/orqagaQaytish";

const SavatProduct = () => {
    const [cartItems, setCartItems] = useState([]);

    // Komponent yuklanganda localStorage'dan ma'lumotlarni olish
    useEffect(() => {
        const cart = getCart();
        setCartItems(cart || []);
    }, []);

    // Mahsulot sonini oshirish
    const increaseQty = (id) => {
        const updatedItems = cartItems.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        );
        setCartItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));
    };

    // Mahsulot sonini kamaytirish
    const decreaseQty = (id) => {
        const updatedItems = cartItems
            .map((item) =>
                item.id === id ? { ...item, count: item.count - 1 } : item
            )
            .filter((item) => item.count > 0);

        setCartItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));
    };

    // Jami summa hisoblash
    const totalSum = cartItems.reduce(
        (sum, item) => sum + item.narxi * item.count,
        0
    );

    // Buyurtma berish
    const handleOrder = () => {
        if (cartItems.length === 0) {
            alert("Savat bo'sh!");
            return;
        }

        sendToTelegram(); // Telegramga yuborish

        // Savatni tozalash
        setCartItems([]);
        localStorage.removeItem("cart");
    };

    // orqaga qaytish
    const useOrqagaQaytish_2=useOrqagaQaytish();

    return (
        <div className="cart-container">
            <div className="qaytish">
                <HiXMark onClick={()=>{useOrqagaQaytish_2()}}/>
            </div>
            <h2>Savat</h2>
            {cartItems.length === 0 ? (
                <p className="savat_bosh">Savat bo'sh</p>
            ) : (
                cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img
                            src={item.image || item.rasm || "/default.jpg"}
                            alt={item.title || item.nomi}
                            className="cart-img"
                            style={{ width: 80, height: 80, objectFit: "cover" }}
                        />
                        <div className="cart-info">
                            <p className="cart-title">{item.nomi}</p>
                            <p className="cart-desc">{item.tavsifi}</p>
                            <p className="cart-price">
                                {item.narxi.toLocaleString()} so'm
                            </p>
                        </div>
                        <div className="cart_rigth">
                            <div className="cart-controls">
                                <button onClick={() => decreaseQty(item.id)}>-</button>
                                <span>{item.count}</span>
                                <button onClick={() => increaseQty(item.id)}>+</button>
                            </div>
                            <div className="cart-sum">
                                Jami: {(item.narxi * item.count).toLocaleString()} so'm
                            </div>
                        </div>
                    </div>
                ))
            )}

            {cartItems.length > 0 && (
                <div className="cart-footer">
                    <div className="cart-total">
                        Umumiy summa: <b>{totalSum.toLocaleString()} so'm</b>
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
