import { useEffect, useState } from 'react';

const UseParts = () => {
    const [partses, setPartses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setPartses(data));
    }, [])
    return [partses, setPartses]
};

export default UseParts;