import {useEffect, useState} from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await fetch(url);
                res = await res.json();
                setData(res);
                setIsLoading(false);
            } catch (error) {
                console.log('error');
                setError(error);
            }
        }
        fetchData();
    }, [url]);

    return {data, error, isLoading};
}
