import React,{useState,useRef,useEffect,useContext,useLayoutEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Footer.scss'
import { listMusic } from './music'
import { MusicContext } from '../Context/MusicContext'
import { singerData } from '../Data/singer'
import { albumData } from '../Data/album'

// if idPlaylistNow >= 0 => normal
// if idPlaylistNow = -1 => playlistNow is default playlist
// if idPlaylistNow = -2 => delete playlistNow
// if idPlaylistNow = -3 => play loveSong
// if idPlaylistNow = -4 => search song
// if idPlaylistNow = -5 => play singer song
// if idPlaylistNow = -6 => play album song

const Footer = () => {
  const location = useLocation()

  const [currentTimes, setCurrentTimes] = useState(0)
  const [duration,setDuration] = useState(0)
  const [musicData,setMusicData] = useState(listMusic)
  const [song,setSong] = useState({
    name: musicData[0].name,
    singer: musicData[0].singer,
    img: musicData[0].image,
    path: require(`${musicData[0].path}`),
  })

  const [isRandom,setIsRandom] = useState(false)
  const [isMouseDown,setIsMouseDown] = useState(false)
  const [silence,setSilence] = useState(true)
  const [loop,setLoop] = useState(false)
  const [heart,setHeart] = useState(musicData[0].heart)
  const [isOpen,setIsOpen] = useState(false)
  const [loca,setLoca] = useState(location)
  const [linkArtist,setLinkArtist] = useState('')
  const [loopOneTime,setLoopOneTime] = useState(false)
  const {
    indexMusic,
    setIndexMusic,
    playlist,
    isPlay,
    setIsPlay,
    idPlaylistNow,
    setIdPlaylistNow,
    moveValue,
    setMoveValue,
    idSongNow,
    setIdSongNow,
    firstTimeClick,
    setFirstTimeClick,
    isClickMusic,
    setIsClickMusic,
    loveSong,
    setLoveSong,
    idSingerSongList,
    setIdSingerSongList,
    idAlbum,
    setIdAlbum
  } = useContext(MusicContext)
  const audioRef = useRef()
  const rangeRef = useRef()
  const audioRangeRef = useRef()

  //change song
  const changeSong = (songData,countMusic = 0) => {
    setCurrentTimes(0)
    setIndexMusic(countMusic)
    setHeart(songData.heart)
    setSong({
      name: songData.name,
      singer: songData.singer,
      img: songData.image,
      path: require(`${songData.path}`),
    })
    setIdSongNow(songData.id)
    audioRef.current.load()
  }

  //Xu ly chay playlist
  useLayoutEffect(() => {
    if(idPlaylistNow > -1){
      const listSong = playlist.find(item => item.id === idPlaylistNow)
      if(listSong.list.length > 0){
        let arraylistSong = []
        listSong.list.forEach(item => arraylistSong = [...arraylistSong,listMusic.find(i => i.id === item)])
        setMusicData(arraylistSong)
        if(isPlay && firstTimeClick){
          changeSong(arraylistSong[0])
          setFirstTimeClick(false)
        }

        //Move item re render
        if(moveValue.positionValue >= 0){
          if(moveValue.positionValue === indexMusic)
            setIndexMusic(prev => prev - moveValue.move)
          else if(moveValue.positionValue + 1 === indexMusic && moveValue.move === -1)
            setIndexMusic(prev => prev - 1)
          else if(moveValue.positionValue - 1 === indexMusic && moveValue.move === 1)
            setIndexMusic(prev => prev + 1)
          setMoveValue({})
        }
      }
      else{
        changeSong(listMusic[0])
        setMusicData(listMusic)
        setIndexMusic(0)
        setIdPlaylistNow(-1)
        setIdSongNow(1)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[playlist,idPlaylistNow,indexMusic])

  //Xu ly chay love song playlist
  useEffect(() => {
    if(idPlaylistNow === -3){
      if(loveSong.length > 0){
        setMusicData(loveSong)
        if(isPlay && firstTimeClick){
          changeSong(loveSong[0])
          setFirstTimeClick(false)
        }

        //Move item re render
        if(moveValue.positionValue >= 0){
          if(moveValue.positionValue === indexMusic)
            setIndexMusic(prev => prev - moveValue.move)
          else if(moveValue.positionValue + 1 === indexMusic && moveValue.move === -1)
            setIndexMusic(prev => prev - 1)
          else if(moveValue.positionValue - 1 === indexMusic && moveValue.move === 1)
            setIndexMusic(prev => prev + 1)
          setMoveValue({})
        }
      }
      else{
        changeSong(listMusic[0])
        setMusicData(listMusic)
        setIndexMusic(0)
        setIdPlaylistNow(-1)
        setIdSongNow(1)
      }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[idPlaylistNow,loveSong,indexMusic])

  //Xu ly chay search song
  useEffect(() => {
    if(idPlaylistNow === -4){
      const list = [listMusic.find(item => item.id === idSongNow)]
      setMusicData(list)
      changeSong(list[0])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[idPlaylistNow,idSongNow]) 

  //Xu ly chay singer song
  useEffect(() => {
    if(idPlaylistNow === -5 && idSingerSongList !== -1){
      const singer = singerData.find(item => item.id === idSingerSongList)
      let singerSongData = []
      singer.listSong.forEach(item => {
        singerSongData = [...singerSongData,listMusic.find(i => i.id === item)]
      })
      setMusicData(singerSongData)
      if(isPlay && firstTimeClick){
        changeSong(singerSongData[0])
        setFirstTimeClick(false)
      }
    }
    else if(idPlaylistNow !== -5 || idSingerSongList === -1)
      setIdSingerSongList(-1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[idPlaylistNow,idSingerSongList])

    //Xu ly chay album song
    useEffect(() => {
      if(idPlaylistNow === -6 && idAlbum !== -1){
        const album = albumData.find(item => item.id === idAlbum)
        let albumSongData = []
        album.list.forEach(item => {
          albumSongData = [...albumSongData,listMusic.find(i => i.id === item)]
        })
        setMusicData(albumSongData)
        if(isPlay && firstTimeClick){
          changeSong(albumSongData[0])
          setFirstTimeClick(false)
        }
      }
      else if(idPlaylistNow !== -6 || idAlbum === -1)
        setIdAlbum(-1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idPlaylistNow,idAlbum])

  //Click music de chuyen bai
  useEffect(() => {
    if(isClickMusic){
      if(idPlaylistNow > -1){
        const listSong = playlist.find(item => item.id === idPlaylistNow)
        //tra ve Mang item cac song co trong playlist
        const arraylistSong = listSong.list.map(item => listMusic.find(i => i.id === item))
        arraylistSong.forEach((item,index) => {
          if(item.id === idSongNow){
            changeSong(arraylistSong[index],index)
            return;
          }
        })
      }
      else if(idPlaylistNow === -3){
        loveSong.forEach((item,index) => {
          if(item.id === idSongNow){
            changeSong(loveSong[index],index)
            return;
          }
        })
      }
      else if(idPlaylistNow === -5){
        const singer = singerData.find(item => item.id === idSingerSongList)
        let singerSongData = []
        singer.listSong.forEach((item,index) => {
          singerSongData = [...singerSongData,listMusic.find(i => i.id === item)]
          if(item === idSongNow)
            changeSong(singerSongData[index],index)
        })
      }
      else if(idPlaylistNow === -6){
        const album = albumData.find(item => item.id === idAlbum)
        let albumSongData = []
        album.list.forEach((item,index) => {
          albumSongData = [...albumSongData,listMusic.find(i => i.id === item)]
          if(item === idSongNow)
            changeSong(albumSongData[index],index)
        })
      }
      else
        changeSong(listMusic[idSongNow - 1],idSongNow - 1)
      setIsClickMusic(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isClickMusic])

  //Delete playlist
  useEffect(() => {
    if(idPlaylistNow === -2){
      changeSong(listMusic[0])
      setMusicData(listMusic)
      setIdSongNow(1)
      setIndexMusic(0)
      setIdPlaylistNow(-1)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[idPlaylistNow])

  //Play playlist btn & play/pause btn
  useEffect(() => {
    if(isPlay)  audioRef.current.play()
    else audioRef.current.pause()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isPlay])

  //Load data
  const handleLoadedData = () => {
    setCurrentTimes(0)
    setDuration(audioRef.current.duration)
    if (isPlay) audioRef.current.play();
  }

  //Xu ly change am thanh
  useEffect(() => {
    rangeRef.current.addEventListener('input', (e) => {
      audioRef.current.volume = e.target.value/100
      if(Number(e.target.value) === 0)
        setSilence(true)
      else
        setSilence(false)

      rangeRef.current.style.backgroundSize = rangeRef.current.value + '% 100%'
    })
  },[silence])

  //Xu ly click btn silence
  const handleSilenceChange = () => {
    if(!silence)
      audioRef.current.volume = 0
    else
      audioRef.current.volume = rangeRef.current.value / 100
    setSilence(!silence)
  }

  //Xu ly thanh range audio
  const handleInputChange = () => {
    audioRangeRef.current.style.backgroundSize = audioRangeRef.current.value + '% 100%'
    if(!isMouseDown)
      setCurrentTimes((audioRef.current.currentTime/audioRef.current.duration)*100)
    else
      setCurrentTimes(Number(audioRangeRef.current.value))
  }

  //Next song
  const handleNextSong = () => {
    let continueSong = 0;
    if(isRandom)
      continueSong = Math.floor(Math.random() * musicData.length)
    else
      if(indexMusic + 1 >= musicData.length)
        continueSong = 0
      else
        continueSong = indexMusic + 1
    changeSong(musicData[continueSong],continueSong)
  }

  //prev song
  const handlePrevSong = () => {
    let continueSong =0
    if(isRandom)
      continueSong = Math.floor(Math.random() * musicData.length)
    else
      if(indexMusic===0)
        continueSong = musicData.length -1
      else
        continueSong = indexMusic -1
    changeSong(musicData[continueSong],continueSong)
  }

  //random song
  const handleRandomSong = () => {
    if(isRandom && !loop){
      const randomSong = Math.floor(Math.random() * musicData.length)
      changeSong(musicData[randomSong],randomSong)
    }
  }

  //Xu ly thanh range audio tung second
  const handleOnTimeUpdate = () => {
    if(!isMouseDown){
      setCurrentTimes((audioRef.current.currentTime/audioRef.current.duration)*100)
      audioRangeRef.current.style.backgroundSize = audioRangeRef.current.value + '% 100%'
      if(Math.floor(audioRef.current.currentTime) === Math.floor(audioRef.current.duration))
        if(isRandom)
          handleRandomSong()
        else if(loop){
          if(loopOneTime){
            changeSong(musicData[indexMusic],indexMusic)
            setLoopOneTime(false)
            setLoop(false)
          }
          //
        }
        else
          handleNextSong()
    }
  }

  //set currentTime cua Song
  const handleOnMouseUp = () => {
    setCurrentTimes(Number(audioRangeRef.current.value))
    audioRef.current.currentTime = (audioRangeRef.current.value * duration) / 100
    audioRangeRef.current.style.backgroundSize = audioRangeRef.current.value + '% 100%'
    setIsMouseDown(false)
  }

  //open modal listSong
  const handleClickListsong = () => {
    setIsOpen(!isOpen)
    setLoca(location.pathname)
  }

  //Open/close modal listSongNow
  useEffect(() => {
    if(isOpen && location.pathname !== '/listSong')
      setIsOpen(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[location])

  //Link artist page
  useEffect(() => {
    const link = singerData.find(item => item.name.toLowerCase() === song.singer.toLowerCase())
    if(link)
      setLinkArtist(`/artist/${link.id}`)
    else
      setLinkArtist('')
  },[song])

  return (
    <footer className='footer'>
      <div className='footer__song'>
        <div className='footer__song__mySong'>
          <img className='footer__song__mySong__img' src={song.img} alt='Song' />
          <div className='footer__song__mySong__text'>
          <div className='footer__song__mySong__name'>{song.name}</div>
            {linkArtist !== '' ? (
              <Link to={linkArtist} className='footer__song__mySong__singer' style={{color: '#fff',textDecoration: 'none'}}>{song.singer}</Link>
            ) : (
              <div className='footer__song__mySong__singer' style={{color: '#fff',textDecoration: 'none'}}>{song.singer}</div>
            )}
          </div>
        </div>

        <div 
          className='footer__song__svg' 
          onClick={() => {
            setHeart(!heart)
            if(!heart === true){
              listMusic.forEach(item => {
                if(item.id === idSongNow)
                  setLoveSong(prev => [
                    ...prev,
                    {
                      id: idSongNow,
                      name: song.name,
                      singer: song.singer,
                      image: song.img,
                      path: item.path,
                      heart: true
                    }
                  ])
              })
            }
            else{
              setLoveSong(loveSong.filter(item => item.id !== idSongNow))
              if(idPlaylistNow === -3 && idSongNow > 0){
                loveSong.forEach((item,index) => {
                  if(item.id === idSongNow)
                    if(index === indexMusic === 0)
                      setIndexMusic(0)
                    else if(index <= indexMusic)
                      setIndexMusic(prev => prev - 1)
                })
              }
            }

            if(musicData === listMusic)
              listMusic[indexMusic].heart = !heart
            else
              listMusic[idSongNow - 1].heart = !heart
          }}
        >
            {heart ? (
              <svg role='img' height='16' width='16' viewBox='0 0 16 16' className='Svg-sc-1bi12j5-0 EQkJl' style={{fill: '#1db954',opacity: 1}}>
                <path d='M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z'></path>
              </svg>
            ) : (
              <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path></svg>
            )}
        </div>
      </div>

      <div className='footer__middle'>
        <div className='footer__middle__btn'>
          <div className='footer__middle__btn__svg' onClick={() => setIsRandom(!isRandom)}>
            <svg role="img" height="16" width="16" viewBox="0 0 16 16" style={isRandom? {fill: '#1db954',opacity: 1 } : {}} className="Svg-sc-1bi12j5-0 EQkJl"><path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path><path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path></svg>
          </div>

          <div className='footer__middle__btn__svg' onClick={handlePrevSong}>
            <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path></svg>
          </div>
          
          <div className='footer__middle__btn__box' onClick={() => setIsPlay(!isPlay)}>
            {isPlay ? (
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path></svg>
            ) : (
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path></svg>
            )}
          </div>

          <div className='footer__middle__btn__svg' onClick={handleNextSong}>
            <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path></svg>    
          </div>

          <div 
            className='footer__middle__btn__svg' 
            onClick={() => {
              if(loop){
                if(loopOneTime){
                  setLoopOneTime(false)
                  setLoop(false)
                }
                else
                  setLoopOneTime(true)
              }
              else
                setLoop(!loop)
            }}
          >
            {loopOneTime ? (
              <svg role='img' height='16' width='16' style={{fill: '#1db954',opacity: '1 !important'}} viewBox='0 0 16 16' className='Svg-ytk21e-0 jAKAlG'>
                <path d='M0 4.75A3.75 3.75 0 013.75 1h.75v1.5h-.75A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5zM12.25 2.5h-.75V1h.75A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25z'></path>
                <path d='M9.12 8V1H7.787c-.128.72-.76 1.293-1.787 1.313V3.36h1.57V8h1.55z'></path>
              </svg>
            ) : (
              <svg role="img" height="16" width="16" style={loop? {fill: '#1db954',opacity: 1 } : {}} viewBox="0 0 16 16" className='Svg-sc-1bi12j5-0 EQkJl'><path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path></svg>
            )}
          </div>
        </div>

        <div className='footer__middle__progress'>
          <audio
            ref={audioRef}
            preload='auto'
            muted={silence ? true : false}
            onTimeUpdate={handleOnTimeUpdate}
            onLoadedData={handleLoadedData}
            loop={loop? true: false}
          >
            <source src={song.path} type="audio/mp3" />
          </audio>
          <span className='footer__middle__progress__now'>
            {Math.floor((currentTimes * duration/100)/60) || 0}:
            {
              Math.floor(((currentTimes* duration)/100)%60) ? (
                Math.floor(((currentTimes* duration)/100)%60) > 9 ? (Math.floor(((currentTimes* duration)/100)%60)) : ('0'+Math.floor(((currentTimes* duration)/100)%60))
              ) : ('00')
            }
          </span>
          
          <input 
            ref={audioRangeRef} 
            value={currentTimes} 
            type='range' 
            className='footer__middle__progress__input' 
            min='0' 
            step='0.01' 
            max='100' 
            onChange={handleInputChange}
            onMouseDown={() => setIsMouseDown(true)} 
            onMouseUp={handleOnMouseUp}
          />
          <span className='footer__middle__progress__end'>{Math.floor(duration/60)}:{Math.floor(duration%60) > 9 ? (Math.floor(duration%60)) : '0'+(Math.floor(duration%60))}</span>
        </div>
      </div>

      <div className='footer__end'>
       
        <Link to={isOpen ? `${loca}` : '/listSong'} className='footer__end__svg' onClick={handleClickListsong}>
          <svg role="img" style={isOpen ? {fill: '#1db954',opacity: 1 } : {}} height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path></svg>        
        </Link>

        <label className='footer__end__svg' htmlFor='sound' onClick={handleSilenceChange}>
          {
            silence ? (
              <svg role="presentation" height="16" width="16" aria-label="Đang tắt tiếng" id="volume-icon" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"></path><path d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>
            ) : (
              <svg role="presentation" height="16" width="16" aria-label="Âm lượng trung bình" id="volume-icon" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z"></path></svg>
            )
          }
        </label>
        <input defaultValue='0' ref={rangeRef} type='range' className='footer__end__progress' name='sound' step='1' min='0' max='100'/>
      </div>
    </footer>
  )
}

export default Footer