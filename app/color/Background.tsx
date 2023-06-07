'use client'
import React, { useState, useEffect, useRef } from 'react';
import Color, { Palette } from "color-thief-react";

interface BackgroundProps {
  predominantColor: string;
}

const Background = () => {

  const [predominantColor, setPredominantColor] = useState("");


const Loading = () => <div>Loading...</div>;
  const imgSrc =
    "https://res.cloudinary.com/dxihhuhvk/image/upload/v1681060803/vlhcrktejaf6ehrdii5q.jpg";
    const hexToRGBA = (hexColor: string) => {
        const hex = hexColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const a = 0.1;
        return `rgba(${r},${g},${b},${a})`;
      };


return (
  <div className="App">
    {/* ... */}
    <Color src={imgSrc} crossOrigin="anonymous" format="hex">
      {({ data: predominantColorData, loading: predominantColorLoading }) => {
        if (predominantColorLoading) return <Loading />;
        const color = predominantColorData || ""; // Set a default value if predominantColorData is undefined
        return (
          <div>
            <p>Predominant color:</p>
            <strong style={{ color }}>{color}</strong>
            <div style={{ backgroundColor: hexToRGBA(color), width: '100px', height: '100px' }} />
          </div>
        );
      }}
    </Color>
          <Palette src={imgSrc} crossOrigin="anonymous" format="hex" colorCount={4}>
            {({ data: paletteData, loading: paletteLoading }) => {
              if (paletteLoading) return <Loading />;
              if (!Array.isArray(paletteData)) return null;
              return (
                <div>
                  <p>Palette:</p>
                  <ul>
                    {paletteData.map((color, index) => (
                      <li key={index} style={{ color: color }}>
                        <strong style={{ color: color }}>{color}</strong>
                        <div style={{ backgroundColor: hexToRGBA(color), width: '50px', height: '50px' }} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }}
          </Palette>
          <img src={imgSrc} alt="" style={{width: 450, height: 300}} />
          <style>
            {`
             p {
                color: white;
             }
            `}
          </style>
        </div>
      );
    };

export default Background;