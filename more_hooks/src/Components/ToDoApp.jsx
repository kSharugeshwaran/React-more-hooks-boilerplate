import React, { useReducer, useRef } from "react";
import ToDoItem from "./ToDoItem";

const ToDoApp = () => {
  const initialState = [];

  const reducer = (state, action) => {
    if (action.type == "Add Content") {
      return [
        ...state,
        {
          data: action.payload,
          isHidden: false,
        },
      ];
    }

    if (action.type == "Change_IsHidden") {
      return state.map((e, i) => {
        return i == action.payload ? { ...e, isHidden: !e.isHidden } : e;
      });
    }
    return state;
  };

  const [todo, dispatch] = useReducer(reducer, initialState);

  const input = useRef(null)

  const goUp = () =>{
    input.current.focus()
  }

  return (
    <div>
      <h1>Enter in To-Do Input</h1>
      <input ref={input}
        type="text"
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            dispatch({ type: "Add Content", payload: e.target.value });
          }
        } }
      />

      {todo.map((e, i) => {
        return <ToDoItem item={e} index={i} dispatch={dispatch} />;
      })}
      <button onClick={goUp} >Go to Top</button>
    </div>
  );
};

export default ToDoApp;