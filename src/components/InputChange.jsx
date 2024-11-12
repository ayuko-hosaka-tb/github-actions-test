import { useState } from 'react'

const InputChange = () => {
    const personObj = { name: 'Tom', age: 18 };
    const [ person, setPerson ]  = useState(personObj);
    const [ clicked, onClicked ] = useState(false);
    /**
     * person変数がオブジェクトである場合のsetPerson関数の記載方法１
     *   アイテム名と値をすべて波括弧{}に記述する
     *   変更するアイテム名の値は引数eを記述しe.target.valueと記述する
     */
    // const changeName = (e) => {
    //     setPerson({ name:e.target.value, age:person.age })
    // };
    // const changeAge = (e) => {
    //     setPerson({ name:person.name, age:e.target.value })
    // };

    /**
     * person変数がオブジェクトである場合のsetPerson関数の記載方法２
     *   第一引数：personオブジェクトを...を用いて記載する
     *   第二引数：変更するアイテム名の値は引数eを記述しe.target.valueと記述する
     */
    const changeName = (e) => {
        setPerson( person => ({ ...person, name: e.target.value }))
    };
    const changeAge = (e) => {
        setPerson( person => ({ ...person, age: e.target.value }))
    };
    const reset = () => {
        setPerson( person => ({ ...person, name:"", age:"" }))
        onClicked(true);
    };
    return (
        <>
            <h3>Input</h3>
            <h4>Name:{person.name}</h4>
            <h4>Age:{person.age}</h4>
            <input type="text" onChange={changeName} value={person.name} />
            <input type="number" onChange={changeAge} value={person.age} />
            
            {/* 
            <button className={clicked ? "bg-secondary-subtle" : "bg-primary-subtle"} onClick={reset}>Crear</button> 
            */}

            {/* 
            テンプレートリテラルを使用した場合
             */}
            <button className={`${clicked ? "bg-secondary-subtle" : "bg-primary-subtle"}`} onClick={reset}>Crear</button>
        </>
    )
}

export { InputChange }