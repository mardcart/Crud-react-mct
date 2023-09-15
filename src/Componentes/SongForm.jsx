import React, { useState } from 'react'

const initialForm = {
    artist:"",
    song: ""
}

const SongForm = ({handleSearch}) => {

    const [Form, setForm] = useState(initialForm)

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(!Form.artist || !Form.song){
            alert('completar datos')
            return;
        }
        handleSearch(Form)
        setForm(initialForm)

    }
    const handleOnChange =(e)=>{
        setForm({
            ...Form,[e.target.name]:e.target.value
        })
    }

  return (
    <div>
        <h2>SongForm</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' name='artist' onChange={handleOnChange} value={Form.artist} placeholder='nombre dle artista'/>
            <input type='text' name='song' onChange={handleOnChange} value={Form.song} placeholder='nombre de la cancion'/>
            <input type='submit' value="enviar" /> 
        </form>
    </div>
  )
}

export default SongForm