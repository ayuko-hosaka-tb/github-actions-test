const ToDoList = ({todos,deleteTodos}) =>{
    const click = (id) => {
        deleteTodos(id)
    }

    return(
        <div>
            {
                todos.map((todo) =>{
                    return(
                        <div key={todo.id}>
                            <button 
                                className="bg-primary-subtle"
                                onClick={() => click(todo.id)}>Del
                            </button>
                            <label>{todo.content}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export { ToDoList }