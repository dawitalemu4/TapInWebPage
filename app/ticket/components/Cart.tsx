'use client'
import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';

interface CartProps {
    onNext: () => void;
    sum: number;
  }

const Cart: React.FC<CartProps> = ({ onNext, sum }) => {
    
return (
    <div id='Cart' onClick={onNext}>

        <div id='CartTextContainer'>
            <h1 id='CartText'>{sum}</h1>
        </div>

        <div id='CartContainer'>
            <button onClick={onNext}><AiOutlineShoppingCart id='CartIcon' /></button>
        </div>

    <style>
    {`
    #Cart {
        display: flex;
        position: fixed;
        bottom: 2%;
        right: 2%;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #2EBC94;
        justify-content: center;
        align-items: center;
        z-index: 10;
        cursor: pointer;
    }
    #CartTextContainer {
        display: flex;
        position: absolute;
        top: -6px;
        right: -6px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: red;
        justify-content: center;
        align-items: center;
    }
    #CartText {
        color: white;
        font-family: PoppinsBold;
        padding-left: 1.5px;
    }
    #CartContainer {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-right: 2px;
    }
    #CartIcon {
        display: flex;
        font-size: 45px;
        color: white;
    }
    @media (max-width: 400px) {
        #CartTextContainer {
            padding-left: 0;
        }
    }
    `}
    </style>
    </div>
)
}
export default Cart;