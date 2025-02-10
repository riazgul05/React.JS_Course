import React, { useEffect, useState } from 'react'

function FunctionEffect() {
    let [count, setCount] = useState(0)
    let [name, setName] = useState("Adil")

    // useEffect(() => {
    //     console.log("Hello I am Effect = " + count)
    // }, [])
    // useEffect(() => {
    //     console.log("Hello I am Effect = " + count)
    // }, [count, name])
    useEffect(() => {
        console.log("Hello I am Effect = " + count)
    }, [count])
    useEffect(() => {
        console.log("Hello: " + name)
    }, [ name])
    return (
        <div>
            <h1>{count}</h1>
            <h1>{name}</h1>
            <button onClick={() => setCount(count + 1)}>Update State</button>
            <button onClick={() => setName(name = "Kumar")}>Update Name</button>
        
        </div>
    )
}

export default FunctionEffect 