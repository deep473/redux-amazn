import Checkout from "./Checkout";
import {useState} from 'react'

function Cart() {
  const [clicked, setClicked] = useState(false)
  function gotoCheckout(){
    setClicked(true)
  }
  if (clicked == true)
    return <Checkout />
  return (
    <>
      <h3>Welcome to Cart Component!</h3>
      
      <button onClick = {gotoCheckout}>
        Go to Checkout
      </button>  
    </>
  );
}

export default Cart;
