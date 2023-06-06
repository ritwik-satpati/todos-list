import React from 'react'

export const TodoItem = ({ todo, onDelete, onDone }) => {
  return (
    <div>
      <div className="card mt-3 bg-warning-subtle">
        <div className="card-body">
          <h5 className="card-title">{todo.title}</h5>
          <p className="card-text">{todo.desc}</p>
        </div>
        <div className="container text-center">
          <div className='row'>
            <button className="col btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
            <button className="col btn btn-sm btn-info" onClick={() => { onDone(todo) }}>Done</button>
          </div>
        </div>
      </div>
    </div>
  )
}
