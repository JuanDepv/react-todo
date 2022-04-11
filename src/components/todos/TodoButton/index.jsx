import React, { useState } from 'react'
import useTodo from '../../../hooks/context/useTodo'
import './styles.css'

export default function TodoButton() {
    const { handleAddTodo, isOpenModal, setIsOpenModal } = useTodo()
    // const [newTodo, setNewTodo] = useState('')
    // const [isVisible, setIsVisible] = useState(false)

    return (
        <div>
            {/* {isVisible && (
                <input
                    type='text'
                    value={newTodo}
                    placeholder='Add new todo'
                    className='createTodoInput'
                    onChange={({ target }) => setNewTodo(target.value)}
                    onBlur={() => setIsVisible(!isVisible)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            if(newTodo.length <= 0) return
                            handleAddTodo(newTodo)
                            setNewTodo('')
                        }
                        return null
                    }}
                />
            )} */}
            <button
                className='createTodoButton'
                // onClick={() => setIsVisible(!isVisible)}
                onClick={() => setIsOpenModal(!isOpenModal)}
            >
                +
            </button>
        </div>
    )
}
