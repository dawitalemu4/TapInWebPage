'use client'
import React from 'react';
import Link from 'next/link';
import {IoIosArrowBack} from 'react-icons/io';

const Confirmed: React.FC = () => {

    //function to navigate back wehen x is clicked

    //function to push confirmation to database and email service


return (
    <div id='Confirmed'>

        <div id='ConfirmedBackContainer'>
            <Link href="/ticket/checkout/billing"><IoIosArrowBack id='ConfirmedBack' /></Link>
        </div>

        <div id='ConfirmedContainer'>

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

            <div id="ConfirmationNumberContainer">
                <p id='ConfirmationNumberText'>Your ticket confirmation number is #458</p>
            </div>

            <div id='EmailNoticeContainer'>
                <p id='EmailNoticeText'>We have sent an email to the email address provided, which contains your electronic ticket for the upcoming event.</p>
            </div>

        </div>

        <div id='ConfirmedButtonContainer'>

            <Link href="/" id='ConfirmedButton'>
                <h1 id='ConfirmedButtonText'>Go back to Events</h1>
            </Link>

        </div>

    <style>
    {`
    #Confirmed {
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
    #ConfirmedBackContainer {
        display: flex;
        width: 5%;
        height: 15%;
        justify-content: center;
        align-items: center;
    }
    #ConfirmedBack {
        color: white;
        font-size: 40px;
    }
    #ConfirmedContainer {
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
    #CheckoutInfoQuantityContainer, #InfoPriceContainer {
        display: flex;
    }
    #QuantityText, #PriceText {
        color: white;
        font-size: 17px;
        font-family: PoppinsSemiBold;
    }
    #ConfirmationNumberContainer {
        display: flex;
        width: 95%;
        height: 35%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    #ConfirmationNumberText {
        color: white;
        font-size: 28px;
        font-family: PoppinsBold;
    }
    #EmailNoticeContainer {
        display: flex;
        width: 70%;
        height: 25%;
        margin-bottom: 1%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    #EmailNoticeText {
        color: white;
        font-size: 20px;
        font-family: PoppinsBold;
    }
    #ConfirmedButtonContainer {
        display: flex;
        width: 100%;
        height: 15%;
        justify-content: center;
        align-items: center;
    }
    #ConfirmedButton {
        display: flex;
        width: 25%;
        height: 80%;
        justify-content: center;
        align-items: center;
        background-color: red;
        border-radius: 15% / 95%;
    }
    #ConfirmedButtonText {
        color: white;
        font-size: 20px;
        font-family: PoppinsBold;
    }
    #ConfirmedButton:hover {
        opacity: 0.8;
    }
    @media (max-width: 890px) {
        #ConfirmedBackContainer {
            width: 15%;
        }
        #CheckoutInfoContainer {
            width: 95%;
            margin-bottom: 5%;
        }
        #TicketIconContainer {
            width: 20%;
        }
        #ConfirmationNumberText {
            font-size: 20px;
        }
        #EmailNoticeContainer {
            width: 90%;
        }
        #EmailNoticeText {
            font-size: 15px;
        }
        #ConfirmedButton {
            width: 90%;
            height: 79.5%;
        }
    }
    `}
    </style>
    </div>
)
}
export default Confirmed;