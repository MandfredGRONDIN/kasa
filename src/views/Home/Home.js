import React from 'react'
import '../../styles/Home.css'
import Img from '../../assets/Home.png'
import Slider from '../../components/Gallery/Gallery'
import Products from '../../products.json'
import { Carousel } from "react-responsive-carousel";

export default function Home(){

    return(
        <div className='home'>
            <section>
                <p>Chez vous, partout et ailleurs</p>
                <img className='test' src={Img} alt='la nature'></img>
            </section>
            <Slider/>
        </div>
    )
}