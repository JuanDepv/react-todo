import React, { useState } from 'react'
import useTodo from '../../../hooks/context/useTodo'
import './styles.css'

export default function TodoForm() {
    const { handleAddTodo, isOpenModal, setIsOpenModal } = useTodo()
    const [newTodo, setNewTodo] = useState('')

    function onCancel() {
        setIsOpenModal(!isOpenModal)
        setNewTodo('')
    }
    
    function onSubmit(e) {
        e.preventDefault()
        if(newTodo.length <= 0) return
        handleAddTodo(newTodo)
        setIsOpenModal(!isOpenModal)
        setNewTodo('')
    }

    return (

        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo To Do</label>
            <textarea
                placeholder="Escribe una nueva tarea"
                value={newTodo}
                onChange={({ target }) => setNewTodo(target.value)}
                // onKeyDown={(e) => {
                //     if (e.key === 'Enter') {
                //         handleAddTodo(newTodo)
                //         setNewTodo('')
                //     }
                //     return null
                // }}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}
