import React,{useContext} from 'react'
import { MusicContext } from '../../Context/MusicContext'
import './listsongnow.scss'
import { listMusic } from '../../Footer/music'
import { singerData } from '../../Data/singer'
import { albumData } from '../../Data/album'
import MusicItem from '../../MusicItem/MusicItem'

const ListSongNow = () => {
    const {
        isPlay,
        playlist,
        idPlaylistNow,
        idSongNow,
        setIdSongNow,
        setIsPlay,
        setIsClickMusic,
        loveSong,
        idSingerSongList,
        idAlbum
    } = useContext(MusicContext)
    let listP
    if(idPlaylistNow >= 0)
        listP = playlist.find(item => item.id === idPlaylistNow)
    else if(idPlaylistNow === -3)
        listP = loveSong
    else if(idPlaylistNow === -4)
        listP = [listMusic.find(item => item.id === idSongNow)]
    else if(idPlaylistNow === -1 || idPlaylistNow === -2)
        listP = listMusic
    else if(idPlaylistNow === -5){
        const singer = singerData.find(item => item.id === idSingerSongList)
        let singerSongData = []
        singer.listSong.forEach(item => {
            singerSongData = [...singerSongData,listMusic.find(i => i.id === item)]
        })
        listP = singerSongData
    }
    else if(idPlaylistNow === -6){
        const album = albumData.find(item => item.id === idAlbum)
        let albumSongData = []
        album.list.forEach(item => {
            albumSongData = [...albumSongData,listMusic.find(i => i.id === item)]
        })
        listP = albumSongData
    }
    const findItem = (list,id) => list.find(item => item.id === id)

    //Chuyen bai khi bam vao bai nhac
    const handleChangeSong = idMusic => {
        if(isPlay === false)
            setIsPlay(true)
        // setIdPlaylistNow(listP.id)
        setIdSongNow(idMusic)
        setIsClickMusic(true)
    }

    //Chuyen bai khi bam vao bai nhac (idPlaylist === -1)
    const handleChangeSongDefault = idMusic => {
        if(isPlay === false)
            setIsPlay(true)
        setIdSongNow(idMusic)
        setIsClickMusic(true)
    }
    
    return (
        <div className='listsongnow'>
            <h3 className='listsongnow__header'>Danh sách chờ</h3>
            <p className='listsongnow__title'>Đang phát</p>

            {idPlaylistNow > 0 && listP.list.length > 0 ? (
                listP.list.map((item,index) =>{
                    let song = findItem(listMusic,item)
                    return (
                        <MusicItem 
                            key={index}
                            index={index}
                            id={song.id}
                            handleChangeSongDefault={handleChangeSong}
                            img={song.image}
                            name={song.name}
                            singer={song.singer}
                            listSongNow = {true}
                            duration={song.duration}
                        />
                    )
                }
            )) : (
                <></>
            )}

            {(idPlaylistNow === -3 && listP.length > 0) ||
            (idPlaylistNow === -1 || idPlaylistNow === -2) ||
            (idPlaylistNow === -4) ||
            (idPlaylistNow === -5) || 
            (idPlaylistNow === -6)? (
                listP.map((item,index) =>
                    <MusicItem 
                        key={index}
                        index={index}
                        handleChangeSongDefault={handleChangeSongDefault}
                        id={item.id}
                        img={item.image}
                        name={item.name}
                        singer={item.singer}
                        listSongNow = {true}
                        duration={item.duration}
                    />
            )) : (
                <></>
            )}
        </div>
    )
}

export default ListSongNow