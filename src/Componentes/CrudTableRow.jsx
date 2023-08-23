const CrudTableRow=({ setDataToEdit, deleteData, el})=>{

    const {id,nombre,email} = el 

    return(
        <tr>
            <td>{nombre}</td>
            <td>{email}</td>
            <td>
                <button onClick={()=>{setDataToEdit(el)}}>editar</button>
                <button onClick={()=>{deleteData(id)}} >eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow;