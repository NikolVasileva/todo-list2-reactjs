import { useEffect, useState } from "react"
import TodoElement from "./TodoElement";

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => {
                setTodos(Object.values(data))
            })
            .catch(err => alert(err.message))
    }, [])

    return (
        <div>
            <h2>Todo List:</h2>
            <div>{todos.map(todo => <TodoElement
                key={todo.id}
                title={todo.title}
                completed={todo.completed}
            />)}
            </div>
        </div>
    )
}