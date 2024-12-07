import Cart from "./Cart";
import {useState} from 'react'

function Selection() {
  const [clicked, setClicked] = useState(false)
  function gotoCart(){
    setClicked(true)
  }
  if (clicked == true)
    return <Cart />
  return (
    <>
      <h3>Welcome to Select Component!</h3>

      <button onClick = {gotoCart}>
        Go to Cart
      </button>  
    </>
  );
}

export default Selection;
