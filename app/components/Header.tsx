'use client'
import React from 'react';


const Header: React.FC = () => {
return (
    <div id='Header'>
        
        <div id='HeaderContainer'>
            <div id='TicketHomeLogoContainer'>
                <img src='/TicketHomeLogo.png' id='TicketHomeLogo'/>
            </div>

        <ul id='NavbarTextContainer'>
            <li id='App'>App</li>
            <li id='Events'>Events</li>
            <li id='Partners'>Partners</li>
            <li id='Request'>Request A Demo</li>
        </ul>

            <div id='HeaderIconsContainer'>
                <img src='/Youtube.png' id='Youtube'/>
                <img src='/Instagram.png' id='Instagram'/>
                <img src='/Facebook.png' id='Facebook'/>
            </div>

        </div>
    <style>
    {` 
    #Header {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 10%;
        background-color: transparent;
        z-index: 5;
        align-items: center;
        justify-content: center;
    }
    #HeaderContainer {
        display: flex;
        position: relative;
        width: 95%;
        height: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    #TicketHomeLogoContainer {
        display: flex;
        width: 10%;
        height: 90%;
    }
    #TicketHomeLogo {
        border-radius: 5%;
    }
    #NavbarTextContainer {
        display: flex;
        width: 50%;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        flex-wrap: wrap;
    }
    #NavbarTextContainer li {
        display: flex;
        font-family: PoppinsRegular;
        color: white;
        flex-shrink: 1;
    }
    #HeaderIconsContainer {
        display: flex;
        justify-content: space-between;
        width: 10%;
    }
    #HeaderIconsContainer img {
    
    }

    `}
    </style>       
    </div>
)
}
export default Header;