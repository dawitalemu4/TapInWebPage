'use client'
import React from 'react';


const TicketInfo: React.FC = () => {
    
    //function for filter buttons
    //idk how to write this until i get the backend params

    //function for Ticket cards to redirect to webpage with Ticket id
    //same ^

return (
    <div id='TicketInfo'>

        <div id='TicketInfoContainer'>
            <div id='TicketInfoImageContainer'>
                <img src='/sampleTicketImage.jpg' id='TicketInfoImage'/>
            </div>
            <div id='TicketInfoTextContainer'>
                <h1 id='TicketInfoTitle'>Steve Aoki Nightmare</h1>
                <h2 id='TicketInfoSubTitle'>Presented by Hidden City & Crescendo Music</h2>
                <h3 id='TicketInfoVenue'>Historic Columbia Speedway</h3>
                <h4 id='TicketInfoDate'>Friday, July 4, 9:00PM</h4>
                <h5 id='TicketInfoAddress'>2001 Charleston Hwy, Coyce, SC 29033</h5>
            </div>
            <div id='TicketInfoOverviewContainer'>
                <p id='TicketInfoOverview'></p>
            </div>
        </div>

        <div id='TicketsContainer'>
            <div id='Tickets'>
                <div id='TicketOption1Container'>
                    <div id='PriceContainer'>

                    </div>
                    <div id='TicketTypeContainer'>

                    </div>
                    <div id='QuantityContainer'>

                    </div>
                </div>
                <div id='TicketOption2Container'>
                    <div id='PriceContainer'>

                    </div>
                    <div id='TicketTypeContainer'>

                    </div>
                    <div id='QuantityContainer'>
                        
                    </div>
                </div>
                <div id='TicketOption3Container'>
                    <div id='PriceContainer'>

                    </div>
                    <div id='TicketTypeContainer'>

                    </div>
                    <div id='QuantityContainer'>
                        
                    </div>
                </div>
                <div id='TicketOption4Container'>
                    <div id='PriceContainer'>

                    </div>
                    <div id='TicketTypeContainer'>

                    </div>
                    <div id='QuantityContainer'>
                        
                    </div>
                </div>
            </div>
        </div>

    <style>
    {` 
    #TicketInfo {
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
    #TicketInfoContainer {
        display: flex;
        position: relative;
        width: 90%;
        height: 20%;
        flex-direction: column;
        justify-content: flex-start;
    }
    #TicketInfoImageContainer {
        display: flex;
        width: 50%;
        height: 50%;
        padding: 10px 0;
        justify-content: flex-start;
        align-items: center;
    }
    #TicketInfoImage {
    
    }
    #TicketInfoTextContainer {
        font-family: PoppinsBold;
        color: white;
        font-size: 220%;
    }
    #TicketInfoTitle {

    }
    #TicketInfoSubTitle {

    }
    #TicketInfoVenue {

    }
    #TicketInfoDate {

    }
    #TicketInfoAddress {

    }
    #TicketInfoOverviewContainer {

    }
    #TicketInfoOverview {
        display: flex;
        width: 200px;
        padding: 2px 0;
        justify-content: flex-start;
    }
    #TicketsContainer {
        
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
    #All, #Today {
        font-family: PoppinsSemiBold;
        color: white;
        font-size: 105%;
        width: 100px;
        text-align: center;
        padding: 10px;
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 10px;
        border-radius: 15%;
        border: 1px solid white;
    }
    #All:hover, #Today:hover {
        opacity: 0.5;
        cursor: pointer;
    }
    #TicketsContainer {
        display: flex;
        position: relative;
        width: 90%; 
        height: 80%;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
    }
    #Ticket {
        display: flex;
        width: 300px;
        height: 350px;
        margin: 10px;
        flex-direction: column;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
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
    @media

    `}
    </style>   
            
    </div>
    )
}
export default TicketInfo;