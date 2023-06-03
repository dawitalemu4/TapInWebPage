'use client'
import React from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';


const Tickets: React.FC = () => {
    
    //function to assign api variables to each div (prices, ticket names, etc.)

    //function to add and subtract quantity amount according to Pluys and Minues
    
return (
 <div id='Tickets'>

    <div id="TicketsHeaderContainer">
        <h1 id='TicketsHeader'>Tickets</h1>
    </div>

    <div id='TicketsContainer'>

        <div id='TicketOption1Container'>
            <div id='PriceContainer'>
                <p id='Price'>$15</p>
            </div>
            <div id='TicketTypeContainer'>
                <h1 id='TicketTypeHeader'>Pre Sale General Admission Ticket</h1>
                <p id='TicketTypeText'>General Admission Ticket </p>
            </div>
            <div id='QuantityContainer'>
                <div id='Minus'><AiOutlineMinusCircle/></div>
                <h2 id='QuantityAmount'>0</h2>
                <div id='Plus'><AiOutlinePlusCircle/></div>
            </div>
        </div>

        <div id='TicketOption2Container'>
            <div id='PriceContainer'>
                <p id='Price'>$15</p>
            </div>
                <div id='TicketTypeContainer'>
                <h1 id='TicketTypeHeader'>Pre Sale General Admission Ticket</h1>
                <p id='TicketTypeText'>General Admission Ticket </p>
            </div>
            <div id='QuantityContainer'>
                <div id='Minus'><AiOutlineMinusCircle/></div>
                <h2 id='QuantityAmount'>0</h2>
                <div id='Plus'><AiOutlinePlusCircle/></div>       
            </div>
        </div>

        <div id='TicketOption3Container'>
            <div id='PriceContainer'>
                <p id='Price'>$15</p>
            </div>
            <div id='TicketTypeContainer'>
                <h1 id='TicketTypeHeader'>Pre Sale General Admission Ticket</h1>
                <p id='TicketTypeText'>General Admission Ticket </p>
            </div>
            <div id='QuantityContainer'>
                <div id='Minus'><AiOutlineMinusCircle/></div>
                <h2 id='QuantityAmount'>0</h2>
                <div id='Plus'><AiOutlinePlusCircle/></div>       
            </div>
        </div>

        <div id='TicketOption4Container'>
            <div id='PriceContainer'>
                <p id='Price'>$15</p>
            </div>
            <div id='TicketTypeContainer'>
                <h1 id='TicketTypeHeader'>Pre Sale General Admission Ticket</h1>
                <p id='TicketTypeText'>General Admission Ticket </p>
            </div>
            <div id='QuantityContainer'>
                <div id='Minus'><AiOutlineMinusCircle/></div>
                <h2 id='QuantityAmount'>0</h2>
                <div id='Plus'><AiOutlinePlusCircle/></div>
            </div>
        </div>

    </div>
    <style>
    {` 
    #Tickets {
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 65vh;
        background-color: transparent;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    #TicketsHeaderContainer {
        display: flex;
        width: 70%;
        height: 20%;
        align-items: center;
    }
    #TicketsHeader {
        color: green;
        font-size: 34px;
        font-family: PoppinsBold;
    }
    #TicketsContainer {
        display: flex;
        width: 70%;
        height: 80%;
        align-items: center;
        flex-direction: column;
        background-color: #4E4F5A;
        border: 3px solid green;
        border-radius: 20px;
    }
    #TicketOption1Container {
        display: flex;
        width: 95%;
        height: 25%;
        align-items: center;
        border-bottom: 1px solid white;
    }
    #TicketOption2Container {
        display: flex;
        width: 95%;
        height: 25%;
        align-items: center;
        border-bottom: 1px solid white;
    }
    #TicketOption3Container {
        display: flex;
        width: 95%;
        height: 25%;
        align-items: center;
        border-bottom: 1px solid white;
    }
    #TicketOption4Container {
        display: flex;
        width: 95%;
        height: 25%;
        align-items: center;
    }
    #PriceContainer {
        display: flex;
        width: 10%;
        margin-right: 2%;
        justify-content: center;
        align-items: center;
    }
    #Price {
        color: white;
        font-size: 34px;
        font-family: PoppinsBold;
    }
    #TicketTypeContainer {
        display: flex;
        width: 70%;
        height: 100%;
        justify-content: center;
        flex-direction: column;
    }
    #TicketTypeHeader {
        color: white;
        font-size: 20px;
        font-family: PoppinsBold;
    }
    #TicketTypeText {
        color: white;
        font-size: 17px;
        font-family: PoppinsRegular;
    }
    #QuantityContainer {
        display: flex;
        width: 20%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    #Minus {
        color: white;
        font-size: 34px;
        cursor: pointer;
    }
    #QuantityAmount {
        color: white;
        font-size: 34px;
        font-family: PoppinsBold;
        margin: 0 10%;
    }
    #Plus {
        color: white;
        font-size: 34px;
        cursor: pointer;
    }
    #Minus:hover, #Plus:hover {
        opacity: 0.5;
    }
    @media (max-width: 890px) {
        #Tickets {
            height: 45vh;
        }
        #TicketsHeaderContainer {
            width: 90%;
            justify-content: center;
        }
        #TicketsHeader {
            font-size: 24px;
        }
        #TicketsContainer {
            width: 90%;
        }
        #Price {
            font-size: 17px;
        }
        #TicketTypeHeader {
            font-size: 11px;
        }
        #TicketTypeText {
            font-size: 10px;
        }
        #Minus, #Plus, #QuantityAmount {
            font-size: 20px;
        }
    }
    `}
    </style>

    </div>
    )
}
export default Tickets;