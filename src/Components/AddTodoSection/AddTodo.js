import React, { useState } from 'react'

export const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    // console.log(title, desc)

    const submit = (e) => {
        e.preventDefault()
        if (!title || !desc) {
            alert("Title & Describtion cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="pb-3 bg-warning border border-white border-start-0 border-end-0">
            <div className='container my-3'>
                <h3 className='text-center fw-bold my-3'>Add A Todo</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text" className="form-control bg-info-subtle" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label" >Todo Description</label>
                        <textarea type="text" className="form-control bg-info-subtle" id="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}
