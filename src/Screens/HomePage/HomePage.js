import React, { useEffect, useState } from 'react';


import { Todos } from '../../Components/TodosSection/Todos';
import { AddTodo } from '../../Components/AddTodoSection/AddTodo';
import { DoneTodos } from '../../Components/DoneTodoSection/DoneTodos';


export default function HomePage() {

    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const addTodo = (title, desc) => {
        // console.log("Todo Submitted !",  title, desc)

        let sno;
        if (todos.length === 0) {
            sno = 1
        }
        else {
            sno = todos[todos.length - 1].sno + 1
        }
        // let sno = todos.length + 1; 
        // console.log(sno)
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        }
        // console.log(myTodo)
        setTodos([...todos, myTodo]);
    }

    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])


    const onDelete = (todo) => {
        // console.log("Delete!", todo);
        setTodos(todos.filter((e) => {
            return e !== todo;
        }))
    }

    const onDone = (todo) => {
        // console.log("Done!", todo);
        onDelete(todo);
        doneTodos(todo);
    }

    const doneTodos = (todo) => {
        const newDoneTodo = {
            title1: todo.title,
            desc1: todo.desc,
        }
        // console.log("Done!", todo)
        setDoneTodos([...doneTodo, newDoneTodo])
        // console.log(doneTodo)
    }


    let initDoneTodo;
    if (localStorage.getItem("doneTodo") === null) {
        initDoneTodo = [];
    }
    else {
        initDoneTodo = JSON.parse(localStorage.getItem("doneTodo"));
    }

    const [doneTodo, setDoneTodos] = useState(initDoneTodo)
    useEffect(() => {
        localStorage.setItem("doneTodo", JSON.stringify(doneTodo));
    }, [doneTodo])

    const onDoneDelete = (doneItem) => {
        setDoneTodos(doneTodo.filter((e) => {
            return e !== doneItem;
        }))
    }


    return (
        <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} onDone={onDone} />
            <DoneTodos doneTodo={doneTodo} onDoneDelete={onDoneDelete} />
        </>
    )
}
