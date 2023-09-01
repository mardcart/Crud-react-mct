import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'

const SongDetails = ({Search,Liryc,Bio}) => {
  return (
    <div>
        <h2>songdetails</h2>
        <SongArtist/>
        <SongLyric/>
    </div>
  )
}

export default SongDetails