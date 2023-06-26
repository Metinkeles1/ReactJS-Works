import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // async - await
        const BC = async () => {
            setIsLoading(true);
            const res = await fetch(url);
            const data = await res.json();
            setIsLoading(false);
            setData(data);
        }

        BC();

    }, [url])

    return {
        data, isLoading
    }
}

export default useFetch;