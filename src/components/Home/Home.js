import React from 'react'
import '../../styles/Desktop/Home.css'
import Img from '../../assets/Home.png'
import Products from '../../products.json'

export default function Home(){
    const products = Products.reduce(
        (acc, product) =>
        acc.includes(product.title) ? acc : acc.concat(product.title),
        []
    )
    console.log(Products)
    return(
        <div className='home'>
            <section>
                <p>Chez vous, partout et ailleurs</p>
                <img className='test' src={Img} alt='la nature'></img>
            </section>
            <div className='gallery'>
                {products.map((product, k) => <div className='product__item' key={k}>{product}</div>)}
            </div>
        </div>
    )
}