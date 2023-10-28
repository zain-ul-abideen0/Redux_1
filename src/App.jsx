import React from 'react'
import "./App.css"
import { useDispatch, useSelector } from 'react-redux'
import {IncrementNumber,  DecrementNumber} from "./actions/Index" 

const App = () => {
  const Zain = useSelector((state)=>state.ChangeTheNumber);
  const dispatch=useDispatch();
  return (
    <>
    <div className='container'>

    <h1>Up AND DOWN</h1>
    <h4>USING REDUX</h4>

    <div className='quantity'>
    <button>
<a className='quantity_minus' title='decrement'
onClick={()=>dispatch( DecrementNumber())}><span> - </span></a>
    <input name='quantity' type='text' className='quantity_input' defaultValue={Zain} />
    <a className='quantity_plus' title='increment'
    onClick={()=>dispatch( IncrementNumber())}><span>+</span></a>
    </button>
</div>

    </div>
    </>
  )
}

export default App