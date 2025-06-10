import { useReducer, useState } from "react";

type TodoObject = {
    id: number;
    text: string;
    completed: boolean;
}

type TodoObjectsState = {
    todoObjects: TodoObject[];
}

type Action = {
    type: "add" | "toggle" | "remove";
    id?: number;
    text?: string;
}

function TodoListReducer() {
    let [inputText, setInputText] = useState<string>("");
    let [idCount, setIdCount] = useState<number>(1);

    function reducer(todoObjectsState: TodoObjectsState, action: Action): TodoObjectsState {
        if (action.type == "add") {
            let todoObject: TodoObject = {
                id: idCount,
                text: action.text || "",
                completed: false
            }
            todoObjectsState.todoObjects.push(todoObject);
            setIdCount(idCount + 1);
            return {
                ...todoObjectsState
            }
        }
        else if (action.type == "toggle") {
            return {
                todoObjects: todoObjectsState.todoObjects.map(todoObject => todoObject.id == action.id ? { ...todoObject, completed: !todoObject.completed } : todoObject)
            }
        }
        else if (action.type == "remove") {
            return {
                todoObjects: todoObjectsState.todoObjects.filter((todoObject) => todoObject.id != action.id)
            }
        }
        else {
            return {
                ...todoObjectsState
            }
        }
    }

    let initialState: TodoObjectsState = {
        todoObjects: []
    }

    let [todoObjectsState, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="container">
            <h2 className="text-center text-light mt-3">To Do List</h2>
            <div className="d-flex gap-2 align-items-center mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter todo"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            dispatch({ type: "add", id: idCount, text: inputText });
                        }
                    }}
                />
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch({ type: "add", id: idCount, text: inputText })}
                >
                    Add
                </button>
            </div>
            <ul className="list-group">
                {todoObjectsState.todoObjects.map((todoObject, id) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className={todoObject.completed ? "text-decoration-line-through" : ""}>
                            {id+1}) {todoObject.text}
                        </span>
                        <div className="btn-group">
                            <button
                                onClick={() => dispatch({ type: "toggle", id: todoObject.id })}
                                className={`btn ${todoObject.completed ? "btn-warning" : "btn-success"}`}
                            >
                                {todoObject.completed ? "Undone" : "Done"}
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => dispatch({ type: "remove", id: todoObject.id })}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoListReducer;