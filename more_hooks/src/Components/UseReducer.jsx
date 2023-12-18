import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

const reducer = (state,action) => {
    let{type} = action
    if(type == "Increase"){
        return state+1
    }
    else{
        return state -1 
    }
    return state
}

const UseReducer = () => {
    // const[count,setCount] = useState(0)
    const[count,dispatch] = useReducer(reducer,0)
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => {
            dispatch({type:"Increase"})
        }}>+</button>
        <button onClick={() => {
             dispatch({type:"Decrease"})
        }}>-</button>

    </div>
  )
}

export default UseReducer