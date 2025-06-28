import Slider from "../Slider/Slider"
import Mashhur from '../Mashhur/Mashhur'
import UzumCard from '../UzumCard/UzumCard'
import { catogoriyaReklama } from "../../DataUzum/DataUzum"
import "./Home.css"
import ArzonNarx from "../ArzonNarx/ArzonNarx"
import OshxonaJihozlari from "../OshxonaJihozlari/OshxonaJihozlari"
const Home = () => {
    return (
        <div>
            <Slider />
            <Mashhur />
            <UzumCard />
            <div className="banner_image">
                <img src={catogoriyaReklama[0].image} alt="Banner Image" />
            </div>
            <ArzonNarx/>
            <div className="banner_image">
                <img src={catogoriyaReklama[1].image} alt="Banner Image" />
            </div>
            <OshxonaJihozlari/>
        </div>
    )
}

export default Home
