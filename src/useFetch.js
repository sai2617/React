import { useState, useEffect } from "react";

const useFetch = (url) => {
  
    const [ispending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url, {signal : abortCont.signal})
            .then(res => {return res.json()}).then(data=>{
            console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err=>{
            // setError(err.message);
            setIsPending(false)
            console.log(err.message);
        })
        }, 1000)
        return() => abortCont.abort();
    },[url]);

    return { data, ispending, error}
}

export default useFetch;