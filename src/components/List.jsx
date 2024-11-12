import { Item } from './Item.jsx'

const List = ({ animals }) =>{
    if(animals.length === 0){
        return <h5>not found.</h5>
    }
    return (
        <>
            <ul>
                {animals
                    .map((animal) => {
                        return (
                            <Item key={animal} animal={animal} />
                        )
                })}                
            </ul>
        </>
    )
}

export { List };