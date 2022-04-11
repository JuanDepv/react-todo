import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { TodoProvider } from './context/TodoContext'
import TodosScreen from './pages/TodosScreen'

function App() {

    return (
        <>
            <AuthProvider>
                <TodoProvider>
                    <TodosScreen />
                </TodoProvider>
            </AuthProvider>
        </>
    )
}

export default App