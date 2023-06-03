'use client'
import React from 'react';
import Link from 'next/link';
import {VscClose} from 'react-icons/vsc';

const Checkout: React.FC = () => {

    //function to navigate back wehen x is clicked

    //function to pull info from 

return (
    <div id='Checkout'>

        <div id='CheckoutCancelContainer'>
            <Link href="/ticket"><VscClose id='CheckoutCancel' /></Link>
        </div>

        <div id='CheckoutContainer'>

            <div id='TicketIconContainer'>
                <img id='TicketIcon' src='/TicketIcon.png' />
            </div>

            <div id='CheckoutTextContainer'>

                <div id='CheckoutHeaderContainer'>
                    <h1 id='CheckoutHeaderText'>General Admission Ticket</h1>
                </div>

                <div id='CheckoutSubTextContainer'>
                    <div id='CheckoutQuantityContainer'>    
                        <h2 id='QuantityText'>x1</h2>
                    </div>
                    <div id='CheckoutPriceContainer'>
                        <h3 id='PriceText'>$15.00</h3>
                    </div>
                </div>

            </div>

        </div>

        <div id='CheckoutButtonContainer'>

            <Link href="/ticket/checkout/billing" id='CheckoutButton'>
                <h1 id='CheckoutButtonText'>Checkout</h1>
            </Link>

        </div>

    <style>
    {`
    #Checkout {
        display: flex;
        position: fixed;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 30vh;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        z-index: 10;
    }
    #CheckoutCancelContainer {
        display: flex;
        width: 5%;
        height: 15%;
        justify-content: center;
        align-items: flex-start;
    }
    #CheckoutCancel {
        color: white;
        font-size: 40px;
    }
    #CheckoutContainer {
        display: flex;
        width: 100%;
        height: 41%;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    #TicketIconContainer {
        display: flex;
        width: 10%;
        height: 50%;
    }
    #TicketIcon {
        scale: 1;
    }
    #CheckoutTextContainer {
        display: flex;
        width: 30%;
        height: 70%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    #CheckoutHeaderContainer {
        display: flex;
        width: 100%;
        height: 50%;
        margin-bottom: 1%;
    }
    #CheckoutHeaderText {
        color: white;
        font-size: 20px;
        font-family: PoppinsBold;
    }
    #CheckoutSubTextContainer {
        display: flex;
        width: 100%;
        height: 35%;
        justify-content: space-between;
    }
    #CheckoutQuantityContainer, #CheckoutPriceContainer {
        display: flex;
    }
    #QuantityText, #PriceText {
        color: white;
        font-size: 17px;
        font-family: PoppinsSemiBold;
    }
    #CheckoutButtonContainer {
        display: flex;
        width: 100%;
        height: 35%;
        justify-content: center;
        align-items: center;
    }
    #CheckoutButton {
        display: flex;
        width: 25%;
        height: 80%;
        justify-content: center;
        align-items: center;
        background-color: red;
        border-radius: 15% / 95%;
    }
    #CheckoutButtonText {
        color: white;
        font-size: 20px;
        font-family: PoppinsBold;
    }
    #CheckoutButton:hover {
        opacity: 0.8;
    }
    @media (max-width: 890px) {
        #CheckoutCancelContainer {
            width: 15%;
        }
        #CheckoutTextContainer {
            width: 80%;
        }
        #TicketIconContainer {
            width: 15%;
        }
        #TicketIcon {
            transform: scale(0.8);
        }
        #CheckoutHeaderContainer, #CheckoutSubTextContainer {
            width: 90%;
        } 
        #CheckoutButton {
            width: 90%;
        }
    }
    `}
    </style>
    </div>
)
}
export default Checkout;