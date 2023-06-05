'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import {IoIosArrowBack} from 'react-icons/io';

const Billing: React.FC = () => {

    //function to navigate back wehen x is clicked

    //function to pull info from 

    

return (
    <div id='Billing'>

        <div id='BillingBackContainer'>
            <Link href="/ticket/checkout"><IoIosArrowBack id='BillingBack' /></Link>
        </div>

        <div id='BillingContainer'>

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

            <div id='BillingInfoContainer'>

                <input id='BillingCardNumberInput' maxLength={16} type='password' placeholder='Card Number'/>
                      
                <div id='MonthAndCVVContainer'>

                    <input id='BillingMonthInput' placeholder='MM/YY'/>        
                    <input id='BillingCVVInput' maxLength={3} type='password' placeholder='CVV'/>
                    
                </div>

                <input id='BillingZipInput' maxLength={5} placeholder='Zip Code'/>
                <input id='BillingPromoInput' placeholder='Promo Code'/>
                        
            </div>    

            <div id='BillingTotalContainer'>

                <div id='BillingTicketTotalContainer'>
                    <div id='BillingTicketContainer'>
                        <p id='BillingTicket'>Ticket</p>
                    </div>
                    <div id='BillingTicketPriceContainer'>
                        <p id='BillingTicketPrice'>$9.00</p>
                    </div>
                </div>
                <div id='BillingServiceContainer'>
                    <div id='BillingServiceFeeContainer'>
                        <p id='BillingServiceFee'>Service Fee</p>
                    </div>
                    <div id='BillingServicePriceContainer'>
                        <p id='BillingServicePrice'>$10.00</p>
                    </div>
                </div>
                <div id='BillingSubTotalContainer'>
                    <div id='BillingSubTotalTextContainer'>
                        <p id='BillingSubTotalText'>Subtotal</p>
                    </div>
                    <div id='BillingSubTotalPriceContainer'>
                        <p id='BillingSubTotalPrice'>$21.00</p>
                    </div>
                </div>

            </div>

        </div>

        <div id='BillingButtonContainer'>

            <Link href="/ticket/checkout/billing/info" id='BillingButton'>
                <h1 id='BillingButtonText'>Next</h1>
            </Link>

        </div>

    <style>
    {`
    #Billing {
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
    #BillingBackContainer {
        display: flex;
        width: 5%;
        height: 15%;
        justify-content: center;
        align-items: center;
    }
    #BillingBack {
        color: white;
        font-size: 40px;
    }
    #BillingContainer {
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
        margin-right: 3%;
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
    #CheckoutInfoQuantityContainer, #BillingPriceContainer {
        display: flex;
    }
    #QuantityText, #PriceText {
        color: white;
        font-size: 17px;
        font-family: PoppinsSemiBold;
    }
    #BillingInfoContainer {
        display: flex;
        width: 40%;
        margin-bottom: 1%;
        flex-direction: column;
    }
    #BillingCardNumberInput, #BillingZipInput, #BillingPromoInput {
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
    #BillingMonthInput, #BillingCVVInput {
        width: 47%;
        padding: 2%;
        margin: 1%;
        color: white;
        background-color: black;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        font-family: PoppinsSemiBold;
    }
    #BillingTotalContainer {
        display: flex;
        width: 38%;
        flex-direction: column;
    }
    #BillingTicketTotalContainer, #BillingServiceContainer, #BillingSubTotalContainer {
        display: flex;
        width: 100%;
    }
    #BillingTicketContainer, #BillingServiceFeeContainer, #BillingSubTotalTextContainer {
        display: flex;
        width: 50%;
    }
    #BillingTicketPriceContainer, #BillingServicePriceContainer, #BillingSubTotalPriceContainer {
        display: flex;
        width: 50%;
        justify-content: flex-end;
    }
    #BillingTicket, #BillingServiceFee, #BillingTicketPrice, #BillingServicePrice {
        display: flex;
        color: white;
        font-size: 17px;
        font-family: PoppinsSemiBold;
    } 
    #BillingSubTotalText, #BillingSubTotalPrice {
        display: flex;
        color: green;
        font-size: 17px;
        font-family: PoppinsSemiBold;
    }
    #BillingButtonContainer {
        display: flex;
        width: 100%;
        height: 15%;
        justify-content: center;
        align-items: center;
    }
    #BillingButton {
        display: flex;
        width: 25%;
        height: 80%;
        justify-content: center;
        align-items: center;
        background-color: red;
        border-radius: 15% / 95%;
    }
    #BillingButtonText {
        color: white;
        font-size: 20px;
        font-family: PoppinsBold;
    }
    #BillingButton:hover {
        opacity: 0.8;
    }
    @media (max-width: 890px) {
        #BillingBackContainer {
            width: 15%;
        }
        #CheckoutInfoContainer {
            width: 95%;
            margin-bottom: 5%;
        }
        #TicketIconContainer {
            width: 20%;justify-content: flex-start;
            align-items: center;
        }
        #TicketIcon {
            width: 70%;
            height: 90%;
        }
        #BillingInfoContainer {
            width: 95%;
        }
        #BillingTotalContainer {
            width: 95%;
        }
        #BillingButton {
            width: 90%;
            height: 79.5%;
        }
    }
    `}
    </style>
    </div>
)
}
export default Billing;