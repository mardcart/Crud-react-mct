import React, { useState,useEffect } from 'react'
import SongForm from './SongForm'
import SongDetails from './SongDetails'
import Loader from "./Loader"
import {HelpHttp} from "../Helpers/HelpHttp"

const SongSearch = () => {

    const [Search, setSearch] = useState(null)
    const [Lyric, setLyric] = useState(null)
    const [Bio, setBio] = useState(null)
    
    const [Loading, setLoading] = useState(false)

    useEffect(() => {
      
      if(Search ==  null) return 

      const fechData = async ()=>{
        const [artist , song] = Search

        let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
        let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

        console.log(artistUrl,songUrl)

        setLoading(true);

        const [artistRes,songRes] = await Promise.all([HelpHttp().get(artistUrl),HelpHttp().get(songUrl)]);

        console.log(artistRes,songRes);
        setBio(artistRes);
        setLyric(songRes);

        setLoading(false)


      }

      fechData();
    }, [Search])
    
    
    const handleSearch =(data)=>{
      //console.log(data)
      setSearch(data)
    }




  return (
    <div>
        <h1>songsearch</h1>
        {/* //SOLO CUANDO ES VERDADERO SE MUESTRA */}
        {Loading && <Loader/>}
        <SongForm handleSearch={handleSearch}/>
        {/*search tenga algo y loading sea falso  */}
        {Search && !Loading && (
        <SongDetails Search={Search} Lyric={Lyric} Bio={Bio}/>
        )}

    </div>
  )
 }

export default SongSearch