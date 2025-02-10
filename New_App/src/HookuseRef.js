import React, { useEffect, useRef } from 'react'

function HookuseRef() {
    // const newRef = useRef();
    const firstRef = useRef();
    const lastRef = useRef();
    useEffect(() => {
        console.log(firstRef);
        console.log(lastRef);
        firstRef.current.focus();
        firstRef.current.style.color = "red";
        firstRef.current.style.backgroundColor = "Yellow";

        // console.log('Full Name =', firstRef.current.value,' ', lastRef.current.value);

        // console.log(newRef.current.innerHTML);
    });
    const handleHeading = () => {
        // newRef.current.style.color = 'red';
        // newRef.current.style.fontFamily = 'cooper';
        // newRef.current.hidden = true;

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Full Name =', firstRef.current.value, lastRef.current.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter First Name</label>
                <input type="text" ref={firstRef} placeholder='First Name' />
                <br /><br />
                <label htmlFor="">Enter Last Name</label>
                <input type="text" ref={lastRef} placeholder='Last Name' />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
            {/* <h1 ref={newRef}>Learning Never Ends</h1>
            <button onClick={handleHeading}>Click</button> */}
        </div>
    )
}

export default HookuseRef