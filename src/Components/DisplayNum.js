import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { printnums } from './PrintNumSlice'


function DisplayNum() {

    const display = useSelector((state)=> state.print.num)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>{display}</h1>
        <button onClick={()=>dispatch(printnums())}>Multi</button>
    </div>
  )
}

export default DisplayNum