import AppName from "./components/AppName.jsx"
import AddTodo from "./components/AddTodo.jsx"
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import TodoItems from "./components/TodoItems.jsx"
import { useState } from "react";

function App() {


  const [todoitems, setTodoItems] = useState([]);

  const handlenewitem = (itemname, itemduedate) => {
    // console.log(`New item added ${itemname} and Date ${itemduedate}`)

    const newTodoitems = [...todoitems, {
      name: itemname,
      Date: itemduedate,
    }]

    setTodoItems(newTodoitems);
  }


  const handleDeleteitem = (itemname) => {
    const newTodoitems = todoitems.filter(item => item.name !== itemname);
    setTodoItems(newTodoitems);
    console.log(`item deleted :  ${itemname}`)
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewitem={handlenewitem} />
      {todoitems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoitems={todoitems} ondeleteclick={handleDeleteitem}></TodoItems>
    </center >

  )

}

export default App
