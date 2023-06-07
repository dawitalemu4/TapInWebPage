import { Metadata } from 'next';
import Background from './Background';
import Overview from './Test';

export const metadata: Metadata = {
  title: "Events | Let's Tap In",
  description: "Let's All Tap In!",
};

export default function Home(){

    return (
    <html>
    <body>
      <Background />  
      <Overview />
    </body>
    </html>
    )
}