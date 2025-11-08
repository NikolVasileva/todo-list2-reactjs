import styles from "./TodoElement.module.css"

export default function TodoElement({
    id,
    title,
    completed,
    onClick
}) {

    const classes = [styles["todo-element"]];

    if(completed) {
        classes.push(styles["todo-completed"])
    }

    return(
        // <p className={completed && styles["todo-completed"]}> - {title}</p>
        <p onClick={() => onClick(id)} className={classes.join(" ")}> - {title}</p>

    )
}
