import React, { useEffect, useRef, useState } from 'react'

function HookUesRef2() {
    const [inputValue, setInputValue] = useState("")
    // const [count, setCount] = useState(0)
  const count = useRef(0)

   useEffect(() =>{
    count.current = count.current + 1
    //console.log(count.current)
  });
    // useEffect(() =>{
    //     setCount(count + 1)
    // },[]);
    return (
    <div>
        <label htmlFor=""> Enter NAme: </label>
    <input
     type="text" 
        placeholder='Enter AName'
        value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/>
    <h2>Rendewr Count: {count.current}</h2>
    <h3>Data: {inputValue}</h3>
    </div> 
  )
}

export default HookUesRef2