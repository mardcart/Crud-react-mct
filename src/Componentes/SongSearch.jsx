import React, { useState } from 'react'
import SongForm from './SongForm'
import SongDetails from './SongDetails'
import Loader from "./Loader"

const SongSearch = () => {

    const [Search, setSearch] = useState(null)
    const [Liryc, setLiryc] = useState(null)
    const [Bio, setBio] = useState(null)
    
    const [Loading, setLoading] = useState(false)

    const handleSearch =(data)=>{
        console.log(data)
    }

  return (
    <div>
        <h1>songsearch</h1>
        {/* //SOLO CUANDO ES VERDADERO SE MUESTRA */}
        {Loading && <Loader/>}
        <SongForm handleSearch={handleSearch}/>
        <SongDetails Search={Search} Liryc={Liryc} Bio={Bio}/>


    </div>
  )
}

export default SongSearch