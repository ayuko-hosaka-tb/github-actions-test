import { useState } from "react"

const CheckSelect = () => {
    const [isChecked, setChecked] = useState(false);
    const checked = () =>{
        setChecked((prev) =>!prev);
    }
    return(
        <>
            <h3>Checkbox</h3>
            <label htmlFor="myCheck">
                check：
                <input 
                    type="checkbox"
                    id="myCheck"
                    checked={isChecked}
                    onChange={checked}
                />
            </label>

            <h4>{isChecked ? "ON" : "OFF"}</h4>
        </>
    )
}

export { CheckSelect }