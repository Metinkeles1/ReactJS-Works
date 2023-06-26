import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // promise
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setData(data));

        // async - await
        const BC = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        }

        BC();

    }, [url])

    return {
        data
    }
}

export default useFetch;