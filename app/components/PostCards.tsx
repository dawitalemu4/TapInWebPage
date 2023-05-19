'use client'
import React from 'react';


const PostCards: React.FC = () => {
return (
    <div id='PostCards'>

        <div id='PostCardsHeaderContainer'>
            <div id='PostCardsTextContainer'>
                <p id='PostCardsText'>Events</p>
            </div>
            <div id='PostCardsFiltersContainer'>
                <p id='All'>All</p>
                <p id='Today'>Today</p>
            </div>
        </div>

        <div id='PostContainer'>
            <div id='Post'>
                <img src='/samplePostImage.jpg' id='PostImage'/>
                <div id='PostTextContainer'>
                    <div id='DateContainer'>
                        <p id='PostDateTop'>Day</p>
                        <p id='PostDateBottom'>Month Number</p>
                    </div>
                    <div id='PostTitleContainer'>
                        <p id='PostTitle'>Title</p>
                        <p id='PostLocation'>Location</p>
                    </div>
                </div>
            </div>
            <div id='Post'>
                <img src='/samplePostImage.jpg' id='PostImage'/>
                <div id='PostTextContainer'>
                    <div id='DateContainer'>
                        <p id='PostDateTop'>Day</p>
                        <p id='PostDateBottom'>Month Number</p>
                    </div>
                    <div id='PostTitleContainer'>
                        <p id='PostTitle'>Title</p>
                        <p id='PostLocation'>Location</p>
                    </div>
                </div>
            </div>
            <div id='Post'>
                <img src='/samplePostImage.jpg' id='PostImage'/>
                <div id='PostTextContainer'>
                    <div id='DateContainer'>
                        <p id='PostDateTop'>Day</p>
                        <p id='PostDateBottom'>Month Number</p>
                    </div>
                    <div id='PostTitleContainer'>
                        <p id='PostTitle'>Title</p>
                        <p id='PostLocation'>Location</p>
                    </div>
                </div>
            </div>
            <div id='Post'>
                <img src='/samplePostImage.jpg' id='PostImage'/>
                <div id='PostTextContainer'>
                    <div id='DateContainer'>
                        <p id='PostDateTop'>Day</p>
                        <p id='PostDateBottom'>Month Number</p>
                    </div>
                    <div id='PostTitleContainer'>
                        <p id='PostTitle'>Title</p>
                        <p id='PostLocation'>Location</p>
                    </div>
                </div>
            </div>
            <div id='Post'>
                <img src='/samplePostImage.jpg' id='PostImage'/>
                <div id='PostTextContainer'>
                    <div id='DateContainer'>
                        <p id='PostDateTop'>Day</p>
                        <p id='PostDateBottom'>Month Number</p>
                    </div>
                    <div id='PostTitleContainer'>
                        <p id='PostTitle'>Title</p>
                        <p id='PostLocation'>Location</p>
                    </div>
                </div>
            </div>
        </div>

    <style>
    {` 
    #PostCards {
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
        border: 1px solid red;
    }
    #PostCardsHeaderContainer {
        display: flex;
        position: relative;
        width: 95%;
        height: 20%;
        flex-direction: column;
        justify-content: flex-start;
        border: 1px solid blue;
    }
    #PostCardsTextContainer {
        display: flex;
        width: 50%;
        height: 50%;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid yellow;
    }
    #PostCardsText {
        font-family: PoppinsBold;
        color: white;
        font-size: 220%;
    }
    #PostCardsFiltersContainer {
        display: flex;
        width: 200px;
        justify-content: flex-start;
        border: 1px solid green;
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
    #PostContainer {
        display: flex;
        position: relative;
        width: 95%; 
        height: 80%;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid white;
    }
    #Post {
        display: flex;
        width: 300px;
        height: 350px;
        margin: 10px;
        flex-direction: column;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        border: 1px solid pink;
    }
    #PostImage {
        display: flex;
        width: 100%;
        border-radius: 10px 10px 0 0;
    }
    #PostTextContainer {
        display: flex;
        width: 100%;
        height: 16%;
        flex-direction: row;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 0 0 10px 10px;
        border: 1px solid orange;
    }
    #DateContainer {
        display: flex;
        width: 30%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    #PostDateTop {
        font-family: PoppinsSemiBold;
        color: white;
        font-size: 85%;
    } 
    #PostDateBottom {
        font-family: PoppinsSemiBold;
        color: white;
        font-size: 65%;
    }
    #PostTitleContainer {
        display: flex;
        width: 70%;
        flex-direction: column;
    }
    #PostTitle {
        font-family: PoppinsSemiBold;
        color: white;
        font-size: 45%;
    } 
    #PostLocation {
        font-family: PoppinsSemiBold;
        color: white;
        font-size: 45%;
    }
    @media

    `}
    </style>   
            
    </div>
    )
}
export default PostCards;