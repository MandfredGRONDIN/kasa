import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Products from '../../products.json'
import '../../styles/test.css'



function Slider(){
    const [currImg, setCurrImg] = useState(0)
    return(
        <div className='gallery'>
            {Products.map((product) => (
                <div key={product.id}>
                    <Carousel showArrows={true}>
                        <img src={product.pictures[currImg]} alt=''/>
                    </Carousel>
                </div>
            ))}
        </div>
    )
}

export default Slider