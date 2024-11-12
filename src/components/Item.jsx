const Item = ({ animal }) => {
    return (
        <li>
            {animal}
            {animal === 'dog' && '★'}
        </li>
    );
};

export { Item };