import { useEffect, useState } from 'react';

const UseParts = () => {
    const [partses, setPartses] = useState([]);

    useEffect(() => {
        fetch('https://guarded-taiga-58586.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setPartses(data));
    }, [])
    return [partses, setPartses]
};

export default UseParts;