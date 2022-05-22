import { useEffect, useState } from 'react';

const UseParts = () => {
    const [partses, setPartses] = useState([]);

    useEffect(() => {
        fetch('Parts.json')
            .then(res => res.json())
            .then(data => setPartses(data));
    }, [])
    return [partses, setPartses]
};

export default UseParts;