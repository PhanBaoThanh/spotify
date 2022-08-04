import React,{useContext, useState,useEffect} from 'react'
import './lovesong.scss'
import { MusicContext } from '../../Context/MusicContext'
import { listMusic } from '../../Footer/music'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleUp,faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const LoveSong = () => {
    const {
      isPlay,
      indexMusic,
      setIndexMusic,
      idPlaylistNow,
      setIsPlay,
      setIdPlaylistNow,
      setMoveValue,
      idSongNow,
      setIdSongNow,
      firstTimeClick,
      setFirstTimeClick,
      setIsClickMusic,
      loveSong,
      setLoveSong,
      setSearchValue
    } = useContext(MusicContext)
    const [playlistNow,setPlaylistNow] = useState(loveSong)
    
    useEffect(() => {
      setPlaylistNow(loveSong)
    },[loveSong])
  
    //Play playlist
    const handlePlaylistSong = () => {
      if(idPlaylistNow !== -3){
        setIdPlaylistNow(-3)
        setIsPlay(true)
        if(!firstTimeClick)
          setFirstTimeClick(true)
      }
      else
        setIsPlay(!isPlay)
    }
  
    //Xoa nhac
    const handleDeleteItem = (idMusic) => {
        let list = playlistNow.filter(item => item.id !== idMusic)
        if(list.length === 0)
            setIdPlaylistNow(-2)
        //Set LoveSong when click delete a Love Song
        setLoveSong(list)
    
        //setIndexMusic when click deleteSongBtn
        if(idPlaylistNow === -3 && idSongNow >= 1)
            playlistNow.forEach((item,index) => {
                if(item.id === idMusic)
                    if(index === indexMusic === 0)
                        setIndexMusic(0)
                    else if(index <= indexMusic)
                        setIndexMusic(prev => prev - 1)
            })
  
        //Set listMusic when click delete a Love Song
        listMusic.forEach(item => {
            if(item.id === idMusic){
                item.heart = false
                return;
            }
        })
    }
  
    //Move song
    const handleMoveSong = (idMusic,action = 'up') => {
      let list = []
      if(action === 'up'){
        playlistNow.forEach((item,index) => {
          if(item.id === idMusic){
            list[index-1] = item
            list = [...list,playlistNow[index-1]]
            setMoveValue({
              positionValue: index,
              move: 1,
            })
          }
          else
            list = [...list,item]
        })
      } else {
        let value = -1;
        playlistNow.forEach((item,index) => {
          if(value === -1){
            if(item.id === idMusic){
              value = item
              setMoveValue({
                positionValue: index,
                move: -1,
              })
            }
            list = [...list,item]
          }
          else{
            list[index-1] = item
            list = [...list, value]
            value = -1
          }
        })
      }
  
      //SetLoveSong when click Move Song btn
      setLoveSong(list)
    }
  
    //Chuyen bai khi bam vao bai nhac
    const handleChangeSong = idMusic => {
      //Phai khac playlist
      if(idPlaylistNow !== -3)
        setIdPlaylistNow(-3)
      if(isPlay === false)
        setIsPlay(true)
      setIdSongNow(idMusic)
      setIsClickMusic(true)
    }
  
  
    return (
      <div className='loveSong'>
        <div className='loveSongItem'>
          <div className='loveSongItem__header'>
            <div className='loveSongItem__header__img'>
              <img src='https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png' alt='' />
            </div>
  
            <div className='loveSongItem__header__box'>
              <div className='loveSongItem__header__box__name'>playlist</div>
              <h2 className='loveSongItem__header__box__header'>Bài hát đã thích</h2>
              <div className='loveSongItem__header__box__userName'>Bảo Thạnh - {playlistNow.length} bài</div>
            </div>
          </div>
        </div>
  
        <div className='loveSongItems'>
          {playlistNow.length > 0 ? (
            <div className='loveSongItems__have'>
              <div className='loveSongItems__have__btn' onClick={handlePlaylistSong}>
                <div className='loveSongItems__have__btn__box'>
                  {isPlay && idPlaylistNow === -3 ? (
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
            
              {playlistNow.map((item,index) => {
                return (
                  <div className='loveSongItems__have__list' key={index} style={idPlaylistNow === -3 && idSongNow === item.id ? {color: '#1ed760'}: {}}>
                    <div className='loveSongItems__have__list__box' onClick={() => handleChangeSong(item.id)}>
                      <div className='loveSongItems__have__list__box__count'>
                        <span>{index+1}</span>
                      </div>
  
                      <div className='loveSongItems__have__list__box__img'>
                        <img src={item.image} alt='ảnh nhạc' />
                        {idSongNow === item.id && isPlay && idPlaylistNow === -3 ? (
                            <svg role='img' height='16' width='16' className='Svg-sc-1bi12j5-0 EQkJl UIBT7E6ZYMcSDl1KL62g' viewBox="0 0 24 24">
                                <path d='M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z'></path>
                            </svg>
                        ) : (
                            <svg role="img" height="16" width="16" className="Svg-sc-1bi12j5-0 EQkJl UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                        )}
                      </div>
  
                      <div className='loveSongItems__have__list__box__text' style={{cursor: 'pointer'}}>
                        <p className='loveSongItems__have__list__box__text__song'>{item.name}</p>
                        <p className='loveSongItems__have__list__box__text__singer'>{item.singer}</p>
                      </div>
  
                    </div>
  
                    <div className='loveSongItems__have__list__nameSong'>
                      <p>{item.name}</p>
                    </div>
  
                    <div className='loveSongItems__have__list__btn'>
                      {index > 0 ? (
                        <div className='loveSongItems__have__list__btn__icon'  onClick={() => handleMoveSong(item.id,'up')}>
                          <FontAwesomeIcon icon={faAngleUp} />
                        </div>
                      ) : (
                        <></>
                      )}
  
                      {index < playlistNow.length-1 ? (
                        <div className='loveSongItems__have__list__btn__icon'  onClick={() => handleMoveSong(item.id,'down')}>
                          <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                      ) : (
                        <></>
                      )}
                      
                      
                      <button className='loveSongItems__have__list__btn__box' onClick={() => handleDeleteItem(item.id)}>Bỏ thích</button>
                    </div>
                  </div>
                )
              })}
              
            </div>
          ) : (
            <div className='loveSongItems__empty'>
                <div className='artist__empty'>
                    <div className='artist__empty__icon'>
                    <svg role='img' height='24' width='24' viewBox='0 0 24 24' className="Svg-sc-1bi12j5-0 EQkJl">
                        <path d='M15 4v12.167a3.5 3.5 0 11-3.5-3.5H13V4h2zm-2 10.667h-1.5a1.5 1.5 0 101.5 1.5v-1.5z'></path>
                    </svg>
                    </div>

                    <h1 className='artist__empty__header'>Bài hát bạn yêu thích sẽ xuất hiện ở đây</h1>
                    <p className='artist__empty__text'>Lưu bài hát bằng cách nhấn vào biểu tượng trái tim.</p>
                    <Link to='/search' style={{textDecoration: 'none'}} className='artist__empty__btn' onClick={() => setSearchValue('')}>Tìm bài hát</Link>
                </div>
            </div>
          )}
        </div>
      </div>
    )
}

export default LoveSong