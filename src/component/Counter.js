import React from 'react'
import { useState } from 'react'

function Counter() {

    const[count,setCount]=useState(0) //count=0

    let addCount=()=>{
        setCount(count+1)

    }
  return (
    <div>
        <h2>Functional</h2>
        <button onClick={addCount}>Counter</button>
        <h3>{count}</h3>



    </div>
  )
}

export default Counter