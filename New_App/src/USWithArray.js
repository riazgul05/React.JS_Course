import React, { useState } from 'react'

function USWithArray() {
    let num = [11, 22, 33, 44];
    let [numbers, setNumbers] = useState(num)
    // let changeList = () =>{
    //     setNumbers([55,66,77,88])
    // }
    let changeList = () =>{
        setNumbers(previousState =>{
            return[
                ...previousState,
               Math.floor( Math.random() * 50 )
               // 98
            ]
        });
    }
    return (
        <div>
            <ul>
                {numbers.map((n,i) => <li key={i}>{n}</li>)}
            </ul>
            <button onClick={changeList}>Change Array</button>
        </div>
    )
}

export default USWithArray