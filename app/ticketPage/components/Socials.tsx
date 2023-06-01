'use client'
import React from 'react';
import {FiFacebook} from 'react-icons/fi';
import {RxInstagramLogo} from 'react-icons/rx';
import {SlSocialYoutube} from 'react-icons/sl';


const Socials: React.FC = () => {
    
   //function to assign client's links from api to each icon div

   //function to assign client's gallery images from api to each image div

return (
    <div id='Socials'>

        <div id="SocialsContainer">

            <div id="SocialIcons">
                <div id='Youtube'> <a href='https://www.youtube.com/channel/UCLSpAM-bqwWBf9lzRSBPKoQ' target='blank'> <SlSocialYoutube /> </a> </div>
                <div id='Instagram'> <a href='https://www.instagram.com/lets_tapin/?hl=en' target='blank'> <RxInstagramLogo /> </a> </div>
                <div id='Facebook'> <a href='https://www.facebook.com/LetsTapInApp/' target='blank'> <FiFacebook /> </a> </div>
            </div>

            <div id="GalleryContainer">
                <div id="Gallery">
                    <img src="/sampleTicketImage.jpg"/>
                    <img src="/sampleTicketImage.jpg"/>
                    <img src="/sampleTicketImage.jpg"/>
                </div>

        </div>

    </div>
    <style>
    {` 
    #Socials {

    }
    #SocialsContainer {
        
    }
    #SocialIcons {

    }
    #GalleryContainer {

    }
    #Gallery {

    }
    #Gallery img {
    
    }
    `}
    </style>

    </div>
    )
}
export default Socials;