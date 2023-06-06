import React from 'react'

export const DoneTodoItem = ({ doneItem, onDoneDelete }) => {

    return (
        <div>
            <div className="card mt-3 mb-1 bg-success-subtle">
                <div className="card-body">
                    <h5 className="card-title">{doneItem.title1}</h5>
                    <p className="card-text">{doneItem.desc1}</p>
                </div>
                <button className="btn btn-sm btn-danger" onClick={() => { onDoneDelete(doneItem) }}>Delete</button>
            </div>
        </div>
    )
}
