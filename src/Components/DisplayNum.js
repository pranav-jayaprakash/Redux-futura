import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { printnums } from './PrintNumSlice'
import {addnums} from './AddSlice'


function DisplayNum() {

    const display = useSelector((state)=> state.print.num)
    const dispatch = useDispatch()

    const open = useSelector((state)=>state.Adder.num3)


  return (
    <div>
        <h1>{display}</h1>
        <button onClick={()=>dispatch(printnums())}>Multi</button>

        <h1>{open}</h1>
        <button onClick={()=>dispatch(addnums())}>Add</button>
    </div>
  )
}

export default DisplayNum