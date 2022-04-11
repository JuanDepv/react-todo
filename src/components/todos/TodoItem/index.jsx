import React from 'react'
import useTodo from '../../../hooks/context/useTodo'
import './styles.css'

export default function TodoItem({ todo }) {
    const { deleteTodo, handleTodoCompleted } = useTodo()
    return (
        <>
            <li className="todoItem">
                <span 
                    className={`icon icon-check ${todo.isCompleted && 'icon-check--active'}`}
                    onClick={() => handleTodoCompleted(todo.id)}
                >
                    √
                </span>
                <p 
                    className={`todoItem-p ${todo.isCompleted && 'todoItem-p--complete'}`}
                >
                    <span>{todo.text}</span>
                </p>
                <span 
                    className="icon icon-delete"
                    onClick={() => deleteTodo(todo.id)}
                >
                    X
                </span>
            </li>
        </>
    )
}
