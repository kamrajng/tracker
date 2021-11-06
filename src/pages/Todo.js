import React from 'react'
import AddTodo from '../components/AddTodo'
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'

const Todo = () => {
    return (
        <div >
            <h2 className='pagepad'>Todo List</h2>
        <div>
            <TodoHeader />
            <TodoList />
            <AddTodo />
        </div>
            
        </div>
    )
}

export default Todo
