import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { updateWallet } from '../store'

export default function Payment() {
  const [clicked, setClicked] = useState(false)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  function handleOnClick(){
    setClicked(true)
    dispatch(updateWallet(1000))
  }
if(clicked){
  return(
    <>
      <Payment />
      <h4>Updated wallet : {user.wallet}</h4>
    </>
  )
}

  return (
    <div>
        <h3>Welcome to Payment Component!</h3>
        <h2>Initial wallet : {user.wallet}</h2>
        <button onClick={handleOnClick}>PAY 1000</button>
    </div>
  )
}
