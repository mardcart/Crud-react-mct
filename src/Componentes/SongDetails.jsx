import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import Message  from './Message'

const SongDetails = ({Search,Lyric,Bio}) => {

  if(!Lyric && !Bio ) return null


  return (
    <div>

        <h2>songdetails</h2>
        {Lyric.error || Lyric.name === "AbortError"? <Message/>:<SongLyric/>}
        {Bio.artist ? <SongArtist/>:<Message/>}
        
        
    </div>
  )
}

export default SongDetails