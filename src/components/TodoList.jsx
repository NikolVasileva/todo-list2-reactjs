import { useEffect, useState } from "react"
import TodoElement from "./TodoElement";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [, setRefresh] = useState(false)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => {
                setTodos(Object.values(data))
            })
            .catch(err => alert(err.message))
    }, [])

    const toggleTodoCompletedHandler = (todoId) => {
        const currentTodo = todos.find(todo => todo.id === todoId);
        currentTodo.completed = !currentTodo.completed;

        fetch(`https://jsonplaceholder.typicode.com/todos/${currentTodo.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(currentTodo)
        })
        .then(() => {
            setRefresh(state => !state)
        })
        .catch(err => alert(err.message))
    }

    return (
        <div>
            <h2>Todo List:</h2>
            <div>{todos.map(todo => <TodoElement
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onClick={toggleTodoCompletedHandler}
            />)}
            </div>
        </div>
    )
}