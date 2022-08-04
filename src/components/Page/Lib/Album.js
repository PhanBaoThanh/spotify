import React,{useContext} from 'react'
import { MusicContext } from '../../Context/MusicContext'
import './album.scss'
import { Link } from 'react-router-dom'
import Card from '../../Card/Card'
import { Grid } from '@mui/material'

const Album = () => {
  const {
    setSearchValue,
    myAlbum,
    idAlbum,
    idPlaylistNow,
    isPlay,
    setIdPlaylistNow,
    setIsPlay,
    setFirstTimeClick,
    setIdAlbum
  } = useContext(MusicContext)

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

  return (
    <div className='album'>
      {myAlbum.length > 0 ? (
        <div className='playlist__box'>
          <h1 className='playlist__header'>My Album</h1>
          <Grid container columns={14}>  

            {myAlbum.map((item,index) => (
              <Card 
                key={index}
                link={`/album/${item.id}`} 
                handlePlaylistSong={handleClickAlbum} 
                id={item.id} 
                img={item.image}
                name={item.name}
                title={item.singerName}
                isAlbum = {true} 
              />
            ))}
          </Grid>
        </div>
      ) : (
        <div className='album__empty'>
          <div className='album__empty__icon'>
            <svg xmlns='http://www.w3.org/2000/svg' height='52' width='52' viewBox='0 0 52 52'>
              <path d='M26 0.00100708C11.641 0.00100708 0 11.642 0 26.001C0 40.36 11.641 52.001 26 52.001C40.36 52 52 40.36 52 26C52 11.64 40.36 0.00100708 26 0.00100708ZM26 50C12.767 50 2 39.234 2 26C2 12.766 12.767 2.00001 26 2.00001C39.234 2.00001 50 12.766 50 26C50 39.234 39.234 50 26 50ZM26 18C21.582 18 18 21.582 18 26C18 30.418 21.582 34 26 34C30.418 34 34 30.418 34 26C34 21.582 30.419 18 26 18ZM26 32C22.692 32 20 29.309 20 26C20 22.691 22.692 20 26 20C29.308 20 32 22.691 32 26C32 29.309 29.309 32 26 32Z'></path>
            </svg>
          </div>

          <h1 className='album__empty__header'>Theo dõi album đầu tiên của bạn</h1>
          <p className='album__empty__text'>Lưu album bằng cách nhấn vào biểu tượng trái tim.</p>
          <Link to='/search' className='album__empty__btn' style={{textDecoration: 'none'}} onClick={() => setSearchValue('')}>Tìm album</Link>
        </div>
      )}
    </div>
  )
}

export default Album