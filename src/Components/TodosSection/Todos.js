import React from 'react'

import { TodoItem } from '../TodoItem/TodoItem'


export const Todos = (props) => {

  const noItems = () => {
    return (
      <div className="card mt-3 bg-danger">
        <div className="card-body">
          {/* <h5 className="card-title">{todo.title}</h5> */}
          <p className="card-text">No Todos to display ...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-3 bg-warning border border-white border-start-0 border-end-0">
      <div className='container my-3'>
        <h3 className='text-center fw-bold mt-3'>Todo List</h3>
        <p className='text-center md-3'>[ Pending Todo - {props.todos.length} ]</p>
        {props.todos.length === 0 ? noItems() :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onDone={props.onDone} />
          })
        }
      </div>
    </div>
  )
}
