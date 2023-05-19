import { Metadata } from 'next';
import Header from './components/Header';
import PostCards from './components/PostCards';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Events | Let's Tap In",
  description: "Let's All Tap In!",
};

export default function Home(){

    return (
      <html>
    <body>    
      <Header />
      <PostCards />
      <Footer />
      
    </body>
    </html>
    )
}