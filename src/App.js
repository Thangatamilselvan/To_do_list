
import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Todo from './Components/Todo';

function App() {
  const [items,setItems]=useState([])

const addItems = (inputText)=>{
  setItems(previousItm=>{
    return[...previousItm,inputText]
  })

}  

const deleteItem = (id)=>{
  setItems(previousItm=>{
  return previousItm.filter((item,index)=>{
    return index !== id;
  })
  })
}
   
  
  return (
    <div className="container">
     <div className ="heading">
      <h1>To-Do List</h1>
      </div> 
      <Form  addItems ={addItems}/>
      <div>
        <ul>
          {
          items.map((item,index)=> {
            return (
              <Todo keyindex text={item} deleteItem={deleteItem} id={index} />
            )
          }
           )
        }
        </ul>
      </div>
    </div>

  );
}

export default App;
