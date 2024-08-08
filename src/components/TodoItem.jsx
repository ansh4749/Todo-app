import { TbHttpDelete } from "react-icons/tb";

function TodoItem({ todoname, tododate, ondeleteclick }) {
    return (
        <div className="container ">
            <div className="row def-row">
                <div className="col-6">
                    {todoname}
                </div>
                <div className="col-4">
                    {tododate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger def-button" onClick={() => ondeleteclick(todoname)}><TbHttpDelete />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;