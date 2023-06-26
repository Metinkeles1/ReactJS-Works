import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // async - await
        const BC = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const data = await res.json();
                setIsLoading(false);
                setData(data);
            } catch (error) {
                setIsLoading(false)
                setError(error.message);
            }
        }

        BC();

    }, [url])

    return {
        data, isLoading, error
    }
}

export default useFetch;