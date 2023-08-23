import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTablle";

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

    const createData = ()=>{

    }
    const updateData =()=>{

    }
    const deleteData =()=>{

    }

    return (
        <div>
        <h2>crud app</h2>
        <CrudForm/>
        <CrudTable/>
        </div>
    )
}

export default CrudApp;