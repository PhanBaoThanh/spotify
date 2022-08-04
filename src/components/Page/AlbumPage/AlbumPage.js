import React,{useState,useEffect,useContext} from 'react'
import './albumpage.scss'
import { MusicContext } from '../../Context/MusicContext'
import { albumData } from '../../Data/album'
import { useParams } from 'react-router-dom'
import { listMusic } from '../../Footer/music'
import SearchMusic from '../Search/SearchMusic'
import MusicItem from '../../MusicItem/MusicItem'

const AlbumPage = () => {
  const {
    isPlay,
    setIsPlay,
    setFirstTimeClick,
    idPlaylistNow,
    setIdPlaylistNow,
    setIdSongNow,
    setIsClickMusic,
    idAlbum,
    setIdAlbum,
    searchValue,
    myAlbum,
    setMyAlbum
  } = useContext(MusicContext)
  const {albumId} = useParams()
  const [albumNow,setAlbumNow] = useState({})
  const [playlistNow,setPlaylistNow] = useState([])

  useEffect(() => {
      setAlbumNow(albumData.find(item => item.id === Number(albumId)))
      setPlaylistNow(albumData.find(item => item.id === Number(albumId)).list.map(item => listMusic.find(i => i.id === item)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[albumId])

  //Xu ly play album
  const handlePlaylistSong = () => {
      if(idAlbum !== Number(albumId)){
          if(idPlaylistNow !== -6)
              setIdPlaylistNow(-6)
          setIdAlbum(Number(albumId))
          setIsPlay(true)
          setFirstTimeClick(true)
      }
      else
          setIsPlay(!isPlay)
  }

  //Chuyen bai nhac khi bam vao bai nhac
  const handleChangeSong = idMusic => {
      if(idPlaylistNow !== -6)
          setIdPlaylistNow(-6)
      if(idAlbum !== Number(albumId))
          setIdAlbum(Number(albumId))
      if(isPlay === false)
          setIsPlay(true)
      setIdSongNow(idMusic)
      setIsClickMusic(true)
  }

  //Xu ly click btn like artist
  const handleClickBtnLike = () => {
    setMyAlbum(prev => [
        ...prev,
        albumData.find(item => item.id === Number(albumId))
    ])
  }

  //Xu ly click btn unlike artist
  const handleClickBtnUnlike = () => {
    setMyAlbum(myAlbum.filter(item => item.id !== Number(albumId)))
  }


  return (
    <div className='albumPage'>
      {searchValue !== '' ? (
        <SearchMusic add='padding'/>
      ) : (
        <div className='box'>
          <div className='loveSongItem'>
                  <div className='loveSongItem__header'>
                        <div className='loveSongItem__header__img'>
                            <img src={albumNow.image} alt='' />
                        </div>

                        <div className='loveSongItem__header__box'>
                            <h2 className='loveSongItem__header__box__header'>{albumNow.name}</h2>
                            <p className='loveSongItem__header__box__title'>{albumNow.singerName}</p>
                        </div>

                        <div className='loveSongItem__header__btn'>
                            {myAlbum.find(item => item.id === Number(albumId)) ? (
                                <svg role='img' height='32' width='32' viewBox='0 0 24 24' className='Svg-sc-1bi12j5-0 EQkJl' style={{fill: '#1ed760'}} onClick={handleClickBtnUnlike}>
                                    <path d='M8.667 1.912a6.257 6.257 0 00-7.462 7.677c.24.906.683 1.747 1.295 2.457l7.955 9.482a2.015 2.015 0 003.09 0l7.956-9.482a6.188 6.188 0 001.382-5.234l-.49.097.49-.099a6.303 6.303 0 00-5.162-4.98h-.002a6.24 6.24 0 00-5.295 1.65.623.623 0 01-.848 0 6.257 6.257 0 00-2.91-1.568z'></path>
                                </svg>
                            ) : (
                                <svg role='img' height='32' width='32' viewBox='0 0 24 24' className='Svg-sc-1bi12j5-0 EQkJl' style={{fill: 'hsla(0,0%,100%,.7)'}} onClick={handleClickBtnLike}> 
                                    <path d='M5.21 1.57a6.757 6.757 0 016.708 1.545.124.124 0 00.165 0 6.741 6.741 0 015.715-1.78l.004.001a6.802 6.802 0 015.571 5.376v.003a6.689 6.689 0 01-1.49 5.655l-7.954 9.48a2.518 2.518 0 01-3.857 0L2.12 12.37A6.683 6.683 0 01.627 6.714 6.757 6.757 0 015.21 1.57zm3.12 1.803a4.757 4.757 0 00-5.74 3.725l-.001.002a4.684 4.684 0 001.049 3.969l.009.01 7.958 9.485a.518.518 0 00.79 0l7.968-9.495a4.688 4.688 0 001.049-3.965 4.803 4.803 0 00-3.931-3.794 4.74 4.74 0 00-4.023 1.256l-.008.008a2.123 2.123 0 01-2.9 0l-.007-.007a4.757 4.757 0 00-2.214-1.194z'></path>
                                </svg>
                            )}
                        </div>
                  </div>
          </div>
          <div className='box__item'>
              <div className='loveSongItems'>
                  <div className='loveSongItems__have'>
                      <div className='loveSongItems__have__btn' onClick={handlePlaylistSong}>
                      <div className='loveSongItems__have__btn__box'>
                          {isPlay && idPlaylistNow === -6 && idAlbum === albumNow.id ? (
                          <svg role='img' height='28' width='28' viewBox='0 0 24 24' className='Svg-sc-1bi12j5-0 EQkJl'>
                              <path d='M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z'></path>
                          </svg>
                          ) : (
                          <svg role='img' height='28' width='28' viewBox='0 0 24 24' className='Svg-sc-1bi12j5-0 EQkJl'>
                              <path d='M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z'></path>
                          </svg>
                          )}
                      </div>
                      </div>
                  
                      {playlistNow.map((item,index) => (
                        <MusicItem 
                            key={index}
                            index={index}
                            handleChangeSongDefault={handleChangeSong}
                            id={item.id}
                            img={item.image}
                            name={item.name}
                            singer={item.singer}
                            albumId={Number(albumId)}
                            duration={item.duration}
                        />
                      ))}
                      
                  </div>
              </div>      
          </div>
        </div>
      )}
    </div>
  )
}

export default AlbumPage