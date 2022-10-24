import React, { useState } from "react";
import ArrowTop from '../../assets/ArrowTop.png'
import ArrowBot from '../../assets/ArrowBot.png'

export default function DropDown({ items }){
    const [isOpen, setIsOpen] = useState(true)


    return (isOpen ? (
        <div className="tes">
            <button className="dropdown__button" type="button" onClick={() => setIsOpen(false)}>
                <span>{items.value}</span>
                <img src={ArrowTop} alt='flèche vers le haut'/>
            </button>
            <p className="dropdown__p">{items.text}</p>
        </div>
    ) : (
        <button className="dropdown__button" type="button" onClick={() => setIsOpen(true)}>
            <span>{items.value}</span>
            <img src={ArrowBot} alt='flèche vers le bas'/>
        </button>
    )
    )
}