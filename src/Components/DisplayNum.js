import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { printnums } from './PrintNumSlice'
import {addnums,subnums,divnums,multinums} from './AddSlice'



function DisplayNum() {

    const display = useSelector((state)=> state.print.num)
    const dispatch = useDispatch()

    const open = useSelector((state)=>state.Adder.num3)
    const open1 = useSelector((state)=>state.Adder.num1)
    const open2 = useSelector((state)=>state.Adder.num2)


  return (
    <div>
        <h1>{display}</h1>
        <button onClick={()=>dispatch(printnums())}>Multi</button>

        <h1>Num1 is {open1} Num2 is {open2}</h1>
        <h1>{open}</h1>
        <button onClick={()=>dispatch(addnums())}>Add</button>
        <button onClick={()=>dispatch(subnums())}>Subtract</button>
        <button onClick={()=>dispatch(divnums())}>Divide</button>
        <button onClick={()=>dispatch(multinums())}>Multiply</button>
    </div>
  )
}

export default DisplayNum