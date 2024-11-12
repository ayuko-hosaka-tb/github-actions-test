import { useState } from "react"
const ToDoForm = ({createTodo}) =>{
    const [entryTodo, setEntoryTodo] = useState("")
    const change = (e) => {
        setEntoryTodo(e.target.value)
    }
    const addTodo = (e) =>{
        const newTodo ={
            id:Math.floor(Math.random()*100),
            content:entryTodo
        };
        console.log(newTodo)
        createTodo(newTodo);
        // formタグはsubmit後画面をリロードするため、リロードを停止させるため
        // event.preventDefalutを呼ぶ
        e.preventDefault();
        setEntoryTodo("");
    }
    return(
        <div>
            <form onSubmit={addTodo}>
                <input type="text" value={entryTodo} onChange={change} />
                <button className="bg-primary-subtle" onClick={addTodo}>add</button>
            </form>
        </div>
    )
}

export { ToDoForm }