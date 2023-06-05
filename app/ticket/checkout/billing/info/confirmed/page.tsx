import { Metadata } from 'next';
import Header from '../../../../../components/Header';
import Footer from '../../../../../components/Footer';
import TicketInfo from '../../../../components/TicketInfo';
import Tickets from '../../../../components/Tickets';
import Socials from '../../../../components/Socials';
import Overview from '../../../../components/Overview';
import Confirmed from './Confirmed';

export const metadata: Metadata = {
  title: "Confirm | Let's Tap In",
  description: "Let's All Tap In!",
};

export default function Home(){

    return (
    <html>
    <body>    
      <Header />
      <TicketInfo />
      <Overview />
      <Tickets />
      <Socials />
      <Footer />
      <Confirmed />
    </body>
    </html>
    )
}