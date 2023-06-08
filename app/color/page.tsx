import { Metadata } from 'next';
import Color from './Color';

export const metadata: Metadata = {
  title: "Events | Let's Tap In",
  description: "Let's All Tap In!",
};

export default function Home(){

    return (
    <html>
    <body>
      <Color />
    </body>
    </html>
    )
}