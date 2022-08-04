import React,{useContext} from 'react'
import './musicitem.scss'
import { MusicContext } from '../Context/MusicContext'

const MusicItem = ({id,index,img,name,singer,duration,handleChangeSongDefault = () => {},albumId = -2,artistId = -2,listSongNow = false}) => {
    const {
        idPlaylistNow,
        idSongNow,
        isPlay,
        idSingerSongList,
        idAlbum
    } = useContext(MusicContext)
    return (
        <div className='playlistItems__have__list' style={
            (idSongNow === id && listSongNow === true) ||
            (idSongNow === id && idPlaylistNow === -4) ||
            (idPlaylistNow === -5 && idSingerSongList === artistId && idSongNow === id) ||
            (idPlaylistNow === -6 && idAlbum === albumId && idSongNow === id)? 
            {color: '#1ed760'}: {}}>
            <div 
                className='playlistItems__have__list__box' 
                onClick={() => handleChangeSongDefault(id)}
            >
                <div className='playlistItems__have__list__box__count'>
                    <span>{index+1}</span>
                </div>

                <div className='playlistItems__have__list__box__img'>
                    <img src={img} alt='ảnh nhạc' />
                    {isPlay ? (
                        ((idSongNow === id && listSongNow === true)||
                        (idSongNow === id && idPlaylistNow === -4) ||
                        (idPlaylistNow === -5 && idSingerSongList === artistId && idSongNow === id) ||
                        (idPlaylistNow === -6 && idAlbum === albumId && idSongNow === id)? (
                            <svg role='img' height='16' width='16' className='Svg-sc-1bi12j5-0 EQkJl UIBT7E6ZYMcSDl1KL62g' viewBox="0 0 24 24">
                                <path d='M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z'></path>
                            </svg>
                        ) : (
                            <svg role="img" height="16" width="16" className="Svg-sc-1bi12j5-0 EQkJl UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                        ))
                    ) : (
                        <svg role="img" height="16" width="16" className="Svg-sc-1bi12j5-0 EQkJl UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    )}
                </div>

                <div className='playlistItems__have__list__box__text' style={{cursor: 'pointer'}}>
                    <p className='playlistItems__have__list__box__text__song'>{name}</p>
                    <p className='playlistItems__have__list__box__text__singer'>{singer}</p>
                </div>
            </div>

            <div className='playlistItems__have__list__nameSong'>
                <p>{name}</p>
            </div>

            <div className='playlistItems__have__list__btn'>
                <button className='playlistItems__have__list__btn__box'>
                    <p>{duration}</p>
                </button>

            </div>
        </div>
    )
}

export default MusicItem