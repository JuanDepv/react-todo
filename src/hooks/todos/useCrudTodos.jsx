import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useLocalStorage from '../utils/useLocalStorage'


export default function useCrudTodo() {
    const [todos, setLocalStorage] = useLocalStorage('todos', [])
    const [searchValue, setSearchValue] = useState('')
    const [isOpenModal, setIsOpenModal] = useState(false)
    const totalTodos = todos.length

    const todosCompleted = todos.reduce((prev, curr) => {
        if (curr.isCompleted) prev.completed += 1
        else prev.incomplete += 1
        return prev
    }, { completed: 0, incomplete: 0 })

    function handleFilterTodos() {
        let filterTodos = []
        if (searchValue.trim() !== null) {
            todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
                .map((newTodoFilter) => {
                    filterTodos.push(newTodoFilter)
                });
        }
        return filterTodos
    }

    function handleAddTodo(textTodo) {
        setLocalStorage([...todos, { id: uuidv4(), text: textTodo, isCompleted: false }])
    }

    function handleTodoCompleted(idTodo) {
        const newList = todos.map((oldTodo) => {
            if (!(oldTodo.id === idTodo)) {
                return oldTodo
            }
            oldTodo.isCompleted = !oldTodo.isCompleted
            return oldTodo
        })
        setLocalStorage(newList)
    }

    function deleteTodo(idTodo) {
        const newTodos = todos.filter((todo) => todo.id !== idTodo)
        setLocalStorage([...newTodos])
    }

    return {
        todos,
        searchValue, 
        setSearchValue,
        handleFilterTodos,
        handleAddTodo,
        totalTodos,
        todosCompleted,
        deleteTodo,
        handleTodoCompleted,
        isOpenModal,
        setIsOpenModal
    }
}