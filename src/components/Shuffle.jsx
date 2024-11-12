import { useState } from "react";

const Shuffle = () => {
    const numArray = [1,2,3,4,5];
    const [ nums , setNums ] = useState(numArray);
    const shuffle = () =>{
        const newNums = [...nums];
        const value = newNums.pop();
        newNums.unshift(value)
        setNums(newNums)
    }
    return (
        <>
            <h3>Shuffle</h3>
            <h4>{nums}</h4>
            <button className="bg-primary-subtle" onClick={shuffle}>Shuffle</button>
        </>
    )
}

export { Shuffle }