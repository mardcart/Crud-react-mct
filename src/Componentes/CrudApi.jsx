import { useState } from "react";

import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"

const CrudApi =()=>{

    const [Db, setDb] = useState([])
    const [DataToEdit, setDataToEdit] = useState(null)

    const createData =(data)=>{
        data.id = Date.now();
        setDb([...Db,data])
    }
    const updateData =(data)=>{
        let newData =  Db.map(el=>el.id === data.id?data:el)
        setDb(newData)
    }
    const deleteData =(id)=>{
        let isdelete =  window.confirm(`deseas eliminar el "${id}"`)
        if(isdelete){
            let newData =  Db.filter(el=>el.id !== id)
            setDb(newData)
        }else{
            return;
        }
    }

    return(
        <div>
            <h2>crud api</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} DataToEdit={DataToEdit} setDataToEdit={setDataToEdit} />
                <CrudTable Db={Db} deleteData={deleteData} setDataToEdit={setDataToEdit}/>
            </article>
        </div>
    )
}

export default CrudApi;
