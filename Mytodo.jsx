import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const Mytodo = () => {
  return (
    <div className='m-3'>
        <TodoInput/>
        <TodoList/>
    </div>
  )
}

export default Mytodo