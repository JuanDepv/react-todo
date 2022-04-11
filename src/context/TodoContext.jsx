import React, { createContext } from 'react'
import useCrudTodo from '../hooks/todos/useCrudTodos'

const TodoContext = createContext({})

export function TodoProvider({ children }) {
    const {
        todos,
        searchValue, setSearchValue,
        handleFilterTodos,
        handleAddTodo,
        totalTodos, todosCompleted,
        deleteTodo,
        handleTodoCompleted,
        isOpenModal,
        setIsOpenModal
    } = useCrudTodo()

    return (
        <TodoContext.Provider
            value={{
                todos,
                searchValue, setSearchValue,
                handleFilterTodos,
                handleAddTodo,
                totalTodos,
                todosCompleted,
                deleteTodo,
                handleTodoCompleted,
                isOpenModal,
                setIsOpenModal
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext