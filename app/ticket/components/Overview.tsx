'use client'
import React from 'react';

const Overview: React.FC = () => {

return (

    <div id='Overview'>

        <div id='OverviewContainer'>
            <div id='OverviewHeaderContainer'>
                <h1 id='OverviewHeader'>Overview</h1>
            </div>
            <div id='OverviewTextContainer'>
                <p id='OverviewText'>Lorem ipsum dolor sit amet consectetur. Donec odio sit risus pulvina odio ligula turpis scelerisque dignissim. Quis non duis fames purus. Quis quis rhoncus malesuada convallis purus consequat ac.Lorem ipsum dolor sit amet consectetur. Donec odio sit risus pulvinar odio ligula turpis scelerisque dignissim. Quis non duis fames purus. Quis quis rhoncus malesuada convallis purus consequat ac. </p>
            </div>
        </div>
    <style>
    {`
    #Overview {
        display: flex;
        position: relative;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    #OverviewContainer {
        display: flex;
        position: relative;
        width: 70%;
        height: 70%;
        font-family: PoppinsBold;
        flex-direction: column;
        margin-top: 5%;
    }
    #OverviewHeader {
        color: #2EBC94;
        font-size: 34px;
        margin-bottom: 3%;
    }
    #OverviewHeaderContainer {
        display: flex;
        position: relative;
        width: 70%;
    }
    #OverviewTextContainer {
        display: flex;
        position: relative;
        margin-bottom: 3%;
    }
    #OverviewText::-webkit-scrollbar {
        width: 0.2em;
    }
    #OverviewText::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, .2);
        border-radius: 90% / 3%;
    }
    #OverviewText {
        display: flex;
        position: relative;
        color: white;
        font-size: 20px;
        height: 150px;
        overflow-y: scroll;
    }
    @media (max-width: 890px) {
        #OverviewContainer {
            width: 80%;
            height: 30%;
            justify-content: center;
            align-items: center;
        }
        #OverviewHeaderContainer {
            width: 100%;
            justify-content: center;
        }
        #OverviewHeader {
            font-size: 24px;
        }
        #Overview {
            text-align: center;
            font-size: 12px;
        }
    }
    `}
    </style>
    </div>
)
}
export default Overview;