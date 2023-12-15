import React, { useState } from 'react'

const Form = (props) => {
const[inputText,SetInputText]=useState("")

const handleChange = (event)=>{
    SetInputText(event.target.value)
}

  return (
    <div className="form">
         <input type="text" onChange = {handleChange} value={inputText}/>
         <button onClick={()=>{
            props.addItems(inputText)
            SetInputText("");
         }}>
            <span>
                Add
            </span>
         </button>
    </div>
  )
}

export default Form