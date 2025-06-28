import "../Elektronika/Elektronika.css"
import { Link } from "react-router-dom"
import { OshxonaJihozlariBir } from "../../DataUzum/DataUzum"
import "../Elektronika/Elektronika.css"

const OshxonaJihozlari = () => {
    return (
        <div>
            <h1 className="product_catogoriya" style={{ textAlign: "left" }}>Oshxona Jihozlari</h1>
            <div className="product_cards uzum_cards">
                {OshxonaJihozlariBir.map((item) =>
                    <div
                        className="product_card"
                        key={item.id}>
                        <Link to={"/oneProduct/" + item.id}>
                            <div className="pruduct_img">
                                <img src={item.rasm} alt="image" />
                            </div>
                        </Link>
                        <p className="product_narxi">{item.narxi}</p>
                        <p className="product_eski_narxi">{item.eskiNarx ? item.eskiNarx : "Arzon narx"}</p>
                        <span className="pruduct_bolib_tolash">{Math.ceil(item.narxi / 12)} som/oyiga</span>
                        <p className="product_nomi">{item.nomi}</p>
                        <div className="product_reyting">
                            <span>♥ {item.reyting}</span>
                            <span>({item.sharhlarSoni} sharhlar)</span>
                        </div>
                        <button onClick={() => { addToCart(item) }}>Karzinkaga qo'shish</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OshxonaJihozlari


