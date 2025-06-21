import React from 'react'
import { AllProducts } from '../DataUzum/AllDataUzum'
import { useParams } from 'react-router-dom';
import "./OneProduct.css"

const OneProduct = () => {
    console.log(AllProducts);
    let { id } = useParams()

    let AllProductOne = AllProducts.find(item => item.id == Number(id))
    console.log(AllProductOne);

    return (
        <div className="one_product_cars">
            <div className="one_product_card">
                <img src={AllProductOne.rasm} alt="" />
                <div className="one_product_card_text">
                    <h1>{AllProductOne.nomi}</h1>
                    <p>{AllProductOne.tavsifi}</p>
                    <p className='one_narxi'>
                        <span>${AllProductOne.narxi}</span>
                        <span className='one_eski_narxi'>${AllProductOne.eskiNarx}</span>
                        <span>⭐{AllProductOne.reyting}({AllProductOne.sharhlar} sharhlar)</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OneProduct
