import { Metadata } from 'next';
import Menu from './Menu';

export const metadata: Metadata = {
  title: "Menu | Let's Tap In",
  description: "Let's All Tap In!",
};

export default function Home(){

    return (
    <html>
    <body>    
      <Menu />
    </body>
    </html>
    )
}