import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TicketInfo from './components/TicketInfo';
import Socials from './components/Socials';
import Overview from './components/Overview';
import Modal from './components/Modal';

export const metadata: Metadata = {
  title: "Ticket | Let's Tap In",
  description: "Let's All Tap In!",
};

export default function Home(){

    return (
    <html>
    <body>    
      <Header />
      <TicketInfo />
      <Overview />
      <Modal />
      <Socials />
      <Footer />
    </body>
    </html>
    )
}