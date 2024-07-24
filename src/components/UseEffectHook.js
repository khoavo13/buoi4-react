import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [count, setCount] = useState(1)
    const [number, setNumber] = useState(1)
    useEffect(()=>{
        console.log("use effect")
        const timer = setInterval(() => {
            setCount(pre => pre - 1)
            console.log("Side effect")
        }, 1000)
        return ()=>{
            clearInterval(timer) 
            console.log("Clean up")
        }
    },[])

    console.log("Render Component")
  return (
    <div>
        <h1>Tim hieu useEffect</h1>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count + 1)}>Count up</button>
        <p>Count: {number}</p>
        <button onClick={()=>setNumber(number + 1)}>Number up</button>
    </div>
  )
}
