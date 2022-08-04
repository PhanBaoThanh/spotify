import React,{useState,useContext} from 'react'
import { MusicContext } from '../../Context/MusicContext'
import './searchmusic.scss'
import Card from '../../Card/Card'
import { Grid } from '@mui/material'
import MusicItem from '../../MusicItem/MusicItem'

const SearchMusic = ({add = ''}) => {
  const [itemActived,setItemActived] = useState('all')
  const {
    isPlay,
    setIsPlay,
    idPlaylistNow,
    setIdPlaylistNow,
    setIdSongNow,
    searchMusicData,
    searchArtistData,
    searchAlbumData,
    setSearchValue,
    setFirstTimeClick,
    idSingerSongList,
    setIdSingerSongList,
    idAlbum,
    setIdAlbum
  } = useContext(MusicContext)

  const handleClickMusic = id => {
    setIdPlaylistNow(-4)
    setIdSongNow(id)
    if(isPlay === false)
      setIsPlay(true)
  }

  const handleClickItem = () => {
    setSearchValue('')
  }

  const handleClickAlbum = id => {
    if(id !== idAlbum){
      if(idPlaylistNow !== -6)
          setIdPlaylistNow(-6)
      setIdAlbum(id)
      setIsPlay(true)
      setFirstTimeClick(true)
    }
    else
        setIsPlay(!isPlay)
  }

  const handleClickArtist = id => {
    if(idSingerSongList !== id){
      if(idPlaylistNow !== -5)
        setIdPlaylistNow(-5)
      setIdSingerSongList(id)
      setIsPlay(true)
      setFirstTimeClick(true)
    }
    else
      setIsPlay(!isPlay)
  }

  return (
    <div className={`searchMusic ${add !== '' ? 'padding' : '' }`}>
      <div className='searchMusic__header'>
        <div className={`searchMusic__header__btn ${itemActived === 'all' ? 'actived' : ''}`} onClick={() =>setItemActived('all')}>All</div>
        <div className={`searchMusic__header__btn ${itemActived === 'song' ? 'actived' : ''}`} onClick={() => setItemActived('song')}>Song</div>
        <div className={`searchMusic__header__btn ${itemActived === 'artist' ? 'actived' : ''}`} onClick={() => setItemActived('artist')}>Artist</div>
        <div className={`searchMusic__header__btn ${itemActived === 'album' ? 'actived' : ''}`} onClick={() => setItemActived('album')}>Album</div>
      </div>

      {itemActived === 'all' || itemActived === 'song' ? (
        <div className='searchMusic__song'>
            <h3 className='searchMusic__song__header'>Song</h3>
            <div className='searchMusic__song__content'>
              {searchMusicData.map((item,index) => 
                <MusicItem 
                  key={index}
                  index={index}
                  handleChangeSongDefault={handleClickMusic}
                  id={item.id}
                  img={item.image}
                  name={item.name}
                  singer={item.singer}
                  duration={item.duration}
                />   
              )}
            </div>
        </div>
      ) : (
        <></>
      )}

      {itemActived === 'all' || itemActived === 'artist' ? (
        <div className='searchMusic__song'>
          <h3 className='searchMusic__song__header'>Artist</h3>
          <Grid container columns={14}>  
            {searchArtistData.map((item,index) => (
              <Card 
                key={index}
                id={item.id}
                link={`/artist/${item.id}`} 
                handleClickItem = {handleClickItem}
                handlePlaylistSong={handleClickArtist}
                img={item.image}
                name={item.name}
                title={'Nghệ sĩ'}
                isArtist = {true}
              />
            ))}
          </Grid>
        </div>
      ) : (
        <></>
      )}

      {itemActived === 'all' || itemActived === 'album' ? (
        <div className='searchMusic__song'>
          <h3 className='searchMusic__song__header'>Album</h3>
          <Grid container columns={14}>  
            {searchAlbumData.map((item,index) => (
              <Card 
                key={index}
                id={item.id}
                handlePlaylistSong={handleClickAlbum}
                handleClickItem = {handleClickItem}
                link={`/album/${item.id}`} 
                img={item.image}
                name={item.name}
                title={item.singerName}
                isAlbum={true}
              />
            ))}
          </Grid>
          
        </div>
      ) : (
        <></>
      )}

    </div>
  )
}

export default SearchMusic