import { useState } from "react"

const MultiCheckbox = () =>{
    const [fruits, setFruites] = useState([
        { label: "Apple", value: 160, checked: false },
        { label: "Banana", value: 100, checked: false },
        { label: "Cherry", value: 500, checked: false }
    ]);
    const [sum, setSum] = useState(0);
    const handleChange = (e) =>{
        const newFruits = fruits.map((fruit) =>{
            const newFruit = {...fruit};
            if(newFruit.label === e.target.value){
                newFruit.checked = !newFruit.checked
            }
            return newFruit
        });

        setFruites(newFruits)

        let sumVal = 0;
        //forEach文の記述の場合
        // newFruits.forEach(fruit=>{
        //     if(fruit.checked){
        //         sumVal += fruit.value
        //     }
        // });

        //filter & forEach文の記述の場合
        // newFruits
        //     .filter((fruit) => fruit.checked)
        //     .forEach((fruit) => (sumVal += fruit.value));
        
        //filter & reduce文の記述の場合
        sumVal = newFruits
            .filter((fruit) => fruit.checked)
            .reduce((sumVal, fruit) => sumVal + fruit.value,0);
        setSum(sumVal);
    }
    return(
        <>
            <h3>Multi Checkbox</h3>
            <div>
                {fruits?.map(fruit => {
                    return(
                        <div key={fruit.label}>
                            <input 
                                id={fruit.label}
                                type="checkbox"
                                value={fruit.label}
                                onChange={handleChange}
                                checked={fruit.checked}
                            />
                            <label htmlFor={fruit.label}>
                                {fruit.label}:{fruit.value}
                            </label>
                        </div>                       
                    )
                })}
                <h4>Total：{sum}</h4>
            </div>
        </>
    )
}

export { MultiCheckbox }