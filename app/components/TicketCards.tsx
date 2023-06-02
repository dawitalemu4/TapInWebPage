'use client'
import React from 'react';


const TicketCards: React.FC = () => {
    
    //function for filter buttons
    //idk how to write this until i get the backend params

    //function for Ticket cards to redirect to webpage with Ticket id
    //same ^ for now ill do /ticketPage
    const linkRedirect = () => {
        window.location.href = '/ticketPage';
    }

return (
    <div id='TicketCards'>

        <div id='TicketCardsHeaderContainer'>
            <div id='TicketCardsTextContainer'>
                <p id='TicketCardsText'>Events</p>
            </div>
            <div id='TicketCardsFiltersContainer'>
                <button id='All'>All</button>
                <button id='Today'>Today</button>
            </div>
        </div>

        <div id='TicketContainer'>
            <div id='Ticket' onClick={linkRedirect}>
                <img src='/sampleTicketImage.jpg' id='TicketImage'/>
                <div id='TicketTextContainer'>
                    <div id='DateContainer'>
                        <p id='TicketDateTop'>FRI</p>
                        <p id='TicketDateBottom'>July 4</p>
                    </div>
                    <div id='TicketTitleContainer'>
                        <p id='TicketTitle'>Title lorem ipsum idk</p>
                        <p id='TicketLocation'>SECU Mom's Basement</p>
                    </div>
                </div>
            </div>

            <div id='Ticket' onClick={linkRedirect}>
                <img src='/sampleTicketImage.jpg' id='TicketImage'/>
                <div id='TicketTextContainer'>
                    <div id='DateContainer'>
                        <p id='TicketDateTop'>FRI</p>
                        <p id='TicketDateBottom'>July 4</p>
                    </div>
                    <div id='TicketTitleContainer'>
                        <p id='TicketTitle'>Title lorem ipsum idk</p>
                        <p id='TicketLocation'>SECU Mom's Basement</p>
                    </div>
                </div>
            </div>

            <div id='Ticket' onClick={linkRedirect}>
                <img src='/sampleTicketImage.jpg' id='TicketImage'/>
                <div id='TicketTextContainer'>
                    <div id='DateContainer'>
                        <p id='TicketDateTop'>FRI</p>
                        <p id='TicketDateBottom'>July 4</p>
                    </div>
                    <div id='TicketTitleContainer'>
                        <p id='TicketTitle'>Title lorem ipsum idk</p>
                        <p id='TicketLocation'>SECU Mom's Basement</p>
                    </div>
                </div>
            </div>

            <div id='Ticket' onClick={linkRedirect}>
                <img src='/sampleTicketImage.jpg' id='TicketImage'/>
                <div id='TicketTextContainer'>
                    <div id='DateContainer'>
                        <p id='TicketDateTop'>FRI</p>
                        <p id='TicketDateBottom'>July 4</p>
                    </div>
                    <div id='TicketTitleContainer'>
                        <p id='TicketTitle'>Title lorem ipsum idk</p>
                        <p id='TicketLocation'>SECU Mom's Basement</p>
                    </div>
                </div>
            </div> 
            <div id='Ticket' onClick={linkRedirect}>
                <img src='/sampleTicketImage.jpg' id='TicketImage'/>
                <div id='TicketTextContainer'>
                    <div id='DateContainer'>
                        <p id='TicketDateTop'>FRI</p>
                        <p id='TicketDateBottom'>July 4</p>
                    </div>
                    <div id='TicketTitleContainer'>
                        <p id='TicketTitle'>Title lorem ipsum idk</p>
                        <p id='TicketLocation'>SECU Mom's Basement</p>
                    </div>
                </div>
            </div>   

    </div>
    <style>
    {` 
    #TicketCards {
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        margin-top: 100px;
        width: 100%;
        height: 100%;
        background-color: transparent;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
    }
    #TicketCardsHeaderContainer {
        display: flex;
        position: relative;
        width: 90%;
        height: 20%;
        flex-direction: column;
        justify-content: flex-start;
    }
    #TicketCardsTextContainer {
        display: flex;
        width: 50%;
        height: 50%;
        padding: 10px 0;
        justify-content: flex-start;
        align-items: center;
    }
    #TicketCardsText {
        font-family: PoppinsBold;
        color: white;
        font-size: 220%;
    }
    #TicketCardsFiltersContainer {
        display: flex;
        width: 400px;
        padding: 2px 0;
        justify-content: flex-start;
    }
    #All, #Today {
        font-family: PoppinsSemiBold;
        color: white;
        font-size: 105%;
        width: 120px;
        text-align: center;
        padding: 10px;
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 10px;
        border-radius: 40% / 90%;
        border: 2px solid grey;
    }
    #All:hover, #Today:hover {
        opacity: 0.5;
        cursor: pointer;
    }
    #TicketContainer {
        display: grid;
        position: relative;
        width: 90%; 
        height: 80%;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 20px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
    }
    #Ticket {
        display: flex;
        width: 250px;
        height: 350px;
        margin: 10px;
        flex-direction: column;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    #Ticket:hover {
        opacity: 0.8;
    }
    #TicketImage {
        display: flex;
        width: 100%;
        border-radius: 10px 10px 0 0;
    }
    #TicketTextContainer {
        display: flex;
        width: 100%;
        height: 16%;
        align-items: center;
        flex-direction: row;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 0 0 10px 10px;
    }
    #DateContainer {
        display: flex;
        width: 25%;
        height: 80%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-right: 1px solid white;
    }
    #TicketDateTop {
        font-family: PoppinsSemiBold;
        color: white;
        font-size: 155%;
        margin-bottom: -5px;
        margin-top: -5px;
    } 
    #TicketDateBottom {
        font-family: PoppinsMedium;
        color: white;
        font-size: 85%;
    }
    #TicketTitleContainer {
        display: flex;
        width: 70%;
        padding-left: 5%;
        justify-content: center;
        flex-direction: column;
    }
    #TicketTitle {
        font-family: PoppinsSemiBold;
        color: white;
        font-size: 95%;
    } 
    #TicketLocation {
        font-family: PoppinsMedium;
        color: white;
        font-size: 85%;
    }
    @media (max-width: 890px) {
        #TicketContainer {
            grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
        }
        #Ticket {
            width: 165px;
            height: 200px;
        }
        #TicketDateTop {
            font-size: 95%;
        }
        #TicketDateBottom {
            font-size: 55%;
        }
        #TicketTitle {
            font-size: 60%;
        }
        #TicketLocation {
            font-size: 50%;
        }
    }
    `}
    </style>   
            
    </div>
    )
}
export default TicketCards;