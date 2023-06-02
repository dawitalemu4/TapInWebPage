'use client'
import React from 'react';
import {FiFacebook} from 'react-icons/fi';
import {RxInstagramLogo} from 'react-icons/rx';
import {SlSocialYoutube} from 'react-icons/sl';


const Footer: React.FC = () => {
return (
    <div id='Footer'>
        
        <div id='FooterContainer'>

            <div id='FooterTextContainer'>
                <p id='FooterText'>
                    <a href='https://www.letsalltapin.com' target='blank' id='TermsLink'>Terms & Conditions</a> - <a href='https://www.letsalltapin.com' target='blank' id='PrivacyLink'>Privacy Policy</a>
                    <br/>
                    © 2023 Let's Tap In LLC. All Rights Reserved.
                </p>
            </div>

            <div id='FooterIconsContainer'>
                <div id='Youtube'> <a href='https://www.youtube.com/channel/UCLSpAM-bqwWBf9lzRSBPKoQ' target='blank'> <SlSocialYoutube /> </a> </div>
                <div id='Instagram'> <a href='https://www.instagram.com/lets_tapin/?hl=en' target='blank'> <RxInstagramLogo /> </a> </div>
                <div id='Facebook'> <a href='https://www.facebook.com/LetsTapInApp/' target='blank'> <FiFacebook /> </a> </div>
            </div>

        </div>
    <style>
    {` 
    #Footer {
        display: flex;
        position: relative;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 160px;
        background-color: transparent;
        z-index: 5;
        align-items: center;
        justify-content: center;
    }
    #FooterContainer {
        display: flex;
        position: relative;
        width: 95%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #FooterTextContainer {
        display: flex;
        width: 80%;
        flex-direction: row;
        justify-content: center;
        text-align: center;
    }
    #FooterText {
        font-family: PoppinsRegular;
        color: white;
        font-size: 18px;
    }
    #FooterIconsContainer {
        display: flex;
        justify-content: space-between;
        width: 10%;
        color: white;
        margin-top: 10px;
    }
    #FooterIconsContainer div {
        display: flex;
        justify-content: center;
        width: 15%;
        scale: 1.5;
    }
    #FooterIconsContainer div:hover{
        opacity: 0.5;
    }
    #TermsLink, #PrivacyLink {
        text-decoration: underline;
        color: white;
    }
    #TermsLink:hover, #PrivacyLink:hover {
        opacity: 0.5;
    }

    @media (max-width: 768px) {
        #FooterIconsContainer {
            width: 30%;
            margin-bottom: 10px;
    }
    #FooterTextContainer { 
        width: 100%;
    }
    }
    `}
    </style>   
            
    </div>
)
}
export default Footer;