import TodoItem from "./TodoItem";
import itemcont from "./TodoItems.module.css"
const TodoItems = ({ todoitems, ondeleteclick }) => {
    return (
        <div className={itemcont.itemcontainer} >
            {
                todoitems.map((item, index) => <TodoItem key={index} tododate={item.Date} todoname={item.name} ondeleteclick={ondeleteclick}></TodoItem>)}

        </div>
    )
}

export default TodoItems;