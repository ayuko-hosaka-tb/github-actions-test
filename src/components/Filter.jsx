const Filter = ({ filterState }) => {
    const [ fillterVal, setFillterVal ] = filterState;
    return (
        <input 
            type="text" 
            value={fillterVal} 
            onChange={(e) => {
            setFillterVal(e.target.value) 
        }} />
    )
}

export { Filter }