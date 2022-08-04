import React,{useContext, useState,useEffect,useRef} from 'react'
import './playlistItem.scss'
import {useNavigate,useParams} from 'react-router-dom'
import { MusicContext } from '../../Context/MusicContext'
import { listMusic } from '../../Footer/music'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleUp,faAngleDown} from '@fortawesome/free-solid-svg-icons'
const PlaylistItem = () => {
  const navigate = useNavigate()
  let {playlistId}  = useParams()
  const {
    isPlay,
    indexMusic,
    setIndexMusic,
    playlist,
    setPlaylist,
    idPlaylistNow,
    setIsPlay,
    setIdPlaylistNow,
    setMoveValue,
    idSongNow,
    setIdSongNow,
    firstTimeClick,
    setFirstTimeClick,
    setIsClickMusic,
  } = useContext(MusicContext)
  const [playlistNow,setPlaylistNow] = useState(playlist.find(item =>item.id === Number(playlistId)))
  const modalRef = useRef()
  const changeRef = useRef()
  const deleteRef = useRef()
  const inputRef = useRef()
  
  useEffect(() => {
    setPlaylistNow(playlist.find(item =>item.id === Number(playlistId)))
  },[playlist,playlistId])

  //Play playlist
  const handlePlaylistSong = () => {
    if(playlistNow.id !== idPlaylistNow){
      setIdPlaylistNow(playlistNow.id)
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

  //Them nhac
  const handleSetPlaylist = (idMusic) => {
    let playlistCopy = [];
    playlist.forEach(item => {
      if(item.id === Number(playlistId))
        playlistCopy = [
          ...playlistCopy,
          {
            id: item.id,
            name: item.name,
            list: [...item.list,idMusic]
          }
        ]
      else
        playlistCopy = [...playlistCopy,item]
    })
    setPlaylist(playlistCopy)
  }

  //Xoa nhac
  const handleDeleteItem = (idMusic) => {
    let list = playlistNow.list.filter(item => item !== idMusic)
    if(list.length === 0 && idPlaylistNow === playlist.id)
      setIdPlaylistNow(-2)

    //setIndexMusic when click deleteSongBtn
    if(idPlaylistNow === playlistNow.id && idSongNow >= 1){
      playlistNow.list.forEach((item,index) => {
        if(item === idMusic){
          if(index === indexMusic === 0)
            setIndexMusic(0)
          else if(index <= indexMusic)
            setIndexMusic(prev => prev - 1)
        }
      })
    }

    //SetPlaylist when click deleteSongBtn
    let playlistCopy = [];
    playlist.forEach(item => {
      if(item.id === Number(playlistId))
        playlistCopy = [
          ...playlistCopy,
          {
            id: item.id,
            name: item.name,
            list
          }
        ]
      else
        playlistCopy = [...playlistCopy,item]
    })
    setPlaylist(playlistCopy)
  }

  //Xoa playlist
  const handleDeletePlaylist = () => {
    if(idPlaylistNow === playlistNow.id){
      setIdPlaylistNow(-2)
      setFirstTimeClick(false)
    }
    setPlaylist(playlist.filter(item => item.id !== Number(playlistId)))
    navigate('/')
  }

  //Move song
  const handleMoveSong = (idMusic,action = 'up') => {
    let list = []
    if(action === 'up'){
      playlistNow.list.forEach((item,index) => {
        if(item === idMusic){
          list[index-1] = item
          list = [...list,playlistNow.list[index-1]]
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
      playlistNow.list.forEach((item,index) => {
        if(value === -1){
          if(item === idMusic){
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

    //SetPlaylist when click deleteSongBtn
    let playlistCopy = [];
    playlist.forEach(item => {
      if(item.id === Number(playlistId))
        playlistCopy = [
          ...playlistCopy,
          {
            id: item.id,
            name: item.name,
            list
          }
        ]
      else 
        playlistCopy = [...playlistCopy,item]
    })
    setPlaylist(playlistCopy)
  }

  //Loc nhac da them vao playlist
  const findItem = (list,id) => {
    return list.find(item => item.id === id)
  }

  //Chuyen bai khi bam vao bai nhac
  const handleChangeSong = idMusic => {
    //Phai khac playlist
    if(idPlaylistNow !== playlistNow.id)
      setIdPlaylistNow(playlistNow.id)
    if(isPlay === false)
      setIsPlay(true)
    setIdSongNow(idMusic)
    setIsClickMusic(true)
  }

  const handleClickCancel = () => {
    modalRef.current.style.visibility = null
    deleteRef.current.style.visibility = null
    changeRef.current.style.visibility = null
  }

  const handleClickDeletePlaylist = () => {
    modalRef.current.style.visibility = 'visible'
    deleteRef.current.style.visibility = 'visible'
  }

  const handleClickModal = () => {
    if(modalRef.current.style.visibility !== null){
      modalRef.current.style.visibility = null
      deleteRef.current.style.visibility = null
      changeRef.current.style.visibility = null
    }
  }

  const handleClickChangeNameSong = () => {
    modalRef.current.style.visibility = 'visible'
    changeRef.current.style.visibility = 'visible'
  }

  const handleChangeNamePlaylist = () => {
    if(inputRef.current.value !== '' && inputRef.current.value !== null){
      let playlistTemp = []
      playlist.forEach(item => {
        if(item.id === Number(playlistId)){
          playlistTemp = [
            ...playlistTemp,
            {
              id: item.id,
              list: item.list,
              name: inputRef.current.value
            }
          ]
        }
        else
          playlistTemp = [
            ...playlistTemp,
            item
          ]
      })
      inputRef.current.value = ''
      setPlaylist(playlistTemp)
    }
    modalRef.current.style.visibility = null
    changeRef.current.style.visibility = null
  }


  return (
    <div className='playlist'>
      <div className='playlistItem'>
        <div className='playlistItem__header'>
          <div className='playlistItem__header__img'>
            <svg height='64' width='64' viewBox='0 0 80 81' xmlns='http://www.w3.org/2000/svg'>
              <path d='M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z'></path>
            </svg>
          </div>

          <div className='playlistItem__header__box'>
            <div className='playlistItem__header__box__name'>playlist</div>
            <h2 className='playlistItem__header__box__header' onClick={handleClickChangeNameSong}>{playlistNow.name}</h2>
            <div className='playlistItem__header__box__userName'>Bảo Thạnh - {playlistNow.list.length} Bài</div>
          </div>

          <div className='playlistItem__header__btn'>
            <p onClick={handleClickDeletePlaylist}>Xóa Playlist</p>
          </div>
        </div>
      </div>

      <div className='playlistItems'>
        {playlistNow.list.length > 0 ? (
          <div className='playlistItems__have'>
            <div className='playlistItems__have__btn' onClick={handlePlaylistSong}>
              <div className='playlistItems__have__btn__box'>
                {isPlay && idPlaylistNow === playlistNow.id ? (
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
          
            {playlistNow.list.map((item,index) => {
              let song = findItem(listMusic,item)
              return (
                <div className='playlistItems__have__list' key={index} style={idPlaylistNow === playlistNow.id && idSongNow === song.id ? {color: '#1ed760'}: {}}>
                  <div className='playlistItems__have__list__box' onClick={() => handleChangeSong(song.id)}>
                    <div className='playlistItems__have__list__box__count'>
                      <span>{index+1}</span>
                    </div>

                    <div className='playlistItems__have__list__box__img'>
                      <img src={song.image} alt='ảnh nhạc' />
                      {idPlaylistNow === playlistNow.id && idSongNow === song.id && isPlay ? (
                        <svg role='img' height='16' width='16' className='Svg-sc-1bi12j5-0 EQkJl UIBT7E6ZYMcSDl1KL62g' viewBox="0 0 24 24">
                          <path d='M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z'></path>
                        </svg>
                      ) : (
                        <svg role="img" height="16" width="16" className="Svg-sc-1bi12j5-0 EQkJl UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                      )}
                    </div>

                    <div className='playlistItems__have__list__box__text' style={{cursor: 'pointer'}}>
                      <p className='playlistItems__have__list__box__text__song'>{song.name}</p>
                      <p className='playlistItems__have__list__box__text__singer'>{song.singer}</p>
                    </div>

                  </div>

                  <div className='playlistItems__have__list__nameSong'>
                    <p>{song.name}</p>
                  </div>

                  <div className='playlistItems__have__list__btn'>
                    {index > 0 ? (
                      <div className='playlistItems__have__list__btn__icon'  onClick={() => handleMoveSong(song.id,'up')}>
                        <FontAwesomeIcon icon={faAngleUp} />
                      </div>
                    ) : (
                      <></>
                    )}

                    {index < playlistNow.list.length-1 ? (
                      <div className='playlistItems__have__list__btn__icon'  onClick={() => handleMoveSong(song.id,'down')}>
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                    ) : (
                      <></>
                    )}
                    
                    
                    <button className='playlistItems__have__list__btn__box' onClick={() => handleDeleteItem(song.id)}>Xóa</button>
                  </div>
                </div>
              )
            })}
            
          </div>
        ) : (
          <></>
        )}

        <div className='playlistItems__empty'>
            <div className='playlistItems__empty__header'>
              <h3 className='playlistItems__empty__header__title'>Đề xuất</h3>
              <p className='playlistItems__empty__header__text'>Dựa trên tiêu đề của danh sách phát này</p>
            </div>
            {listMusic.map((item,index) => {
              if(playlistNow.list.some(i => i === item.id))
                return <span key={index}></span>
              else
                return (
                  <div className='playlistItems__empty__list' key={index}>
                    <div className='playlistItems__empty__list__box'>
                      <div className='playlistItems__empty__list__box__img'>
                        <img src={item.image} alt='ảnh nhạc' />
                        <svg role="img" height="16" width="16" className="Svg-sc-1bi12j5-0 EQkJl UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                      </div>

                      <div className='playlistItems__empty__list__box__text'>
                        <p className='playlistItems__empty__list__box__text__song'>{item.name}</p>
                        <p className='playlistItems__empty__list__box__text__singer'>{item.singer}</p>
                      </div>

                    </div>

                    <div className='playlistItems__empty__list__nameSong'>
                      <p>{item.name}</p>
                    </div>

                    <div className='playlistItems__empty__list__btn'>
                      <button className='playlistItems__empty__list__btn__box' onClick={() => handleSetPlaylist(item.id)}>Thêm</button>
                    </div>
                  </div>
                )
            })}    
          </div>    
        

      </div>

      <div ref={modalRef} className='playlist__modal' onClick={e => handleClickModal(e)}>
        <div ref={changeRef} className='playlist__modal__change' onClick={e => e.stopPropagation()}>
          <h3>Đổi tên playlist</h3>
          <input ref={inputRef} placeholder='Name' />
          <div className='playlist__modal__change__btn'>
              <div className='playlist__modal__change__btn__item' onClick={handleClickCancel}>Bỏ qua</div>
              <div className='playlist__modal__change__btn__item' onClick={handleChangeNamePlaylist}>Lưu</div>
          </div>
        </div>
        <div ref={deleteRef} className='playlist__modal__delete' onClick={e => e.stopPropagation()}>
            <h3>Bạn có chắc chắn?</h3>
            <p>Bạn có chắc chắn muốn xóa dánh sách phát này, tất cả bài hát đã được thêm vào trong danh sách phát này sẽ được xóa hết!</p>
            <div className='playlist__modal__delete__btn'>
              <div className='playlist__modal__delete__btn__item cancel' onClick={handleClickCancel}>Hủy bỏ</div>
              <div className='playlist__modal__delete__btn__item agree' onClick={handleDeletePlaylist}>Xóa playlist</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistItem