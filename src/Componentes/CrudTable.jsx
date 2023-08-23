import CrudTableRow from "./CrudTableRow";

const CrudTable =({deleteData, Db, setDataToEdit})=>{
    return (
        <div>
            <h3>tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>nombre</th>
                        <th>email</th>
                        <th>accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Db.length > 0 ? Db.map((el)=>(<CrudTableRow el={el} key={el.id} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)) : <tr><td colSpan="3">sin dats</td></tr>
                    }
                </tbody>        
            </table>
        </div>
    )
}

export default CrudTable;