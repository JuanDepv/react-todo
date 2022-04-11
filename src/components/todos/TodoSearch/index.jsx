import React from 'react'
import useTodo from '../../../hooks/context/useTodo'
import './styles.css'

export default function TodoSearch() {
    const { searchValue, setSearchValue } = useTodo()
    
    return (
        <>
            <input 
                type='text'
                id='search'
                name='search'
                className='todo-search'
                placeholder='add todo...'
                value={searchValue}
                onChange={({ target }) => setSearchValue(target.value)}
                autoFocus
                autoComplete='off'
            />
        </>
    )
}
