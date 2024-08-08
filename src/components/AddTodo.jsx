import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";

function AddTodo({ onNewitem }) {

    const [todoName, setTodoName] = useState("");
    const [todoDate, setTodoDate] = useState("");

    let handleNamechange = (event) => {
        setTodoName(event.target.value)
    }

    let handleDateChange = (event) => {
        setTodoDate(event.target.value)
    }

    const handleOnButtonClicked = () => {
        onNewitem(todoName, todoDate);
        setTodoDate("");
        setTodoName("");
    }

    return (
        <div className="container ">
            <div className="row def-row">
                <div className="col-6">
                    <input type="text" value={todoName} placeholder="Enter todo.." onChange={handleNamechange} />
                </div>
                <div className="col-4">
                    <input type="date" value={todoDate} onChange={handleDateChange} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success def-button" onClick={handleOnButtonClicked} ><MdAssignmentAdd />
                    </button>
                </div>
            </div>
        </div>
    );
}


export default AddTodo;