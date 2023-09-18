import { useState,useEffect } from 'react'

 export const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fechData = async ()=>{
            setLoading(true);
            try {
                const res = await fetch(url);
                if(!res.ok){
                    let err = new Error("erro en la peticion fetch")
                    err.status =  res.status || "00";
                    err.statusText = res.statusText || "ocurrio un error"
                    throw err;
                }
                const json = await res.json();

                if(!signal.aborted){
                    setData(json);
                    setError(null);
                }
                

                
            } catch (error) {

                if(!signal.aborted){
                    setData(null)
                    setError(error)
                }
            }finally{
                if(!signal.aborted){
                    setLoading(false)
                }

            }
                
            }
        fechData();

        return ()=> abortController.abort();


    }, [url])
 
    return {data,error,loading};
}
