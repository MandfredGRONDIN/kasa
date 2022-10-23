import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Products from '../../products.json'
import '../../styles/test.css'



function Slider() {
    const [currImg, setCurrImg] = useState(0)


    return (
        <div className='gallery'>
            {Products.map((product) => (
                <div className='gallery__img' key={product.id}>
                    <Carousel showThumbs={false} showIndicators={false}>
                        {product.pictures.map((picture, k) => (
                            <div key={k}>
                                <img src={picture} alt=''/>
                                <h2>{product.title}</h2>
                            </div>
                        ))}
                    </Carousel>
                </div>
            ))}
        </div>
    )
}

export default Slider