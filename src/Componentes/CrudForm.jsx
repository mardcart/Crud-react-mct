import { useEffect } from "react";
import { useState } from "react";

const initialDatos = {
    id: null,
    nombre: "",
    email : ""
}

const CrudForm =({createData,updateData,DataToEdit,setDataToEdit})=>{

    const [Form, setForm] = useState(initialDatos)

    useEffect(() => {

        if(DataToEdit){
            setForm(DataToEdit)
        }else{
            setForm(initialDatos)
        }

    }, [DataToEdit])
    

    const handleOnChange=(e)=>{
        setForm({
            ...Form,[e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!Form.nombre || !Form.email){
            alert("completar los campos")
            return;
        }
        if(Form.id === null){
            createData(Form)
        }else{
            updateData(Form)
        }
        handleReset()
    }
    const handleReset=()=>{
        setForm(initialDatos)
        setDataToEdit(null)
    }


    return (
        <div>
            <h3>crud form</h3>
            <form  onSubmit={handleSubmit}>
                <input type="text" onChange={handleOnChange} value={Form.nombre} name="nombre" placeholder="nombre"/>
                <input type="text" onChange={handleOnChange} value={Form.email} name="email" placeholder="email"/>
                <input type="submit" value="guardar"/>
                <input type="reset" value="borrar" onClick={handleReset}/>

            </form>
        </div>
    )
}

export default CrudForm;