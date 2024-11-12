const CounterChange = ({ setToggle }) =>{
    const changeButton = () =>{
        setToggle(prev => !prev);
    }
    return (
        <>
            <h3>Counter</h3>
            <button className="bg-primary-subtle" onClick={changeButton}>changeButton</button>
        </>
    )
}

export { CounterChange }