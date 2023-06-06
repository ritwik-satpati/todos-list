import React from 'react'

import { DoneTodoItem } from '../DoneTodoItem/DoneTodoItem'

export const DoneTodos = (props) => {

  const noDoneItems = () => {
    return (
      <div className="card mt-3 bg-danger">
        <div className="card-body">
          <p className="card-text">No Todos have been done till now ...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-3 bg-warning border border-white border-start-0 border-end-0">
      <div className='container my-3'>
        <h3 className='text-center fw-bold mt-3'>Done Todo</h3>
        <p className='text-center md-3'>[ Done Todo - {props.doneTodo.length} ]</p>
        {
          props.doneTodo.length === 0 ? noDoneItems() :
            props.doneTodo.map((doneItem) => {
              return <DoneTodoItem doneItem={doneItem} onDoneDelete={props.onDoneDelete} />
            })
        }
      </div>
    </div>
  )
}
