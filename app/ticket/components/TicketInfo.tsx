'use client'
import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import {CiLocationOn} from 'react-icons/ci';

const TicketInfo: React.FC = () => {

    //function to pull image from postcard

    //function to make address redirect to google maps with address from client
    const addressRedirect = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=2001+Charleston+Hwy%2C+Coyce%2C+SC+29033', '_blank');
    }

    const homeRedirect = () => {
        window.location.href = '/';
    }

return (
    <div id='TicketInfo'>

        <div id='BackButtonContainer'><IoIosArrowBack id='BackButton' onClick={homeRedirect}/></div>
        

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

        

    <style>
    {` 
    #TicketInfo {
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        margin-top: 120px;
        width: 100%;
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
        color: #2EBC94;
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
        color: #2EBC94;
        font-size: 23px;
        margin-left: 3px;
        margin-right: 3px;
    }
    #TicketInfoAddress {
        color: #ccc;
        font-size: 17px;
        cursor: pointer;
        font-family: PoppinsSemibold;
    }
    #TicketInfoAddress:hover {
        opacity: 0.5;
    }
    #BackButtonContainer {
        display: flex;
        position: absolute;
        top: 0;
        left: 2%;
    }
    #BackButton {
        font-size: 50px;
        cursor: pointer;
    }
    #BackButton:hover {
        opacity: 0.5;
    }
    @media (max-width: 970px) {
        #BackButtonContainer {
            left: 0;
        }
    }
    @media (max-width: 890px) {
        #TicketInfoContainer {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
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
            color: #2EBC94;
            font-size: 24px;
            margin-top: 5%;
        }
        #TicketInfoSubTitle {
            font-size: 12px;
            margin-bottom: 5%;
        }
        #TicketInfoVenue {
            font-size: 18px;
        }
        #TicketInfoDate {
            font-size: 14px;
            margin-bottom: 5%;
        }
        #LocationIcon {
            color: #2EBC94;
            font-size: 17px;
            margin-left: 3px;
            margin-right: 3px;
        }
        #TicketInfoAddress {
            color: #ccc;
            font-size: 13px;
            cursor: pointer;
        }
        #BackButtonContainer {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
        }
        #BackButton {
            position: absolute;
            top: 25%;
        }
    }
    `}
    </style>   
            
    </div>
    )
}
export default TicketInfo;