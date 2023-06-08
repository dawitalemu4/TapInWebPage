'use client'
import React from 'react';
import Color from "color-thief-react";

interface BackgroundProps {
  getBackgroundColor: (BackgroundColor: string) => void;
  getAccentColor: (AccentColor: string) => void;
}

const Background: React.FC<BackgroundProps> = ({ getBackgroundColor, getAccentColor }) => {

  const imgSrc =
    "https://res.cloudinary.com/dxihhuhvk/image/upload/v1681060501/yxb17gkk4uroz1fuuo9i.png";
    const hexToRGBA = (hexColor: string, alpha: number) => {
      const hex = hexColor.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const a = alpha;
      return `rgba(${r},${g},${b},${a})`;
    };
    
return (
  <div style={{height: '70vh'}}>
      <Color src={imgSrc} crossOrigin="anonymous" format="hex">
        {({ data: predominantColorData }) => {
          const color = predominantColorData || '';
          const backgroundRGBA = hexToRGBA(color, 0.5);
          getBackgroundColor(backgroundRGBA);
          const accentRGBA = hexToRGBA(color, 0.95);
          getAccentColor(accentRGBA);

          return (
            <div>
            </div>
          );
        }}
      </Color>
  </div>
);
};

export default Background;