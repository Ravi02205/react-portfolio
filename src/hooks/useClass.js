import { useState } from 'react';
import { useEffect } from 'react';

const useClass = (defaultClassName) => {

    const [letterClass, setLetterClass] = useState(defaultClassName);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
    }, []);

    return letterClass;
}

export default useClass
