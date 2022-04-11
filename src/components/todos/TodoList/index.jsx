import React from 'react'
import './styles.css'

export default function TodoList({ children }) {
    return (
        <section className='todo-list'>
            <ul>
                {children}
            </ul>
        </section>
    )
}
