import { useState } from "react";

//Css
import '../App.css'

//Components
import { List } from './List'
import { Filter } from './Filter'
import { Shuffle } from './Shuffle'
import { CounterChange } from './CounterChange'
import { Counter } from './Counter'
import { InputChange } from './InputChange'
import { RadioSelect } from './RadioSelect'
import { CheckSelect } from './CheckSelect'
import { MultiCheckbox } from './MultiCheckbox'
import { Select } from './Select'

const Components = () =>{
    //Use CounterChange Component
    const [ toggle, setToggle ] = useState(true);

    //Use Filter & List Component
    const animals = ['dog', 'cat', 'rat'];
    const [ fillterVal, setFillterVal ] = useState("");
    const fillterAnimals = animals.filter((animal) =>{
        const isMatch = animal.indexOf(fillterVal) !== -1;
        return isMatch;
    });
    
    //Use Counter Component
    const [ countA, setCountA ] = useState(0);
    const [ countB, setCountB ] = useState(0);
    
    return(
        <>
            
                <div className="row">
                    <div className="col-3 card">
                        <InputChange />
                    </div>
                    <div className="col-3 card">
                        <Shuffle />
                    </div>
                    <div className="col-3 card">
                        <CounterChange setToggle={setToggle}/>
                        { toggle 
                            ? <Counter name="A" key="A" count={countA} setCount={setCountA}/>
                            : <Counter name="B" key="B" count={countB} setCount={setCountB}/>
                        }
                    </div>
                    <div className="col-3 card">
                        <h2>List</h2>
                        <Filter filterState={[ fillterVal, setFillterVal ] } />
                        <List animals={fillterAnimals} />
                    </div>
                    <div className="col-3 card">
                        <RadioSelect />
                    </div>
                    <div className="col-3 card">
                        <CheckSelect />
                    </div>
                    <div className="col-3 card">
                        <MultiCheckbox />
                    </div>
                    <div className="col-3 card">
                        <Select />
                    </div>
                </div>
           
        </>
    )
}

export { Components }