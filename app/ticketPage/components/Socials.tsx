'use client'
import React from 'react';
import {RxInstagramLogo} from 'react-icons/rx';
import {AiFillYoutube} from 'react-icons/ai';
import {FaTiktok} from 'react-icons/fa';
import {IoLogoTwitter} from 'react-icons/io';
import {BsFacebook, BsSnapchat} from 'react-icons/bs';


const Socials: React.FC = () => {
    
   //function to assign client's links from api to each icon div

   //function to assign client's gallery images from api to each image div

return (
    <div id='Socials'>

        <div id="SocialsHeaderContainer">
            <h1 id='SocialsHeader'>Our Socials</h1>
        </div>

        <div id="SocialsContainer"> 
            <div id='Instagram'> <a href='https://www.instagram.com/lets_tapin/?hl=en' target='blank'> <RxInstagramLogo /> </a> </div>
            <div id='Youtube'> <a href='https://www.youtube.com/channel/UCLSpAM-bqwWBf9lzRSBPKoQ' target='blank'> <AiFillYoutube /> </a> </div>
            <div id='TikTok'> <a href='https://www.facebook.com/LetsTapInApp/' target='blank'> <FaTiktok /> </a> </div>
            <div id='Twitter'> <a href='https://www.facebook.com/LetsTapInApp/' target='blank'> <IoLogoTwitter /> </a> </div>
            <div id='Facebook'> <a href='https://www.facebook.com/LetsTapInApp/' target='blank'> <BsFacebook /> </a> </div>
            <div id='Snapchat'> <a href='https://www.facebook.com/LetsTapInApp/' target='blank'> <BsSnapchat /> </a> </div>
        </div>

        <div id="GalleryContainer">
            <img src="/test1.jpg"/>
            <img src="/test2.jpg"/>
            <img src="/test3.jpg"/>
        </div>

    <style>
    {` 
    #Socials {
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        margin-top: 3%;
        width: 100%;
        height: 60vh;
        background-color: transparent;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
    }
    #SocialsHeaderContainer {
        display: flex;
        width: 70%;
        height: 10%;
        align-items: center;
    }
    #SocialsHeader {
        color: green;
        font-size: 34px;
        font-family: PoppinsBold;
    }
    #SocialsContainer {
        display: flex;
        width: 70%;
        height: 25%;
        align-items: center;
        flex-direction: row;
    }
    #SocialsContainer div {
        display: flex;
        width: 15%;
        height: 100%;
        align-items: center;
        justify-content: flex-start;
        color: white;
        font-size: 34px;
    }
    #SocialsContainer div:hover {
        opacity: 0.5;
    }
    #GalleryContainer {
        display: flex;
        width: 100%;
        height: 60%;
        margin-left: 30%;
        align-items: center;
        flex-direction: row;
        overflow-y: hidden;
        padding-bottom: 2%;
    }
    #GalleryContainer::-webkit-scrollbar {
        height: 0.5em;
        background-color: #F5F5F5;
    }  
    #GalleryContainer::-webkit-scrollbar-thumb {
        background-color: black;
    }
    #GalleryContainer img {
        height: 100%;
        border: 1px solid green;
        border-radius: 20px;
        margin-right: 10px;
    }
    #GalleryContainer img:hover {
        opacity: 0.5;
        cursor: pointer;
    }
    @media (max-width: 890px) {
        #Socials {
            margin-top: 5%;
            height: 45vh;
        }
        #SocialsHeaderContainer {
            width: 90%;
            justify-content: center;
            align-items: center;
        }
        #SocialsHeader {
            font-size: 24px;
        }
        #SocialsContainer {
            width: 90%;
        }
        #SocialsContainer div {
            width: 20%;
            justify-content: center;
        }
        #GalleryContainer {
            width: 100%;
            margin-left: 10%;
        }
    }
    `}
    </style>

    </div>
    )
}
export default Socials;