'use client'
import React from 'react';


const Footer: React.FC = () => {
return (
    <div id='Footer'>
        
        <div id='FooterContainer'>

        <div id='FooterTextContainer'>
            <p id='FooterText'>
            <a href='https://www.letsalltapin.com' target='blank' id='TermsLink'>Terms & Conditions</a> - <a href='https://www.letsalltapin.com' target='blank' id='PrivacyLink'>Privacy Policy</a>
                <br/>
                <br/>
                © 2023 Let's Tap In LLC. All Rights Reserved.
            </p>
        </div>

        <div id='FooterIconsContainer'>
            <img src='/Youtube.png' id='Youtube'/>
            <img src='/Instagram.png' id='Instagram'/>
            <img src='/Facebook.png' id='Facebook'/>
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
        width: 20%;
    }
    #FooterIconsContainer img {

    }
    #TermsLink, #PrivacyLink {
        text-decoration: underline;
        color: white;
    }
    #TermsLink:hover, #PrivacyLink:hover {
        opacity: 0.5;
    }

    `}
    </style>   
            
    </div>
)
}
export default Footer;