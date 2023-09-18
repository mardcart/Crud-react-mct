import React, { useState } from 'react'
import SelectList from './SelectList'

const SelectsAnidados = () => {

    const [State, setState] = useState('')
    const [Town, setTown] = useState('')
    const [Suburb, setSuburb] = useState('')
    //const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c"
    const TOKEN = "4eadb21c-fe87-49f8-ba7d-cde40ddff3f1"
  return (
    <div>
        <h1>SelectsAnidados</h1>
        <SelectList 
          title="estado" 
          url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}  
          handleChange={(e)=>{setState(e.target.value)}} />

        {State && (<SelectList 
                      title="municipios" 
                      url={`https://api.copomex.com/query/get_municipio_por_estado/${State}?token=${TOKEN}`} 
                      handleChange={(e)=>{setTown(e.target.value)}}/>)}
        {Town && (<SelectList 
                      title="colonia" 
                      url={`https://api.copomex.com/query/get_colonia_por_municipio/${Town}?token=${TOKEN}`} 
                      handleChange={(e)=>{setSuburb(e.target.value)}}/>)} 
        <pre>
            <code>
                {State} - {Town} - {Suburb}
            </code>
        </pre>
    </div>
  )
}

export default SelectsAnidados