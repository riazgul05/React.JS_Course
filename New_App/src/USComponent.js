import React, { useState } from 'react'

function USComponent() {
  const [name, setName] = useState("Ali") 
 let changeState = () =>{
   setName("Zain")
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeState}>Update</button>
    </div>
  )
}

export default USComponent


// import React, { useState } from 'react'
// function USComponent() {
//   const myArray = useState("Adil")
//  let changeState = () =>{
//     myArray[1]("Prem")
//   }
//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={changeState}>Update</button>
//     </div>
//   )
// }



// export default USComponent
// import React, { useState } from 'react'
// function USComponent() {
//   const myArray = useState("Adil")
//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={() => myArray[1]("Kumar")}>Update</button>
//     </div>
//   )
// }

// export default USComponent

