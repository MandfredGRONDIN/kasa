import React from 'react'
import '../../styles/Home.css'
import Img from '../../assets/Home.png'
import Products from '../../products.json'

export default function Home(){
    return(
        <div className='home'>
            <section>
                <p>Chez vous, partout et ailleurs</p>
                <img className='test' src={Img} alt='la nature'></img>
            </section>
            <div className='gallery'>
                {Products.map((product) => 
                <div className='product__item' key={product.id}>
                    <img src={`${product.pictures[0]}`} alt='logement' className='product__img'></img>
                    <div className='product__title'>{product.title}</div>
                </div>)}
            </div>
        </div>
    )
}