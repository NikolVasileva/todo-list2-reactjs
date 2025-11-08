import styles from "./TodoElement.module.css"

export default function TodoElement({
    id,
    title,
    completed
}) {
    return(
        <p className={completed && styles["todo-completed"]}> - {title}</p>
    )
}
