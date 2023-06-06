'use client'
import React from 'react';


const TicketCards: React.FC = () => {
    
    //function for filter buttons
    //idk how to write this until i get the backend params

    //function for Ticket cards to redirect to webpage with Ticket id
    //same ^ for now ill do /ticket
    const linkRedirect = () => {
        window.location.href = '/ticket';
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
                <img src='/sampleTicketImage.webp' id='TicketImage' alt='First Post Card Image'/>
                <div id='TicketTextContainer'>
                    <div id='DateContainer'>
                        <p id='TicketDateTop'>FRI</p>
                        <p id='TicketDateBottom'>July 4</p>
                    </div>
                    <div id='TicketTitleContainer'>
                        <p id='TicketTitle'>Title lorem ipsum</p>
                        <p id='TicketLocation'>SECU Arena F2</p>
                    </div>
                </div>
            </div>

            <div id='Ticket' onClick={linkRedirect}>
                <img src='/sampleTicketImage2.webp' id='TicketImage' alt='Second Post Card Image'/>
                <div id='TicketTextContainer'>
                    <div id='DateContainer'>
                        <p id='TicketDateTop'>MON</p>
                        <p id='TicketDateBottom'>July 4</p>
                    </div>
                    <div id='TicketTitleContainer'>
                        <p id='TicketTitle'>Title lorem ipsum</p>
                        <p id='TicketLocation'>SECU Arena F2</p>
                    </div>
                </div>
            </div>

            <div id='Ticket' onClick={linkRedirect}>
                <img src='/sampleTicketImage3.webp' id='TicketImage' alt='Third Post Card Image'/>
                <div id='TicketTextContainer'>
                    <div id='DateContainer'>
                        <p id='TicketDateTop'>TUES</p>
                        <p id='TicketDateBottom'>July 4</p>
                    </div>
                    <div id='TicketTitleContainer'>
                        <p id='TicketTitle'>Title lorem ipsum</p>
                        <p id='TicketLocation'>SECU Arena F2</p>
                    </div>
                </div>
            </div>

            <div id='Ticket' onClick={linkRedirect}>
                <img src='/sampleTicketImage4.webp' id='TicketImage' alt='Fourth Post Card Image'/>
                <div id='TicketTextContainer'>
                    <div id='DateContainer'>
                        <p id='TicketDateTop'>WED</p>
                        <p id='TicketDateBottom'>July 4</p>
                    </div>
                    <div id='TicketTitleContainer'>
                        <p id='TicketTitle'>Title lorem ipsum</p>
                        <p id='TicketLocation'>SECU Arena F2</p>
                    </div>
                </div>
            </div> 
            
            <div id='Ticket' onClick={linkRedirect}>
                <img src='/sampleTicketImage5.webp' id='TicketImage' alt='Fifth Post Card Image'/>
                <div id='TicketTextContainer'>
                    <div id='DateContainer'>
                        <p id='TicketDateTop'>THU</p>
                        <p id='TicketDateBottom'>July 4</p>
                    </div>
                    <div id='TicketTitleContainer'>
                        <p id='TicketTitle'>Title lorem ipsum</p>
                        <p id='TicketLocation'>SECU Arena F2</p>
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
        width: 100%;
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
        width: 91%; 
        height: 80%;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        grid-gap: 20px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 30px;
        z-index: 5;
    }
    #Ticket {
        display: flex;
        position: relative;
        width: 230px;
        height: 250px;
        margin: 1px;
        flex-direction: column;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
    }
    #Ticket:hover {
        opacity: 0.8;
    }
    #TicketImage {
        display: flex;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    #TicketTextContainer {
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 23%;
        align-items: center;
        flex-direction: row;
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1));
        border-radius: 10px;
    }
    #DateContainer {
        display: flex;
        width: 30%;
        height: 80%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-right: 1px solid white;
    }
    #TicketDateTop {
        font-family: PoppinsSemiBold;
        color: white;
        font-size: 140%;
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
        padding-left: 2%;
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
        font-size: 75%;
    }
    @media (max-width: 890px) {
        #TicketContainer {
            grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
        }
        #Ticket {
            width: 165px;
            height: 180px;
        }
        #TicketDateTop {
            font-size: 90%;
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