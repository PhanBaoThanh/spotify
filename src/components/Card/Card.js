import React,{useContext} from 'react'
import { MusicContext } from '../Context/MusicContext'
import {Grid} from '@mui/material'
import { Link } from 'react-router-dom'
import './card.scss'
const Card = ({link,handlePlaylistSong = () => {},handleClickItem = () => {},id = -1,img,name,title,isArtist= false, isAlbum = false}) => {
    const {
        isPlay,
        idPlaylistNow,
        idSingerSongList,
        idAlbum
    } = useContext(MusicContext)

    return (
        <Grid item xs={6} sm={5} md={2} className='padding__item'>
            <Link to={link} style={{textDecoration: 'none',color: '#fff'}} className='body__content__item__box' onClick={handleClickItem}>
                <div className='body__content__item__icon' onClick={() => handlePlaylistSong(id)}>
                {isPlay ? (
                    ((idPlaylistNow === id && isArtist === false && isAlbum === false) || 
                    (idAlbum === id && isAlbum === true )|| 
                    (idSingerSongList === id && isArtist === true )? (
                        <svg role='img' height='24' width='24' viewBox='0 0 24 24' className='Svg-sc-1bi12j5-0 EQkJl'><path d='M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z'></path></svg>
                    ) : (
                        <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    ))
                ) : (
                        <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                )}
                </div>
                <img className='body__content__item__img' src={img} alt='ok' />
                <p className='body__content__item__name'>{name}</p>
                <p className='body__content__item__description'>{title}</p>
            </Link>
        </Grid>
    )
}

export default Card