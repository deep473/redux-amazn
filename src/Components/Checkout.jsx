import Payment from "./Payment";
import {useState} from 'react'

function Checkout() {
  const [clicked, setClicked] = useState(false)
  function gotoPayment(){
    setClicked(true)
  }
  if (clicked == true)
    return <Payment />
  return (
    <>
      <h3>Welcome to Checkout Component!</h3>

      <button onClick = {gotoPayment}>
        Go to Payment
      </button>  
    </>
  );
}

export default Checkout;
