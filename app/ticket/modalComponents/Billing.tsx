'use client'
import React, {useState} from 'react';
import {IoIosArrowBack} from 'react-icons/io';

interface BillingProps {
    onNext: () => void;
    onPrevious: () => void;
  }

  const Billing: React.FC<BillingProps> = ({ onNext, onPrevious }) => {

    //function to navigate back wehen x is clicked

    //function to pull info from 

    const [cardNumber, setCardNumber] = useState('');
    const [month, setMonth] = useState('');
    const [cvv, setCVV] = useState('');
    const [zip, setZip] = useState('');
    const [promo, setPromo] = useState('');
    const [showWarning, setShowWarning] = useState(false);
  
    const validateForm = () => {
        if (cardNumber === '' || month === '' || cvv === '' || zip === '') {
          setShowWarning(true);
          setTimeout(() => {
            setShowWarning(false);
          }, 3000); 
        } else {
          onNext();
        }
      };

    const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputCardNumber = event.target.value;
        const formattedCardNumber = inputCardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ');

        setCardNumber(formattedCardNumber.trim());
    };

    const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      let formattedValue = value;

      if (value.length === 2 && !value.includes("/")) {
        formattedValue = `${value}/`;
      }

      setMonth(formattedValue);
    };

    const handleCVVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCVV(event.target.value);
    };

    const handleZipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setZip(event.target.value);
    };

    const handlePromoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPromo(event.target.value);
    };

    const numberOnly = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== "Backspace" && isNaN(Number(event.key))) {
        event.preventDefault();
      }
    };  
    


return (
    <div id='Billing'>

        <div id='BillingBackContainer'>
            <button onClick={onPrevious}><IoIosArrowBack id='BillingBack' /></button>
        </div>

        <div id='BillingContainer'>

            <div id='CheckoutInfoContainer'>

                <div id='TicketIconContainer'>
                    <img id='TicketIcon' src='/TicketIcon.png' />
                </div>

                <div id='CheckoutInfoTextContainer'>

                    <div id='CheckoutInfoHeaderContainer'>
                        <h1 id='CheckoutInfoHeaderText'>General Admission Ticket</h1>
                    </div>

                    <div id='CheckoutInfoSubTextContainer'>

                        <div id='CheckoutInfoQuantityContainer'>    
                            <h2 id='QuantityText'>x1</h2>
                        </div>
                        <div id='CheckoutInfoPriceContainer'>
                            <h3 id='PriceText'>$15.00</h3>
                        </div>

                    </div>

                </div>

            </div>

            <div id='BillingInfoContainer'>

                <input id='BillingCardNumberInput' required maxLength={19} 
                placeholder='Card Number' value={cardNumber} onChange={handleCardNumberChange}
                onKeyDown={numberOnly}/>
                      
                <div id='MonthAndCVVContainer'>

                    <input id='BillingMonthInput' required placeholder='MM/YY' maxLength={5}
                    value={month} onChange={handleMonthChange} onKeyDown={numberOnly}/>

                    <input id='BillingCVVInput' required maxLength={3} type='password' 
                    value={cvv} onChange={handleCVVChange} placeholder='CVV' onKeyDown={numberOnly}/>
                    
                </div>

                <input id='BillingZipInput' required maxLength={5} placeholder='Zip Code'
                value={zip} onChange={handleZipChange} onKeyDown={numberOnly}/>

                <input id='BillingPromoInput' placeholder='Promo Code'
                value={promo} onChange={handlePromoChange}/>
                        
            </div>    

            <div id='BillingTotalContainer'>

                <div id='BillingTicketTotalContainer'>
                    <div id='BillingTicketContainer'>
                        <p id='BillingTicket'>Ticket</p>
                    </div>
                    <div id='BillingTicketPriceContainer'>
                        <p id='BillingTicketPrice'>$9.00</p>
                    </div>
                </div>
                <div id='BillingServiceContainer'>
                    <div id='BillingServiceFeeContainer'>
                        <p id='BillingServiceFee'>Service Fee</p>
                    </div>
                    <div id='BillingServicePriceContainer'>
                        <p id='BillingServicePrice'>$10.00</p>
                    </div>
                </div>
                <div id='BillingSubTotalContainer'>
                    <div id='BillingSubTotalTextContainer'>
                        <p id='BillingSubTotalText'>Subtotal</p>
                    </div>
                    <div id='BillingSubTotalPriceContainer'>
                        <p id='BillingSubTotalPrice'>$21.00</p>
                    </div>
                </div>

            </div>

        </div>

        <div id='BillingButtonContainer'>

            {showWarning && (
            <p id='Warning' style={{ display: 'flex', color: 'red' }}>
            Please Fill Out All Fields</p>
            )}

            <button id='BillingButton' onClick={validateForm}>
                <h1 id='BillingButtonText'>Next</h1>
            </button>

        </div>

    <style>
    {`
    #Billing {
        display: flex;
        position: fixed;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 70vh;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        z-index: 10;
    }
    #BillingBackContainer {
        display: flex;
        width: 5%;
        height: 15%;
        justify-content: center;
        align-items: center;
    }
    #BillingBack {
        color: white;
        font-size: 40px;
    }
    #BillingContainer {
        display: flex;
        width: 100%;
        height: 66%; 
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    #CheckoutInfoContainer {
        display: flex;
        width: 40%;
        margin-bottom: 1%;
        margin-top: -4%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    #TicketIconContainer {
        display: flex;
        width: 13%;
        height: 70%;
        margin-right: 3%;
    }
    #TicketIcon {

    }
    #CheckoutInfoTextContainer {
        display: flex;
        width: 80%;
        flex-direction: column;
    }
    #CheckoutInfoContainer {
        display: flex;
        flex-direction: row;
    }
    #CheckoutInfoHeaderContainer {
        display: flex;
        width: 100%;
        height: 50%;
        margin-bottom: 1%;
    }
    #CheckoutInfoHeaderText {
        color: white;
        font-size: 20px;
        font-family: PoppinsBold;
    }
    #CheckoutInfoSubTextContainer {
        display: flex;
        width: 100%;
        height: 35%;
        justify-content: space-between;
    }
    #CheckoutInfoQuantityContainer, #BillingPriceContainer {
        display: flex;
    }
    #QuantityText, #PriceText {
        color: white;
        font-size: 17px;
        font-family: PoppinsSemiBold;
    }
    #BillingInfoContainer {
        display: flex;
        width: 40%;
        margin-bottom: 1%;
        flex-direction: column;
    }
    #BillingCardNumberInput, #BillingZipInput, #BillingPromoInput {
        padding: 2%;
        margin: 1%;
        color: white;
        background-color: black;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        font-family: PoppinsSemiBold;
    }
    #MonthAndCVVContainer {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    #BillingMonthInput, #BillingCVVInput {
        width: 47%;
        padding: 2%;
        margin: 1%;
        color: white;
        background-color: black;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        font-family: PoppinsSemiBold;
    }
    #BillingTotalContainer {
        display: flex;
        width: 38%;
        flex-direction: column;
    }
    #BillingTicketTotalContainer, #BillingServiceContainer, #BillingSubTotalContainer {
        display: flex;
        width: 100%;
    }
    #BillingTicketContainer, #BillingServiceFeeContainer, #BillingSubTotalTextContainer {
        display: flex;
        width: 50%;
    }
    #BillingTicketPriceContainer, #BillingServicePriceContainer, #BillingSubTotalPriceContainer {
        display: flex;
        width: 50%;
        justify-content: flex-end;
    }
    #BillingTicket, #BillingServiceFee, #BillingTicketPrice, #BillingServicePrice {
        display: flex;
        color: white;
        font-size: 17px;
        font-family: PoppinsSemiBold;
    } 
    #BillingSubTotalText, #BillingSubTotalPrice {
        display: flex;
        color: green;
        font-size: 17px;
        font-family: PoppinsSemiBold;
    }
    #BillingButtonContainer {
        display: flex;
        width: 100%;
        height: 15%;
        justify-content: center;
        align-items: center;
    }
    #Warning {
        position: absolute;
        bottom: 18%;
        font-family: PoppinsBold;
        transition: 1s ease-in-out;
    }
    #BillingButton {
        display: flex;
        width: 25%;
        height: 80%;
        justify-content: center;
        align-items: center;
        background-color: #2EBC94;
        border-radius: 15% / 95%;
    }
    #BillingButtonText {
        color: white;
        font-size: 20px;
        font-family: PoppinsBold;
    }
    #BillingButton:hover {
        opacity: 0.8;
    }
    @media (max-width: 890px) {
        #BillingBackContainer {
            width: 15%;
        }
        #CheckoutInfoContainer {
            width: 95%;
            margin-bottom: 5%;
        }
        #TicketIconContainer {
            width: 20%;justify-content: flex-start;
            align-items: center;
        }
        #TicketIcon {
            width: 70%;
            height: 90%;
        }
        #BillingInfoContainer {
            width: 95%;
        }
        #BillingTotalContainer {
            width: 95%;
        }
        #BillingButton {
            width: 90%;
            height: 79.5%;
        }
        #Warning {
            font-size: 15px;
        }
    }
    `}
    </style>
    </div>
)
}
export default Billing;