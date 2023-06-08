'use client'
import React, {useState} from 'react';
import Test from './Test';
import Background from './Background';

const Color: React.FC = () => {

    const [BackgroundColor, setBackgroundColor] = useState('');
    const [AccentColor, setAccentColor] = useState('');

    const getNewBackgroundColor = (newBackgroundColor: string) => {
        setBackgroundColor(newBackgroundColor);
    };
    const getNewAccentColor = (newAccentColor: string) => {
        setAccentColor(newAccentColor);
    };

return (

    <div>
        <Background getBackgroundColor={getNewBackgroundColor} getAccentColor={getNewAccentColor} />
        <Test BackgroundColor={BackgroundColor} AccentColor={AccentColor}/>
    </div>

)
}
export default Color;