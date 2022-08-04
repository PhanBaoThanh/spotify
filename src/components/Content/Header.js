import React,{useState,useEffect,useContext} from 'react'
import { useLocation,Link} from 'react-router-dom'
import { listMusic } from '../Footer/music'
import './header.scss'
import { MusicContext } from '../Context/MusicContext'
import {singerData} from '../Data/singer'
import {albumData} from '../Data/album'
const Header = () => {
  const [click,setClick] = useState(false)
  const [scroll,setScroll] = useState(false)
  const [loca,setLoca] = useState('')
  const location = useLocation()
  const {
    setSearchMusicData,
    setSearchArtistData,
    setSearchAlbumData,
    searchValue,
    setSearchValue
  } = useContext(MusicContext)

  const handleClickAccount = () => {
    setClick(!click)
  }

  useEffect(() => {
    setLoca(location.pathname)
  },[location])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50)
        setScroll(true)
      else
        setScroll(false)
    })
  },[])

  useEffect(() => {
    if(searchValue === ''){
      setSearchMusicData([])
      setSearchAlbumData([])
      setSearchArtistData([])
    }
    else{
      listMusic.forEach((item,index) => {
        if(index === 0)
        setSearchMusicData([])
        if(item.name.toLowerCase().indexOf(searchValue.trim().toLowerCase()) >= 0)
        setSearchMusicData(prev => [...prev,item])
      })
      
      
      singerData.forEach((item,index) => {
        if(index === 0)
        setSearchArtistData([])
        if(item.name.toLowerCase().indexOf(searchValue.trim().toLowerCase()) >= 0)
        setSearchArtistData(prev => [...prev,item])
      })
      
      albumData.forEach((item,index) => {
        if(index === 0)
        setSearchAlbumData([])
        if(item.name.toLowerCase().indexOf(searchValue.trim().toLowerCase()) >= 0)
        setSearchAlbumData(prev => [...prev,item])
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchValue])

  return (
    <div className={`header ${loca.indexOf('/search') !== -1 ||
      loca.indexOf('/artist/') !== -1 ||
      loca.indexOf('/album/') !== -1 ||
      loca==='/lib' ||
      loca === '/lib/podcast' ||
      loca === '/lib/artist' ||
      loca === '/lib/album'
      ? 'spaceBetween':'flexEnd'} ${scroll ? 'background--black' : ''}`}>
      {loca.indexOf('/search') !== -1 ||
      loca.indexOf('/artist/') !== -1 ||
      loca.indexOf('/album/') !== -1
      ? 
      (
        <div className='header__search'>
          <label htmlFor='search' className='header__search__icon'>
            <svg role="img" height="24" width="24" className="Svg-sc-1bi12j5-0 EQkJl mOLTJ2mxkzHJj6Y9_na_" aria-hidden="true" viewBox="0 0 24 24"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>
          </label>
          <input 
            value={searchValue} 
            onKeyDown={e => {
              if(e.keyCode === 13 && searchValue !== '')
                e.target.blur()
            }} 
            type='text' 
            autoComplete='off' 
            name='search' 
            placeholder='Nghệ sĩ, bài hát hoặc podcast' 
            className='header__search__input' 
            onInput={e => setSearchValue(e.target.value)} 
            spellCheck={false}
            />
          
        </div>
      ) : (
        <></>
      )}
      
      {
        loca.indexOf('/search') !== -1 &&
        loca.indexOf('/artist/') !== -1 &&
        loca.indexOf('/album/') !== -1 &&
        loca !=='/lib' &&
        loca !== '/lib/podcast' &&
        loca !== '/lib/artist' &&
        loca !== '/lib/album'
        ? (
          <div className='header__btn'>
            <span>Nâng cấp</span>
          </div>
        ) : (
          <></>
      )}

      {loca === '/lib' ||
        loca === '/lib/podcast' ||
        loca === '/lib/artist' ||
        loca === '/lib/album'
       ? (
        <div className='header__lib'>
          <div className='header__lib__box'>
            <Link to='/lib' className={`header__lib__box__item ${loca === '/lib' ? 'click' : ''}`}>
              <p>Playlist</p>
            </Link>
            <Link to='/lib/podcast' className={`header__lib__box__item ${loca === '/lib/podcast' ? 'click' : ''}`}>
              <p>Podcast</p>
            </Link>
            <Link to='/lib/artist' className={`header__lib__box__item ${loca === '/lib/artist' ? 'click' : ''}`}>
              <p>Nghệ sĩ</p>
            </Link>
            <Link to='/lib/album' className={`header__lib__box__item ${loca === '/lib/album' ? 'click' : ''}`}>
              <p>Album</p>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className='header__account' onClick={handleClickAccount}>
          <img className='header__account__img' src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=973088266910756&height=300&width=300&ext=1662189451&hash=AeTEasZ82h0K3eKuOI0" alt='avt' />
          <span>Bảo Thạnh</span>
          {click ? (
            <svg role="img" height="16" width="16" className="Svg-sc-1bi12j5-0 EQkJl eAXFT6yvz37fvS1lmt6k" viewBox="0 0 16 16"><path d="M14 10L8 4l-6 6h12z"></path></svg>
          ) : (
            <svg role="img" height="16" width="16" className="Svg-sc-1bi12j5-0 EQkJl eAXFT6yvz37fvS1lmt6k" viewBox="0 0 16 16"><path d="M14 6l-6 6-6-6h12z"></path></svg>
          )}
          {click ? (
            <div className='box'>
              <div className='box__item'>
                <span>Tài khoản</span>
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path></svg>
              </div>

              <div className='box__item'>
                <span>Hồ sơ</span>
              </div>

              <div className='box__item'>
                <span>Hỗ trợ</span>
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path></svg>
              </div>

              <div className='box__item'>
                <span>Tải xuống</span>
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path></svg>
              </div>

              <div className='box__item'>
                <span>Đăng xuất</span>
              </div>
            </div>

          ) : (
            <></>
          )}
      </div>

    </div>
  )
}

export default Header