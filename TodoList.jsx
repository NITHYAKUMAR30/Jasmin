

import React from"react"
const TodoList=({item,index})=>{
    return(
        <div>
        <li key={index}>{item}</li>
        </div>
    )
}

export default TodoList;