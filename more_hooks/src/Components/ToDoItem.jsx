import React, { useState } from 'react'



const ToDoItem = ({item: {data,isHidden},index}) => {
    const[hidden,setHidden] = useState(isHidden)
  return (
    <div style={{
        backgroundColor: "lightblue",
        width: "90vw",
        color: "black"
    }}>
        <h3>{hidden ? "--This content is hidden--": data}</h3>
        <button onClick={() => {
            setHidden(!hidden)
        }}>Toggle</button>
    </div>
  )
}

export default ToDoItem