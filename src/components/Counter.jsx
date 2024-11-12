const Counter = ({name, count, setCount}) => {
    const countUp = () =>{
        setCount(count => count+1);
    };
    const countDown = () => {
        setCount(count => count-1)
    };
    return(
        <>
            <div className="card">
                <h3>Cnt{name}:{count}</h3>
                <button className="bg-primary-subtle" onClick={countUp}>+</button>
                <button onClick={countDown}>-</button>
            </div>
        </>
    )    
}

export { Counter }