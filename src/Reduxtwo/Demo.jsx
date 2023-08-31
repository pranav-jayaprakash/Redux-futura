import React from 'react'
import { DataValues } from './Apiss';
import { useDispatch, useSelector } from 'react-redux';
import { UseSelector } from 'react-redux';


function Demo() {

    const Dataall = useSelector(state=>state.datas.info)
    console.log(Dataall,'$$')

    const dispatch = useDispatch()

    const display = (e)=>{
        e.preventDefault();
        DataValues(dispatch)
    }
  return (
    <div>
        <h1>Hello</h1>
        <button onClick={display}>CLICK</button>
    </div>
  )
}

export default Demo