'use client'
import React, {useState, useEffect} from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

interface TicketsProps {
    onNext: () => void;
    onPrevious: () => void;
    onQuantityChange: (sum: number) => void;
  }

const Tickets: React.FC<TicketsProps> = ({ onNext, onPrevious, onQuantityChange }) => {


  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const [quantity4, setQuantity4] = useState(0);

  const addQuantity1 = () => {
    setQuantity1(quantity1 + 1);
  };

  const subtractQuantity1 = () => {
    if (quantity1 > 0) {
      setQuantity1(quantity1 - 1);
    }
  };

  const addQuantity2 = () => {
    setQuantity2(quantity2 + 1);
  };

  const subtractQuantity2 = () => {
    if (quantity2 > 0) {
      setQuantity2(quantity2 - 1);
    }
  };

  const addQuantity3 = () => {
    setQuantity3(quantity3 + 1);
  };

  const subtractQuantity3 = () => {
    if (quantity3 > 0) {
      setQuantity3(quantity3 - 1);
    }
  };

  const addQuantity4 = () => {
    setQuantity4(quantity4 + 1);
  };

  const subtractQuantity4 = () => {
    if (quantity4 > 0) {
      setQuantity4(quantity4 - 1);
    }
  };

  const quantitySum = () => {
    const sum = quantity1 + quantity2 + quantity3 + quantity4;
    if (sum === 0) {
      onPrevious();
    } else {
      onNext();
    }
    return sum;
  };

    useEffect(() => {
        const sum = quantitySum();
        onQuantityChange(sum);
      }, [quantity1, quantity2, quantity3, quantity4]);
    
      
  
    //function to assign api variables to each div (prices, ticket names, etc.)
    
return (
 <div id='Tickets'>

    <div id="TicketsHeaderContainer">
        <h1 id='TicketsHeader'>Tickets</h1>
    </div>

    <div id='TicketsContainer'>

        <div id='TicketOption1Container'>
            <div id='PriceContainer'>
                <p id='Price'>$15</p>
            </div>
            <div id='TicketTypeContainer'>
                <h1 id='TicketTypeHeader'>Pre Sale General Admission Ticket</h1>
                <p id='TicketTypeText'>General Admission Ticket </p>
            </div>
            <div id='QuantityContainer'>
                <button id='Minus'><AiOutlineMinusCircle onClick={subtractQuantity1}/></button>
                <h2 id='QuantityAmount'>{quantity1}</h2>
                <button id='Plus'><AiOutlinePlusCircle onClick={addQuantity1}/></button>
            </div>
        </div>

        <div id='TicketOption2Container'>
            <div id='PriceContainer'>
                <p id='Price'>$15</p>
            </div>
                <div id='TicketTypeContainer'>
                <h1 id='TicketTypeHeader'>Pre Sale General Admission Ticket</h1>
                <p id='TicketTypeText'>General Admission Ticket </p>
            </div>
            <div id='QuantityContainer'>
                <button id='Minus'><AiOutlineMinusCircle onClick={subtractQuantity2}/></button>
                <h2 id='QuantityAmount'>{quantity2}</h2>
                <button id='Plus'><AiOutlinePlusCircle onClick={addQuantity2}/></button>      
            </div>
        </div>

        <div id='TicketOption3Container'>
            <div id='PriceContainer'>
                <p id='Price'>$15</p>
            </div>
            <div id='TicketTypeContainer'>
                <h1 id='TicketTypeHeader'>Pre Sale General Admission Ticket</h1>
                <p id='TicketTypeText'>General Admission Ticket </p>
            </div>
            <div id='QuantityContainer'>
                <button id='Minus'><AiOutlineMinusCircle onClick={subtractQuantity3}/></button>
                <h2 id='QuantityAmount'>{quantity3}</h2>
                <button id='Plus'><AiOutlinePlusCircle onClick={addQuantity3}/></button>       
            </div>
        </div>

        <div id='TicketOption4Container'>
            <div id='PriceContainer'>
                <p id='Price'>$15</p>
            </div>
            <div id='TicketTypeContainer'>
                <h1 id='TicketTypeHeader'>Pre Sale General Admission Ticket</h1>
                <p id='TicketTypeText'>General Admission Ticket </p>
            </div>
            <div id='QuantityContainer'>
                <button id='Minus'><AiOutlineMinusCircle onClick={subtractQuantity4}/></button>
                <h2 id='QuantityAmount'>{quantity4}</h2>
                <button id='Plus'><AiOutlinePlusCircle onClick={addQuantity4}/></button>
            </div>
        </div>

    </div>
    <style>
    {` 
    #Tickets {
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 65vh;
        background-color: transparent;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    #TicketsHeaderContainer {
        display: flex;
        width: 70%;
        height: 20%;
        align-items: center;
    }
    #TicketsHeader {
        color: #2EBC94;
        font-size: 34px;
        font-family: PoppinsBold;
    }
    #TicketsContainer {
        display: flex;
        width: 70%;
        height: 80%;
        align-items: center;
        flex-direction: column;
        background-color: #4E4F5A;
        border: 3px solid #2EBC94;
        border-radius: 20px;
    }
    #TicketOption1Container {
        display: flex;
        width: 95%;
        height: 25%;
        align-items: center;
        border-bottom: 1px solid white;
    }
    #TicketOption2Container {
        display: flex;
        width: 95%;
        height: 25%;
        align-items: center;
        border-bottom: 1px solid white;
    }
    #TicketOption3Container {
        display: flex;
        width: 95%;
        height: 25%;
        align-items: center;
        border-bottom: 1px solid white;
    }
    #TicketOption4Container {
        display: flex;
        width: 95%;
        height: 25%;
        align-items: center;
    }
    #PriceContainer {
        display: flex;
        width: 10%;
        margin-right: 2%;
        justify-content: center;
        align-items: center;
    }
    #Price {
        color: white;
        font-size: 34px;
        font-family: PoppinsBold;
    }
    #TicketTypeContainer {
        display: flex;
        width: 70%;
        height: 100%;
        justify-content: center;
        flex-direction: column;
    }
    #TicketTypeHeader {
        color: white;
        font-size: 20px;
        font-family: PoppinsBold;
    }
    #TicketTypeText {
        color: white;
        font-size: 17px;
        font-family: PoppinsRegular;
    }
    #QuantityContainer {
        display: flex;
        width: 20%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    #Minus {
        color: white;
        font-size: 34px;
        cursor: pointer;
    }
    #QuantityAmount {
        color: white;
        font-size: 34px;
        font-family: PoppinsBold;
        margin: 0 10%;
    }
    #Plus {
        color: white;
        font-size: 34px;
        cursor: pointer;
    }
    @media (max-width: 890px) {
        #Tickets {
            height: 45vh;
        }
        #TicketsHeaderContainer {
            width: 90%;
            justify-content: center;
        }
        #TicketsHeader {
            font-size: 24px;
        }
        #TicketsContainer {
            width: 90%;
        }
        #Price {
            font-size: 17px;
        }
        #TicketTypeHeader {
            font-size: 11px;
        }
        #TicketTypeText {
            font-size: 10px;
        }
        #Minus, #Plus, #QuantityAmount {
            font-size: 20px;
        }
    }
    `}
    </style>
    </div>
    )
}
export default Tickets;