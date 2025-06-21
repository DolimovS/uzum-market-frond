import { productElektronika } from "../../DataUzum/DataUzum"
import {Link} from 'react-router-dom'
import "./Elektronika.css"
// console.log(productElektronika);


const Elektronika = () => {
    return (
        <div>
            <h1 className="product_catogoriya">Elektronika</h1>
            <div className="product_cards">
                {productElektronika.map((item) =>
                    <Link to={"/oneProduct/"+item.id} 
                    key={item.id}
                    className="product_card">
                        <div className="pruduct_img">
                            <img src={item.rasm} alt="image" />
                        </div>
                        <p className="product_narxi">{item.narxi}</p>
                        <p className="product_eski_narxi">{item.eskiNarx?item.eskiNarx:"Arzon narx"}</p>
                        <span className="pruduct_bolib_tolash">{item.oylikTolov} som/oyiga</span>
                        <p className="product_nomi">{item.nomi.length <= 66 ? item.nomi : item.nomi.slice(0, 66) + "..."}</p>
                        <div className="product_reyting">
                            <span>♥ {item.reyting}</span>
                            <span>({item.sharhlarSoni} sharhlar)</span>
                        </div>
                        <button>Karzinkaga qo'shish</button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Elektronika
