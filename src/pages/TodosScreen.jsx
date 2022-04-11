import React from 'react'
import Modal from '../components/todos/Modal'
import TodoButton from '../components/todos/TodoButton'
import TodoCounter from '../components/todos/TodoCounter'
import TodoForm from '../components/todos/TodoForm'
import TodoItem from '../components/todos/TodoItem'
import TodoList from '../components/todos/TodoList'
import TodoSearch from '../components/todos/TodoSearch'
import useTodo from '../hooks/context/useTodo'

export default function TodosScreen() {
    const { todos, searchValue, handleFilterTodos, isOpenModal } = useTodo()
    const isSearch = searchValue.trim() === '' || searchValue === null
    const thereTodos = todos.length === 0 || handleFilterTodos().length === 0
    
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {thereTodos && (<h2 className='notTodos'>No hay todos</h2>)}
                {isSearch ? (
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />
                    ))
                ):(
                    handleFilterTodos().map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />
                    ))
                )}
            </TodoList>
            {!!isOpenModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )

            }
            <TodoButton />
        </>
    )
}
