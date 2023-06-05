'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import {IoIosArrowBack} from 'react-icons/io';

const Info: React.FC = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

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

            <div id="DisclaimerContainer">
                <p id='DisclaimerText'>We request your email address in order to facilitate the delivery of your tickets.</p>
            </div>

            <div id='PersonalInfoContainer'>
 
                <div id='NameContainer'>

                    <input id='FirstName' placeholder='First Name'/>        
                    <input id='LastName' placeholder='Last Name'/>
                    
                </div>

                <input id='Email' placeholder='Email'/>
                    
            </div>

            <div id='MarketingContainer'>

                <div id='MarketingBoxContainer'>
                    <label id='BoxLabel'>
                    <input id='BoxInput' type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    </label>
                </div>

                <div id='MarketingTextContainer'>
                    <p id='MarketingText'>By selecting this checkbox, you are consenting to receive future marketing emails from us, which may include updates on upcoming events, special ticket prices, and other relevant information</p>
                </div> 

            </div>    

        </div>

        <div id='InfoButtonContainer'>

            <Link href="/ticket/checkout/billing/info/confirmed" id='InfoButton'>
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
    #DisclaimerContainer {
        display: flex;
        width: 95%;
        height: 15%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    #DisclaimerText {
        color: white;
        font-size: 15px;
        font-family: PoppinsMedium;
    }
    #PersonalInfoContainer {
        display: flex;
        width: 40%;
        margin-bottom: 1%;
        flex-direction: column;
    }
    #Email {
        padding: 2%;
        margin: 1%;
        color: white;
        background-color: black;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        font-family: PoppinsSemiBold;
    }
    #NameContainer {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    #FirstName, #LastName {
        width: 47%;
        padding: 2%;
        margin: 1%;
        color: white;
        background-color: black;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        font-family: PoppinsSemiBold;
    }
    #MarketingContainer {
        display: flex;
        width: 39%;
        height: 33.5%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    #MarketingBoxContainer {
        display: flex;
        width: 10%;
        height: 30%;
    }
    #BoxLabel {
        width: 100%;
        height: 100%;
    }
    #BoxInput {
       width: 100%;
       height: 100%;
    }
    #MarketingTextContainer {
        display: flex;
        width: 85%;
        height: 80%;
        align-items: center;
    }
    #MarketingText {
        color: white;
        font-size: 15px;
        font-family: PoppinsMedium;
        overflow-y: scroll;
    }
    #MarketingText::-webkit-scrollbar {
        width: 0.2em;
    }
    #MarketingText::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, .2);
        border-radius: 90% / 3%;
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
            width: 20%;justify-content: flex-start;
            align-items: center;
        }
        #TicketIcon {
            width: 70%;
            height: 90%;
        }
        #DisclaimerText {
            font-size: 13px;
        }
        #PersonalInfoContainer {
            width: 95%;
        }
        #MarketingContainer {
            width: 95%;
        }
        #MarketingText {
            font-size: 13px;
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