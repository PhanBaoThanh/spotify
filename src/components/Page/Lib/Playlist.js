import React,{useContext} from 'react'
import './playlist.scss'
import { MusicContext } from '../../Context/MusicContext'
import imageDefault from '../../../img/imgDefault.png'
import {Grid} from '@mui/material'
import Card from '../../Card/Card'
import LargeCard from '../../Card/LargeCard'

const Playlist = () => {
  const {
    isPlay,
    setIsPlay,
    playlist,
    setIdPlaylistNow,
    setFirstTimeClick,
    idPlaylistNow,
    firstTimeClick,
  } = useContext(MusicContext)

  //Play playlist
  const handlePlaylistSong = (playlistNowId) => {
    if(playlist.find(item => item.id === playlistNowId).list.length > 0)
      if(playlistNowId !== idPlaylistNow){
        setIdPlaylistNow(playlistNowId)
        setIsPlay(true)
        if(
          idPlaylistNow >= 0 || 
          (idPlaylistNow === -1 && !firstTimeClick) || 
          (idPlaylistNow === -3 && !firstTimeClick) ||
          (idPlaylistNow === -4) ||
          (idPlaylistNow === -5) ||
          (idPlaylistNow === -6)
        )
          setFirstTimeClick(true)
      }
      else
        setIsPlay(!isPlay)
  }

  //Play love song playlist
  const handlePlayLoveSong = () => {
    if(idPlaylistNow !== -3){
      setIdPlaylistNow(-3)
      setIsPlay(true)
      if(!firstTimeClick)
        setFirstTimeClick(true)
    }
    else
      setIsPlay(!isPlay)
  }

  return (
    <div className='playlistLib'>
      <div className='playlist__box'>
        <h1 className='playlist__header'>Playlist</h1>
        <Grid container columns={14}>  
          <LargeCard 
            link='/loveSong'
            handlePlayLoveSong={handlePlayLoveSong}
          />

          {playlist.map((item,index) => (
            <Card 
              key={index}
              link={`/playlist/${item.id}`} 
              handlePlaylistSong={handlePlaylistSong} 
              id={item.id} 
              img={imageDefault}
              name={item.name}
              title={'Của Bảo Thạnh'}
            />
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Playlist