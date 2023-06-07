'use client'
import { useState } from 'react';
import Tickets from './Tickets';
import Cart from './Cart';
import Checkout from '../modalComponents/Checkout';
import Billing from '../modalComponents/Billing';
import Info from '../modalComponents/Info';
import Confirmed from '../modalComponents/Confirmed';

const Modal: React.FC = () => {
  const [showtickets, setshowTickets] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showConfirmed, setShowConfirmed] = useState(false);
  const [sum, setSum] = useState(0);

    const handleQuantityChange = (newSum: number) => {
        setSum(newSum);
    };

    const minusClick = () => {
        setshowTickets(true);
        setShowCart(false);
    };

    // if tickets is clicked, show cart modal
    const ticketsClick = () => {
        setshowTickets(true);
        setShowCart(true);
    };

  // if cart is clicked, show cart checkout modal
  const cartClick = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const checkoutClick = () => {
    setShowCheckout(false);
    setShowBilling(true);
    };

  // if billing is clicked, show info modal
  const billingClick = () => {
    setShowBilling(false);
    setShowInfo(true);
  };

  // if info is clicked, show confirmed modal
  const infoClick = () => {
    setShowInfo(false);
    setShowConfirmed(true);
  };

  // if confirmed is clicked, redirect to home page or '/'
  const confirmedClick = () => {
    window.location.href = '/ticket';
  };

  // if x is clicked, close checkout modal
  const checkoutCancel = () => {
    setShowCart(true);
    setShowCheckout(false);
  };

  // if billing back is clicked, go back to checkout modal
  const billingBack = () => {
    setShowCheckout(true);
    setShowBilling(false);
  };

  // if info back is clicked, go back to billing modal
  const infoBack = () => {
    setShowBilling(true);
    setShowInfo(false);
  };

  // if confirmed back is clicked, go back to info modal
  const confirmedBack = () => {
    setShowInfo(true);
    setShowConfirmed(false);
  };

  return (
    <div>
      {showtickets && <Tickets onPrevious={minusClick} onNext={ticketsClick} onQuantityChange={handleQuantityChange} />}
      {showCart && <Cart onNext={cartClick} sum={sum} />}
      {showCheckout && (
        <Checkout onNext={checkoutClick} onPrevious={checkoutCancel} />
      )}
      {showBilling && (
        <Billing onNext={billingClick} onPrevious={billingBack} />
      )}
      {showInfo && <Info onNext={infoClick} onPrevious={infoBack} />}
      {showConfirmed && (
        <Confirmed onNext={confirmedClick} onPrevious={confirmedBack} />
      )}
    </div>
  );
};

export default Modal;
