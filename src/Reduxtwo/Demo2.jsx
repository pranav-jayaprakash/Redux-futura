import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'

function Demo2() {

  const [first, setfirst] = useState([])

    const Dataget  = useSelector(state=>state.datas.info[0])

   const display =()=>{
   
    setfirst(Dataget)
    

   }


   useEffect(() => {
     display()
   },)
   
    
    console.log(first,'222')
  return (

    <div>
      {first.map((li)=>(
        <h1>{li.name}</h1>

      ))}
      
    </div>
  )
}

export default Demo2