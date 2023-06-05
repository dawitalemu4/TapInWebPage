'use client'
import React, {useMemo} from 'react';
import Link from 'next/link';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import Tickets from './Tickets';

const Cart: React.FC = () => {

    //function to match CartText number QuantityAmount from Tickets.tsx

    //function to make cart button hidden unless QuantityAmount is over 0 

    //function to redirect to checkout page when cart button is clicked
    const checkoutRedirect = () => {
        window.location.href = '/ticket/checkout';
    }
    //i know its redudant because of the link tag below my bad 
    
return (
    <div id='Cart' onClick={checkoutRedirect}>

        <div id='CartTextContainer'>
            <h1 id='CartText'>1</h1>
        </div>

        <div id='CartContainer'>
            <Link href="/ticket/checkout"><AiOutlineShoppingCart id='CartIcon' /></Link>
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
    `}
    </style>
    </div>
)
}
export default Cart;