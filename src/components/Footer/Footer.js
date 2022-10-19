import React from 'react'
import Img from '../../assets/LOGO.png'
import '../../styles/styles.css'

export default function Footer(){
    return(
        <div className='footer'>
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
            <div className="footer__logo">
                <img src={Img} alt='test'></img>  
            </div>
        </div>
    )
}
