import { useEffect, useState } from "react"
import "./Slider.css"
import {SliderImg} from "../../DataUzum/DataUzum"


const Slider = () => {
    const [rasmIndex,setRasmIndex]=useState(0)

    console.log(SliderImg);
    useEffect(()=>{
        let plusIndex=setInterval(()=>{
            setRasmIndex((item)=>
                item === SliderImg.length-1 ? 0 : item+1
            )
        },3000)
        return()=>clearInterval(plusIndex)
    },[])
    let currentImage=SliderImg[rasmIndex]
    console.log(currentImage);
    
    
  return (
    <div>
        <div className="slider_box">
            <button className="previous_img">
                <div></div>
            </button>
            <div className="slider_img">
                <img src={currentImage.image} alt="Slider-*" />
            </div>
            <button className="next_img">
                <div></div>
            </button>
        </div>
    </div>
  )
}

export default Slider
