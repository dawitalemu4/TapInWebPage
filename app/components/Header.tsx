'use client'
import React, { useEffect, useState } from 'react';
import {FiFacebook} from 'react-icons/fi';
import {RxInstagramLogo} from 'react-icons/rx';
import {SlSocialYoutube} from 'react-icons/sl';


const Header: React.FC = () => {
    //function to make navbar bg black after scroll down
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    //used a function because I didn't want to put an <a> tag on an <img>
    const linkRedirect = () => {
        window.location.href = 'https://letsalltapin.com';
      }

    


return (
    <div id='Header'>
        
        <div id='HeaderContainer' className={scrolled ? 'scrolled' : ''}>
            <div id='TicketHomeLogoContainer'>
                <img src='/TicketHomeLogo.png' id='TicketHomeLogo' onClick={linkRedirect}/>
            </div>

        <ul id='NavbarTextContainer'>
            <li id='App'> <a href='https://letsalltapin.com'> App</a></li>
            <li id='Events'><a href='https://letsalltapin.com'>Events</a></li>
            <li id='Partners'><a href='https://letsalltapin.com'>Partners</a></li>
            <li id='Request'><a href='https://letsalltapin.com'>Request A Demo</a></li>
        </ul>

            <div id='HeaderIconsContainer'>
                <div id='Youtube'> <a href='https://www.youtube.com/channel/UCLSpAM-bqwWBf9lzRSBPKoQ' target='blank'> <SlSocialYoutube /> </a> </div>
                <div id='Instagram'> <a href='https://www.instagram.com/lets_tapin/?hl=en' target='blank'> <RxInstagramLogo /> </a> </div>
                <div id='Facebook'> <a href='https://www.facebook.com/LetsTapInApp/' target='blank'> <FiFacebook /> </a> </div>
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
        height: 85px;
        background-color: rgba(0, 0, 0, 0);
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
        background-color: rgba(0, 0, 0, 0);
        transition: 0.5s;
    }
    #HeaderContainer.scrolled {
        width: 100%;
        padding: 0 2.5%;
        background-color: rgba(0, 0, 0, 0.9);
    }
    #TicketHomeLogoContainer {
        display: flex;
        width: 10%;
        height: 90%;
    }
    #TicketHomeLogo {
        border-radius: 5%;
    }
    #TicketHomeLogo:hover {
        opacity: 0.5;
        cursor: pointer;
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
    #NavbarTextContainer li:hover {
        opacity: 0.5;
    }
    #HeaderIconsContainer {
        display: flex;
        justify-content: space-between;
        width: 10%;
        color: white;
    }
    #HeaderIconsContainer div {
        display: flex;
        justify-content: center;
        width: 15%;
        scale: 1.5;
    }
    #HeaderIconsContainer div:hover{
        opacity: 0.5;
    }

    @media (max-width: 768px) {
        #HeaderIconsContainer {
            width: 18%;
            margin-right: 2%;
    }
    #Facebook {
        margin-left: -5px;
    }
    #TicketHomeLogoContainer {
        width: 20%;
    }
    #NavbarTextContainer {
        width: 50%;
        justify-content: center;
    }
    #NavbarTextContainer li {
        font-size: 100%;
        padding: 5px;
    }
    }
    `}
    </style>       
    </div>
)
}
export default Header;