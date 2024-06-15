import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('tidak dapat terhubung ke server')
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                    setError(true);
                });
        }, 1000)
    }
        , [url]);
    return { data, isLoading, error }
}



export default useFetch;