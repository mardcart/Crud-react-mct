import { useState,useEffect } from "react";

import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"
import { HelpHttp } from "../Helpers/HelpHttp";
import Message from "./Message";
import Loader from "./Loader"

const CrudApi =()=>{

    const [Db, setDb] = useState(null)
    const [DataToEdit, setDataToEdit] = useState(null)

    const [Error, setError] = useState(null)
    const [Loading, setLoading] = useState(false)

    let api = HelpHttp();
    let url =  "http://localhost:5000/usuarios";

    //APARA LEVANTAR EL SERVIDO NPM RUN FAKE-API

    useEffect(() => {
        setLoading(true)
//        api.get(url).then((res)=>{
            HelpHttp().get(url).then((res)=>{
           // console.log(res)
           if(!res.err){
            setDb(res)
            setError(null)
           }else{
            setDb(null)
            setError(res)
           }
        })
        setLoading(false )

    }, [url])
    


    const createData =(data)=>{
        // data.id = Date.now();
        // setDb([...Db,data])
        
        data.id = Date.now();
        let options = {
            body:data,
            headers: {"content-type":"application/json"}
        }
        
        api.post(url,options).then((res)=>{
            console.log(res)
            if(!res.err){
                setDb([...Db,res]);
            }else{
                setError(res)
            }
        })      

    }
    const updateData =(data)=>{
        //let newData =  Db.map(el=>el.id === data.id?data:el)
        //setDb(newData)
        let endpoint = `${url}/${data.id}`
        //console.log(endpoint)
        let options = {
            body:data,
            headers: {"content-type":"application/json"}
        }
        api.put(endpoint,options).then((res)=>{
            if(!res.err){
                let newData = Db.map(el=>el.id === data.id?data:el)
                setDb(newData)
            }else{
                setError(res)
            }
        })




    }
    const deleteData =(id)=>{
        let isdelete =  window.confirm(`deseas eliminar el "${id}"`)
        if(isdelete){
            let endpoint = `${url}/${id}`
            let options = {
                headers: {"content-type":"application/json"}
            }
            api.del(endpoint,options).then(res=>{
                if(!res.err){
                    let newData = Db.filter(el=>el.id !== id)
                    setDb(newData)
                }else{return}
            })
            // let newData =  Db.filter(el=>el.id !== id)
            // setDb(newData)
        }else{
            return;
        }
    }

    return(
        <div>
            <h2>crud api</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} DataToEdit={DataToEdit} setDataToEdit={setDataToEdit} />
                {/* CONDITIONAL RENDER - SI TIENE ALGO LO RENDERIZAMOS */}
                {Loading && <Loader/>}
                {Error && <Message msg={`Error ${Error.status}: ${Error.statusText}`} bgColor="#dc3545"/>}
                {Db &&(<CrudTable Db={Db} deleteData={deleteData} setDataToEdit={setDataToEdit}/>)}
            </article>
        </div>
    )
}

export default CrudApi;
