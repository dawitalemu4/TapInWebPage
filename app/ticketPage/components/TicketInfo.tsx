'use client'
import React from 'react';
import {CiLocationOn} from 'react-icons/ci';

const TicketInfo: React.FC = () => {

    //function to pull image from postcard

    //function to make address redirect to google maps with address from client
    const addressRedirect = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=2001+Charleston+Hwy%2C+Coyce%2C+SC+29033', '_blank');
    }

return (
    <div id='TicketInfo'>

        <div id='TicketInfoContainer'>

            <div id='TicketInfoImageContainer'>
                <img src='/sampleTicketImage.jpg' id='TicketInfoImage'/>
            </div>

            <div id='TicketInfoTextContainer'>
                <h1 id='TicketInfoTitle'>Steve Aoki Nightmare</h1>
                <h2 id='TicketInfoSubTitle'>Presented by Hidden City & Crescendo Music <br/></h2>
                <h3 id='TicketInfoVenue'>Historic Columbia Speedway</h3>
                <h4 id='TicketInfoDate'>Friday, July 4, 9:00PM</h4>
                <div id='TicketInfoAddressLine'> <CiLocationOn id='LocationIcon'/> <a id='TicketInfoAddress' onClick={addressRedirect}>2001 Charleston Hwy, Coyce, SC 29033</a> </div>
            </div>
            
        </div>

        <div id='TicketInfoOverviewContainer'>
            <h1 id='TicketInfoOverviewHeader'>Overview</h1>
            <p id='TicketInfoOverview'>Lorem ipsum dolor sit amet consectetur. Donec odio sit risus pulvinar odio ligula turpis scelerisque dignissim. Quis non duis fames purus. Quis quis rhoncus malesuada convallis purus consequat ac.Lorem ipsum dolor sit amet consectetur. Donec odio sit risus pulvinar odio ligula turpis scelerisque dignissim. Quis non duis fames purus. Quis quis rhoncus malesuada convallis purus consequat ac.</p>
        </div>

    <style>
    {` 
    #TicketInfo {
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        margin-top: 120px;
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
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
    #TicketInfoImageContainer {
        display: flex;
        position: relative;
        width: 50%;
        justify-content: center;
        align-items: center;
    }
    #TicketInfoImage {
        width: 400px;
        border: 1px solid black;
        border-radius: 40px;
        box-shadow: -1px 3px 5px black;
    }
    #TicketInfoTextContainer {
        display: flex;
        position: absolute;
        right: 0;
        width: 50%;
        font-family: PoppinsBold;
        color: white;
        justify-content: center;
        flex-direction: column;
    }
    #TicketInfoTitle {
        color: green;
        font-size: 34px;
    }
    #TicketInfoSubTitle {
        font-size: 20px;
        margin-bottom: 5%;
    }
    #TicketInfoVenue {
        font-size: 28px;
    }
    #TicketInfoDate {
        font-size: 20px;
        margin-bottom: 5%;
    }
    #TicketInfoAddressLine {
        display: flex;
        flex-direction: row;
    }
    #LocationIcon {
        color: green;
        font-size: 23px;
        margin-left: 3px;
        margin-right: 3px;
    }
    #TicketInfoAddress {
        color: grey;
        font-size: 17px;
        cursor: pointer;
    }
    #TicketInfoOverviewContainer {
        display: flex;
        position: relative;
        width: 70%;
        font-family: PoppinsBold;
        flex-direction: column;
        margin-top: 5%;
    }
    #TicketInfoOverviewHeader {
        color: green;
        font-size: 34px;
        margin-bottom: 1%;
    }
    #TicketInfoOverview {
        color: white;
        font-size: 20px;
    }
    @media (max-width: 890px) {
        #TicketInfo {
            height: 80vh;
        }
        #TicketInfoContainer {
            height: 80vh;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #TicketInfoImageContainer {
            width: 80%;
        }
        #TicketInfoTextContainer {
            position: relative;
            width: 80%;
            justify-content: center;
            align-items: center;
        }
        #TicketInfoTitle {
            color: green;
            font-size: 17px;
            margin-top: 4%;
        }
        #TicketInfoSubTitle {
            font-size: 12px;
            margin-bottom: 5%;
        }
        #TicketInfoVenue {
            font-size: 17px;
        }
        #TicketInfoDate {
            font-size: 12px;
            margin-bottom: 5%;
        }
        #LocationIcon {
            color: green;
            font-size: 12px;
            margin-left: 3px;
            margin-right: 3px;
        }
        #TicketInfoAddress {
            color: grey;
            font-size: 10px;
            cursor: pointer;
        }
        #TicketInfoOverviewContainer {
            width: 80%;
            justify-content: center;
            align-items: center;
        }
        #TicketInfoOverviewHeader {
            font-size: 17px;
        }
        #TicketInfoOverview {
            text-align: center;
            font-size: 12px;
        }
    `}
    </style>   
            
    </div>
    )
}
export default TicketInfo;