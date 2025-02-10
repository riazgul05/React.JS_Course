import React, { useReducer } from 'react'

function Reducers() {
    const intialState = 0;
    const reducer = (state, action) =>{
        switch(action){
          case 'increment':
           return state + 1
           case 'decrement':
            return state - 1
            case 'reset':
              return intialState
              default:
                return state
        }
    } 
  const [count, dispatch] = useReducer( reducer, intialState)
  return (
  <>
      <h1>Count = {count }</h1>
       <button onClick={ () => dispatch('increment')}>Increment</button>
       <button onClick={ () => dispatch('decrement')}>Decrement</button>
       <button onClick={ () => dispatch('reset')}>Reset</button>


    </>
  )
}

export default Reducers