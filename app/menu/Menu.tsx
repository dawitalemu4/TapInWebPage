"use client"
import React from 'react';
import Link from 'next/link';
import {FiFacebook} from 'react-icons/fi';
import {RxInstagramLogo} from 'react-icons/rx';
import {SlSocialYoutube} from 'react-icons/sl';
import {GiCancel} from 'react-icons/gi';

const Menu: React.FC = () => {

    //function to navigate back wehen x is clicked
    const linkRedirect = () => {
        window.location.href = 'https://letsalltapin.com';
    }

return (
    <div id='Menu'>

        <div id='MenuHeaderContainer'>

            <div id='MenuLogoContainer'>
                <img src='/Logo.png' id='MenuLogo' onClick={linkRedirect}/>
            </div>

            <div id='CancelContainer'>
                <Link href="/"><GiCancel id='Cancel' /></Link>
            </div>

        </div>

        <div id='MenuContainer'>
            
            <ul id='MenuTextContainer'>
                <li id='MenuApp'> <img src='/Bell.png' id='Bell'/> <a href='https://letsalltapin.com'>App</a></li>
                <li id='MenuEvents'> <img src='/List.png' id='List'/> <a href='https://letsalltapin.com'>Events</a></li>
                <li id='MenuPartners'> <img src='/Note.png' id='Note'/> <a href='https://letsalltapin.com'>Partners</a></li>
                <li id='MenuRequest'> <img src='/Email.png' id='Email'/> <a href='https://letsalltapin.com'>Request A Demo</a></li>
            </ul>

            <div id='MenuIconsContainer'>
                <div id='MenuYoutube'> <a href='https://www.youtube.com/channel/UCLSpAM-bqwWBf9lzRSBPKoQ' target='blank'> <SlSocialYoutube /> </a> </div>
                <div id='MenuInstagram'> <a href='https://www.instagram.com/lets_tapin/?hl=en' target='blank'> <RxInstagramLogo /> </a> </div>
                <div id='MenuFacebook'> <a href='https://www.facebook.com/LetsTapInApp/' target='blank'> <FiFacebook /> </a> </div>
            </div>

        </div>
    <style>
    {`
        #Menu {
            display: flex;
            posistion: relative;
            background-color: #E4E6E9;
            width: 100%;
            height: 100vh;
            align-items: center;
            flex-direction: column;
        }
        #MenuHeaderContainer {
            display: flex;
            posistion: relative;
            width: 100%;
            height: 15%;
            justify-content: center;
            align-items: center;
        }
        #MenuLogoContainer {
            display: flex;
            posistion: relative;
            width: 80%;
            height: 70%;
            justify-content: flex-start;
            align-items: center;
        }
        #MenuLogo {
            display: flex;
            height: 100%;
            padding: 5px;
            background-color: #7C8DA5;
            cursor: pointer;
        }
        #MenuLogo:hover {
            opacity: 0.5;
        }
        #CancelContainer {
            display: flex;
            posistion: relative;
            width: 10%;
            height: 90%;
            justify-content: center;
            align-items: center;
        }
        #Cancel {
            display: flex;
            font-size: 60px;
            color: #7C8DA5;
        }
        #Cancel:hover {
            opacity: 0.5;
        }
        #MenuContainer {
            display: flex;
            posistion: relative;
            width: 90%;
            height: 70vh;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
        }
        #MenuTextContainer {
            display: flex;
            width: 100%;
            height: 80%;
            flex-direction: column;
            justify-content: space-evenly;
        }
        #MenuTextContainer li:hover {
            opacity: 0.5;
        }
        #Bell, #List, #Note, #Email {
            display: flex;
            padding-right: 5%;
        }
        #MenuApp, #MenuEvents, #MenuPartners, #MenuRequest {
            display: flex;
            font-size: 30px;
            font-family: PoppinsMedium;
            flex-direction: row;
            align-items: center;
        }
        #MenuIconsContainer {
            display: flex;
            width: 100%;
            height: 20%;
            justify-content: space-evenly;
            align-items: center;
        }
        #MenuYoutube, #MenuInstagram, #MenuFacebook {
            display: flex;
            font-size: 40px;
        }
    `}
    </style>
    </div>
)
}
export default Menu;