import React from 'react'
import '../../styles/styles.css'
import Img from '../../assets/LOGO_Header.png'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div className='header'>
            <nav>
                <Link to='/' className='items'>Acceuil</Link>
                <Link to="/APropos" className='items'>A Propos</Link>
            </nav>
            <img className="header__logo" src={Img} alt='test'></img>
        </div>
    )
}