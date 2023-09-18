import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import Message  from './Message'

const SongDetails = ({Search,Lyric,Bio}) => {

  if(!Lyric && !Bio ) return null


  return (
    <div>

        <h2>songdetails</h2>
        {Lyric.error || Lyric.name === "AbortError"? 
          (<Message msg={`error: no existe la cancion : ${Search.song}`} bgColor="#dc3545"/>):
          (<SongLyric/>)}
        {Bio.artist ? 
          (<SongArtist/>):
          (<Message msg={`error: no existe el interprete: ${Search.artist}`} bgColor="#dc3545"/>)}
        
        
    </div>
  )
}

export default SongDetails