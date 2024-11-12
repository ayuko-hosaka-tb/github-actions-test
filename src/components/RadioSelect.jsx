import { useState } from 'react'

const RadioSelect = () => {
    const [item, setItem] = useState("Apple");
    const fruits = ["Apple","Banana","Cherry"];
    const change = (e) => setItem(e.target.value);

    return(
        <>
            <h3>Radio Button</h3>
            {
                fruits.map((fruit) =>{
                    return(
                        <label key={fruit}>
                            <input 
                                type="radio"
                                value={fruit}
                                checked={ item === fruit }
                                onChange={change}    
                            >
                            </input>
                            {fruit}
                        </label>
                    )
                })
            }
        </>
    )
}

export { RadioSelect }