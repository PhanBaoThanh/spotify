import React,{useContext,useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {singerData} from '../../Data/singer'
import { listMusic } from '../../Footer/music'
import { MusicContext } from '../../Context/MusicContext'
import { albumData } from '../../Data/album'
import './artistpage.scss'
import SearchMusic from '../Search/SearchMusic'
import Card from '../../Card/Card'
import { Grid } from '@mui/material'
import MusicItem from '../../MusicItem/MusicItem'

const ArtistPage = () => {
    const {
        isPlay,
        setIsPlay,
        setFirstTimeClick,
        idPlaylistNow,
        setIdPlaylistNow,
        setIdSongNow,
        setIsClickMusic,
        idSingerSongList,
        setIdSingerSongList,
        searchValue,
        idAlbum,
        setIdAlbum,
        myArtist,
        setMyArtist
    } = useContext(MusicContext)
    const {artistId} = useParams()
    const [singerAlbum,setSingerAlbum] = useState([])
    const [singerNow,setSingerNow] = useState({})
    const [playlistNow,setPlaylistNow] = useState([])
    
    useEffect(() => {
        setSingerNow(singerData.find(item => item.id === Number(artistId)))
        setPlaylistNow(singerData.find(item => item.id === Number(artistId)).listSong.map(item => listMusic.find(i => i.id === item)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[artistId])


    useEffect(() => {
        let album = []
        if(singerNow.idAlbum)
            singerNow.idAlbum.forEach(item => album =  [...album,albumData.find(i => i.id === item)])
        setSingerAlbum(album)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[artistId,singerNow])


    //Xu ly play singer song
    const handlePlaylistSong = () => {
        if(idSingerSongList !== Number(artistId)){
            if(idPlaylistNow !== -5)
                setIdPlaylistNow(-5)
            setIdSingerSongList(Number(artistId))
            setIsPlay(true)
            setFirstTimeClick(true)
        }
        else
            setIsPlay(!isPlay)
    }

    //Chuyen nhac khi bam vao bai nhac
    const handleChangeSong = idMusic => {
        if(idPlaylistNow !== -5)
            setIdPlaylistNow(-5)
        if(idSingerSongList !== Number(artistId))
            setIdSingerSongList(Number(artistId))
        if(isPlay === false)
            setIsPlay(true)
        setIdSongNow(idMusic)
        setIsClickMusic(true)
    }

    //Xu ly play album
    const handleClickAlbum = (id) => {
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

    //Xu ly click follow btn
    const handleClickBtnFollow = () => {
        setMyArtist(prev => [
            ...prev,
            singerData.find(item => item.id === Number(artistId))
        ])
    }

    //Xu ly click unfollow btn
    const handleClickBtnUnfollow = () => {
        setMyArtist(myArtist.filter(item => item.id !== Number(artistId)))
    }

    return (
        <div className='artistPage'>
            {searchValue !== '' ? (
                <SearchMusic add='padding'/>
            ) : (
                <div className='box'>
                    <div className='loveSongItem'>
                        <div className='loveSongItem__header'>
                            <div className='loveSongItem__header__img'>
                                <img src={singerNow.image} alt='' />
                            </div>

                            <div className='loveSongItem__header__box'>
                                <h2 className='loveSongItem__header__box__header'>{singerNow.name}</h2>
                                <div className='loveSongItem__header__box__description'>{singerNow.description}</div>
                                <div className='loveSongItem__header__box__dayOfBirth'><span>Ngày sinh:</span> {singerNow.dayOfBirth}</div>
                                <div className='loveSongItem__header__box__country'><span>Quốc tịch:</span> {singerNow.country}</div>
                            </div>

                            <div className='loveSongItem__header__btn'>
                            {myArtist.find(item => item.id === Number(artistId)) ? (
                                <p className='loveSongItem__header__btn__follow' onClick={handleClickBtnUnfollow}>Bỏ theo dõi</p>
                            ) : (
                                <p className='loveSongItem__header__btn__follow' onClick={handleClickBtnFollow}>Theo dõi</p>
                            )}
                            </div>
                        </div>
                    </div>
                    <div className='box__item'>
                        <div className='loveSongItems'>
                            <div className='loveSongItems__have'>
                                <div className='loveSongItems__have__btn' onClick={handlePlaylistSong}>
                                <div className='loveSongItems__have__btn__box'>
                                    {isPlay && idPlaylistNow === -5 && idSingerSongList === singerNow.id ? (
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
                                        artistId={Number(artistId)}
                                        duration={item.duration}
                                    />
                                ))}
                                
                            </div>
                        </div>

                        {singerAlbum.length > 0 ? (
                            <div className='searchMusic__song'>
                                <h3 className='searchMusic__song__header'>Album</h3>
                                <Grid container columns={14}>  
                                    {singerAlbum.map((item,index) => (
                                        <Card 
                                        key={index}
                                        id={item.id}
                                        handlePlaylistSong={handleClickAlbum}
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

                </div>
            )}
        </div>
    )
}

export default ArtistPage