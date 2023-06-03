'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import {IoIosArrowBack} from 'react-icons/io';

const Info: React.FC = () => {

    //function to navigate back wehen x is clicked

    //function to pull info from 

    

return (
    <div id='Info'>

        <div id='InfoBackContainer'>
            <Link href="/ticket/checkout/billing"><IoIosArrowBack id='InfoBack' /></Link>
        </div>

        <div id='InfoContainer'>

            <div id='CheckoutInfoContainer'>

                <div id='TicketIconContainer'>
                    <img id='TicketIcon' src='/TicketIcon.png' />
                </div>

                <div id='CheckoutInfoTextContainer'>

                    <div id='CheckoutInfoHeaderContainer'>
                        <h1 id='CheckoutInfoHeaderText'>General Admission Ticket</h1>
                    </div>

                    <div id='CheckoutInfoSubTextContainer'>

                        <div id='CheckoutInfoQuantityContainer'>    
                            <h2 id='QuantityText'>x1</h2>
                        </div>
                        <div id='CheckoutInfoPriceContainer'>
                            <h3 id='PriceText'>$15.00</h3>
                        </div>

                    </div>

                </div>

            </div>

                <div id='InfoInfoContainer'>

                    <input id='InfoCardNumberInput' maxLength={16} type='password' placeholder='Card Number'/>
                      
                    <div id='MonthAndCVVContainer'>

                        <input id='InfoMonthInput' placeholder='MM/YY'/>        
                        <input id='InfoCVVInput' maxLength={3} type='password' placeholder='CVV'/>
                    
                    </div>

                    <input id='InfoZipInput' maxLength={5} placeholder='Zip Code'/>
                    
                
                </div>

                <div id='InfoTotalContainer'>

                    <div id='InfoTicketTotalContainer'>
                        <div id='InfoTicketContainer'>
                            <p id='InfoTicket'>Ticket</p>
                        </div>
                        <div id='InfoTicketPriceContainer'>
                            <p id='InfoTicketPrice'>$9.00</p>
                        </div>
                    </div>
                    <div id='InfoServiceContainer'>
                        <div id='InfoServiceFeeContainer'>
                            <p id='InfoServiceFee'>Service Fee</p>
                        </div>
                        <div id='InfoServicePriceContainer'>
                            <p id='InfoServicePrice'>$10.00</p>
                        </div>
                    </div>
                    <div id='InfoSubTotalContainer'>
                        <div id='InfoSubTotalTextContainer'>
                            <p id='InfoSubTotalText'>Subtotal</p>
                        </div>
                        <div id='InfoSubTotalPriceContainer'>
                            <p id='InfoSubTotalPrice'>$21.00</p>
                        </div>
                    </div>

                </div>

        </div>

        <div id='InfoButtonContainer'>

            <Link href="/ticket/checkout/billing/info/confirm" id='InfoButton'>
                <h1 id='InfoButtonText'>Confirm Purchase</h1>
            </Link>

        </div>

    <style>
    {`
    #Info {
        display: flex;
        position: fixed;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 70vh;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        z-index: 10;
    }
    #InfoBackContainer {
        display: flex;
        width: 5%;
        height: 15%;
        justify-content: center;
        align-items: center;
    }
    #InfoBack {
        color: white;
        font-size: 40px;
    }
    #InfoContainer {
        display: flex;
        width: 100%;
        height: 66%; 
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    #CheckoutInfoContainer {
        display: flex;
        width: 40%;
        margin-bottom: 1%;
        margin-top: -4%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    #TicketIconContainer {
        display: flex;
        width: 13%;
        height: 70%;
    }
    #TicketIcon {

    }
    #CheckoutInfoTextContainer {
        display: flex;
        width: 80%;
        flex-direction: column;
    }
    #CheckoutInfoContainer {
        display: flex;
        flex-direction: row;
    }
    #CheckoutInfoHeaderContainer {
        display: flex;
        width: 100%;
        height: 50%;
        margin-bottom: 1%;
    }
    #CheckoutInfoHeaderText {
        color: white;
        font-size: 20px;
        font-family: PoppinsBold;
    }
    #CheckoutInfoSubTextContainer {
        display: flex;
        width: 100%;
        height: 35%;
        justify-content: space-between;
    }
    #CheckoutInfoQuantityContainer, #InfoPriceContainer {
        display: flex;
    }
    #QuantityText, #PriceText {
        color: white;
        font-size: 17px;
        font-family: PoppinsSemiBold;
    }
    #InfoInfoContainer {
        display: flex;
        width: 40%;
        margin-bottom: 1%;
        flex-direction: column;
    }
    #InfoCardNumberInput, #InfoZipInput, #InfoPromoInput {
        padding: 2%;
        margin: 1%;
        color: white;
        background-color: black;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        font-family: PoppinsSemiBold;
    }
    #MonthAndCVVContainer {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    #InfoMonthInput, #InfoCVVInput {
        width: 47%;
        padding: 2%;
        margin: 1%;
        color: white;
        background-color: black;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        font-family: PoppinsSemiBold;
    }
    #InfoTotalContainer {
        display: flex;
        width: 38%;
        flex-direction: column;
    }
    #InfoTicketTotalContainer, #InfoServiceContainer, #InfoSubTotalContainer {
        display: flex;
        width: 100%;
    }
    #InfoTicketContainer, #InfoServiceFeeContainer, #InfoSubTotalTextContainer {
        display: flex;
        width: 50%;
    }
    #InfoTicketPriceContainer, #InfoServicePriceContainer, #InfoSubTotalPriceContainer {
        display: flex;
        width: 50%;
        justify-content: flex-end;
    }
    #InfoTicket, #InfoServiceFee, #InfoTicketPrice, #InfoServicePrice {
        display: flex;
        color: white;
        font-size: 17px;
        font-family: PoppinsSemiBold;
    } 
    #InfoSubTotalText, #InfoSubTotalPrice {
        display: flex;
        color: green;
        font-size: 17px;
        font-family: PoppinsSemiBold;
    }
    #InfoButtonContainer {
        display: flex;
        width: 100%;
        height: 15%;
        justify-content: center;
        align-items: center;
    }
    #InfoButton {
        display: flex;
        width: 25%;
        height: 80%;
        justify-content: center;
        align-items: center;
        background-color: red;
        border-radius: 15% / 95%;
    }
    #InfoButtonText {
        color: white;
        font-size: 20px;
        font-family: PoppinsBold;
    }
    #InfoButton:hover {
        opacity: 0.8;
    }
    @media (max-width: 890px) {
        #InfoBackContainer {
            width: 15%;
        }
        #CheckoutInfoContainer {
            width: 95%;
            margin-bottom: 5%;
        }
        #TicketIconContainer {
            width: 20%;
        }
        #InfoInfoContainer {
            width: 95%;
        }
        #InfoTotalContainer {
            width: 95%;
        }
        #InfoButton {
            width: 90%;
            height: 79.5%;
        }
    }
    `}
    </style>
    </div>
)
}
export default Info;