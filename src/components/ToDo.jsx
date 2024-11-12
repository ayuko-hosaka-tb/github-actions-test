import { useState } from 'react'
import { ToDoList } from './ToDoList'
import { ToDoForm } from './ToDoForm'

const ToDo = () =>{
    const toDoList = [
        {
            id:1,
            content: 'task1'
        },
        {
            id:2,
            content:'task2'
        },
        {
            id:3,
            content:'task3'
        }
    ];
    const [todos, setTodos] = useState(toDoList);
    const deleteTodos = (id) => {
        const newTodos = todos.filter((todo)=>{
            return todo.id !== id;
        })
        setTodos(newTodos);
    };
    const createTodo = (todo) =>{
        //スプレッド構文： 「....変数」によりtodosにtodoを追加
        setTodos([...todos, todo])
    }
    return(
        <>
            <h3>ToDo</h3>
            <ToDoList todos={todos} deleteTodos={deleteTodos} />
            <ToDoForm createTodo={createTodo}/>
        </>
    )
}

export { ToDo }