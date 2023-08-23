import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialBD= [
    {
        id:1,
        nombre:"pedro juan",
        email: "pedro@gmail.com"
    },{
        id:2,
        nombre:"juana diaz",
        email:"juana@gmail.com"
    },{
        id:3,
        nombre:"maria del campo",
        email:"maria@gmail.com"
    }
]


const CrudApp =()=>{

    const [Db, setDb] = useState(initialBD)
    const [DataToEdit, setDataToEdit] = useState(null)

    const createData = (data)=>{
        Db.id =  Date.now();
        setDb([...Db,data])
    }
    const updateData =(data)=>{
        let newData = Db.map(el=>el.id === data.id?data:el)
        setDb(newData) 
    }
    const deleteData =(id)=>{
        let isDelete =  window.confirm(`deseas eliminar los datos de '${id}'`)
        if(isDelete){
            let newData = Db.filter(el => el.id !== id)
            setDb(newData)
        }else{
            return;
        }

    }

    return (
        <div>
        <h2>crud app</h2>
        <article className="grid-1-2">
        <CrudForm createData={createData} updateData={updateData} DataToEdit={DataToEdit} setDataToEdit={setDataToEdit}/>
        <CrudTable deleteData={deleteData} Db={Db} setDataToEdit={setDataToEdit}/>

        </article>
        </div>
    )
}

export default CrudApp;