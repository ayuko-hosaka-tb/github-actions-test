import { useState } from "react"

const Select = () =>{
    const [selected, setSelected] = useState("Banana");
    const options = ["Apple", "Banana", "Cherry"];

    return(
        <>
            <h3>Pull Down</h3>
            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
            >
            {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <h5>selected: {selected}</h5>
        </>
    )
}

export { Select }