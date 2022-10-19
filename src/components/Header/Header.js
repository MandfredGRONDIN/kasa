import React from 'react'
import '../../styles/styles.css'
import Img from '../../assets/LOGO_Header.png'

export default function Header(){
    return(
        <div className='header'>
            <nav>
                <p className='T1'>Acceuil</p>
                <p className='T2'>A Propos</p>
            </nav>
            <img className="header__logo" src={Img} alt='test'></img>
        </div>
    )
}