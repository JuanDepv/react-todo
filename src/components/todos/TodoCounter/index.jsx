import React from 'react'
import useTodo from '../../../hooks/context/useTodo'
import './styles.css'

export default function TodoCounter() {
    const { totalTodos, todosCompleted: { completed } } = useTodo()
    return (
        <h2 className='todo-counter'>
            Has completado { completed } de { totalTodos } todos creados! 
        </h2>
    )
}
