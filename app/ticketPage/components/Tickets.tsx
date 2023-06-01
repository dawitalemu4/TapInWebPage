'use client'
import React from 'react';


const Tickets: React.FC = () => {
    
    //function to assign api variables to each div (prices, ticket names, etc.)

return (
 <div id='Tickets'>

    <div id='TicketsContainer'>

        <div id='TicketOption1Container'>
            <div id='PriceContainer'>
                <p id='Price'>$15</p>
            </div>
            <div id='TicketTypeContainer'>
                <h1 id='TicketTypeHeader'></h1>
                <p id='TicketTypeText'></p>
            </div>
            <div id='QuantityContainer'>
            <div id='Minus'></div>
            <h2 id='QuantityAmount'></h2>
            <div id='Plus'></div>

            </div>
        </div>

        <div id='TicketOption2Container'>
            <div id='PriceContainer'>
                <p id='Price'>$15</p>
            </div>
            <div id='TicketTypeContainer'>
                <h1 id='TicketTypeHeader'></h1>
                <p id='TicketTypeText'></p>
            </div>
            <div id='QuantityContainer'>
                <div id='Minus'></div>
                <h2 id='QuantityAmount'></h2>
                <div id='Plus'></div>        
            </div>
        </div>

        <div id='TicketOption3Container'>
            <div id='PriceContainer'>
                <p id='Price'>$15</p>
            </div>
            <div id='TicketTypeContainer'>
                <h1 id='TicketTypeHeader'></h1>
                <p id='TicketTypeText'></p>
            </div>
            <div id='QuantityContainer'>
                <div id='Minus'></div>
                <h2 id='QuantityAmount'></h2>
                <div id='Plus'></div>        
            </div>
        </div>
        <div id='TicketOption4Container'>
            <div id='PriceContainer'>
                <p id='Price'>$15</p>
            </div>
            <div id='TicketTypeContainer'>
                <h1 id='TicketTypeHeader'></h1>
                <p id='TicketTypeText'></p>
            </div>
            <div id='QuantityContainer'>
                <div id='Minus'></div>
                <h2 id='QuantityAmount'></h2>
                <div id='Plus'></div>        
            </div>
        </div>

    </div>
    <style>
    {` 
    #TicketsContainer {
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        margin-top: 80px;
        width: 100%;
        height: 60vh;
        background-color: transparent;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        border: 1px solid black;
    }
    #Tickets {

    }
    #TicketOption1Container {

    }
    #TicketOption2Container {

    }
    #TicketOption3Container {

    }
    #TicketOption4Container {

    }
    #PriceContainer {

    }
    #TicketTypeContainer {

    }
    #QuantityContainer {

    }
    `}
    </style>

    </div>
    )
}
export default Tickets;