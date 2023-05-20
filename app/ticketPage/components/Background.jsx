'use client'
import React, { useEffect, useRef } from 'react';
import Color, { Palette } from "color-thief-react";

const Background = () => {
return (
    <div className="Background">
    </div>
)
}
export default Background;

//const Loading = () => <div>Loading...</div>;
// const imgSrc =
//     "https://live.staticflickr.com/65535/50237066832_72c7290c5c_c.jpg";
//   return (
//     <div className="App">
//       <Color src={imgSrc} crossOrigin="anonymous" format="hex">
//         {({ data, loading }) => {
//           if (loading) return <Loading />;
//           return (
//             <div>
//               Predominant color: <strong>{data}</strong>
//             </div>
//           );
//         }}
//       </Color>
//       <Palette src={imgSrc} crossOrigin="anonymous" format="hex" colorCount={4}>
//         {({ data, loading }) => {
//           if (loading) return <Loading />;
//           return (
//             <div>
//               Palette:
//               <ul>
//                 {data.map((color, index) => (
//                   <li key={index} style={{ color: color }}>
//                     <strong>{color}</strong>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           );
//         }}
//       </Palette>
//       <img src={imgSrc} alt="" />
//     </div>
//   );