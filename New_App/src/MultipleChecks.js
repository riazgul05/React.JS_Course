import React, { useState } from 'react'

function MultipleChecks() {
    const [fruitsArray, setFruitsArray] = useState([])
    const handleChange = (e) =>{
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked);
        if(checked)
            {
                setFruitsArray([
                    ...fruitsArray, value
                ])
        }
        else
        {
            // setFruitsArray(fruitsArray.filter( (e) => console.log('e =>' + e, 'Value =>' + value) ));
            setFruitsArray(fruitsArray.filter( (e) => (e !== value)))
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(fruitsArray)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor=""> Select Fruits: </label>
            <input type="checkbox" name='fruits' value="Apple" onChange={handleChange}/>
            <label htmlFor="">&nbsp;  Apple </label>
              &nbsp;  
            <input type="checkbox" name='fruits' value="Mango" onChange={handleChange} />
            <label htmlFor="">&nbsp;  Mango </label>
            &nbsp;  
            <input type="checkbox" name='fruits' value="Banana"onChange={handleChange} />
            <label htmlFor="">&nbsp;  Banana </label>
            &nbsp;  
            <input type="checkbox" name='fruits' value="Graps" onChange={handleChange}/>
            <label htmlFor="">&nbsp;  Graps </label>
            <br /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default MultipleChecks