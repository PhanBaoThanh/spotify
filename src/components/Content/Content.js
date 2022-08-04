import React, { useRef,useState ,useLayoutEffect} from 'react'
import './content.scss'
import Grid from '@mui/material/Grid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart,faCaretLeft,faCaretRight} from '@fortawesome/free-solid-svg-icons'
const Content = () => {
  const bannerRef = useRef();
  const [indexBanner,setIndexBanner] = useState(0)
  const [images,setImages] = useState([])

  useLayoutEffect(() => {
    setImages([
      require('./img/banner1.png'),
      require('./img/banner2.png')
    ])
  },[])

  const handleClickBannerBtnLeft = () => {
    if(indexBanner === 0){
      setIndexBanner(images.length - 1)
      bannerRef.current.style.transform = `translateX(-${(images.length - 1) * 100}%)`
    }
    else{
      setIndexBanner(prev => prev -1)
      bannerRef.current.style.transform = `translateX(-${(indexBanner - 1) * 100}%)`
    }
  }

  const handleClickBannerBtnRight = () => {
    if(indexBanner === images.length - 1){
      setIndexBanner(0)
      bannerRef.current.style.transform = `translateX(0)`
    }
    else{
      setIndexBanner(prev => prev + 1)
      bannerRef.current.style.transform = `translateX(-${(indexBanner + 1) * 100}%)`
    }
  }

  return (
    <div className='body'>

        <div className='body__banner'>
          <div className='body__banner__img' ref={bannerRef}>
            {images.map((item,index) => 
              <img key={index} src={item} alt="ok" className='body__banner__img__item' />
            )}
          </div>

          <div className='body__banner__btn left' onClick={() => handleClickBannerBtnLeft()}>
            <FontAwesomeIcon icon={faCaretLeft} className="body__banner__btn__item" />
          </div>

          <div className='body__banner__btn right' onClick={() => handleClickBannerBtnRight()}>
            <FontAwesomeIcon icon={faCaretRight} className="body__banner__btn__item" />
          </div>
        </div>

        <div className='body__content__item'>
          <h4 className='body__content__item__title'>Dành cho Bảo Thạnh</h4>
          <Grid container columns={16}>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb1036554ddc5f791a4f5dcfc3/1/vi/default' alt='ok' />
              <p className='body__content__item__name'>Daily Mix 1</p>

              <p className='body__content__item__description'>Sơn Tùng M-TP, W/N, VSTRA và nhiều hơn nữa</p>
            
            </Grid>
          </Grid>
        </div>

        <div className='body__content__item'>
          <h4 className='body__content__item__title'>Bảng xếp hạng</h4>
          <Grid container columns={16}>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002c61f44e81529d986f2b3526d' alt='ok' />
              <p className='body__content__item__name'>Hot Hits Vietnam</p>

              <p className='body__content__item__description'>Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa: Miu Lê</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://charts-images.scdn.co/assets/locale_en/regional/daily/region_vn_default.jpg' alt='ok' />
              <p className='body__content__item__name'>50 bài hát hàng đầu tại Việt Nam</p>

              <p className='body__content__item__description'>Thông tin cập nhật hằng ngày về những bản nhạc được nghe nhiều nhất hiện nay tại Việt Nam.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg' alt='ok' />
              <p className='body__content__item__name'>50 bài hát hàng đầu tại Toàn Cầu</p>

              <p className='body__content__item__description'>Thông tin cập nhật hằng ngày về những bản nhạc được nghe nhiều nhất hiện nay tại Toàn Cầu.</p>
            
            </Grid>
          </Grid>
        </div>

        <div className='body__content__item'>
          <h4 className='body__content__item__title'>Những bài nhạc thịnh hành nhất hiện nay<button className='body__content__item__btn'>Xem tất cả</button></h4>
          <Grid container columns={16}>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002f9005c4b39e85599240a8ea4' alt='ok' />
              <p className='body__content__item__name'>Tokyo Super Hits!</p>

              <p className='body__content__item__description'>The hottest hits in Japan right now. 日本のポップシーンを彩る最新ベスト50。毎週月曜日更新。Cover: Saucy Dog</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002179209abe53816a03a9be111' alt='ok' />
              <p className='body__content__item__name'>Thiên Hạ Nghe Gì</p>

              <p className='body__content__item__description'>Những gì mà người bên cạnh bạn đang nghe. Ảnh bìa: Sơn Tùng M-TP</p>
            
            </Grid>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002896da2c5dbeaa6ed86cda2ab' alt='ok' />
              <p className='body__content__item__name'>Top Nhạc Việt 2019</p>

              <p className='body__content__item__description'>Những nghệ sĩ Việt có lượt nghe nhiều nhất năm 2019.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f000000020379143c5e1fe1605cd124aa' alt='ok' />
              <p className='body__content__item__name'>Top Nhóm Nhạc 2019</p>

              <p className='body__content__item__description'>Những nhóm nhạc được nghe nhiều nhất năm 2019 tại Việt Nam</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002ca64210a23622427ec19c4a6' alt='ok' />
              <p className='body__content__item__name'>Hit Rewind</p>

              <p className='body__content__item__description'>Listen to all the tracks you've been missing. Cover: The Weeknd</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f000000023719f39f94650aa1574cd606' alt='ok' />
              <p className='body__content__item__name'>J-Pop Hits</p>

              <p className='body__content__item__description'>All the J-Pop tunes you love, in one place. Cover: Gen Hoshino</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002535531ac6fd0cbca00aea044' alt='ok' />
              <p className='body__content__item__name'>K-Pop ON! (온)</p>

              <p className='body__content__item__description'>Let's turn ON the movement! Cover: j-hope</p>
            
            </Grid>
          </Grid>
        </div>
        
        <div className='body__content__item'>
          <h4 className='body__content__item__title'>Hoài niệm<button className='body__content__item__btn'>Xem tất cả</button></h4>
          <Grid container columns={16}>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f000000025de49a1d6e08007ab7dbd927' alt='ok' />
              <p className='body__content__item__name'>Top Hits of 2018</p>

              <p className='body__content__item__description'>Rewind and rediscover big songs of 2018. Cover: Post Malone.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002896da2c5dbeaa6ed86cda2ab' alt='ok' />
              <p className='body__content__item__name'>Top Nhạc Việt 2019</p>

              <p className='body__content__item__description'>Những nghệ sĩ Việt có lượt nghe nhiều nhất năm 2019.</p>
            
            </Grid>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002f5e3bf0413ec122f118e5f08' alt='ok' />
              <p className='body__content__item__name'>Life Sucks</p>

              <p className='body__content__item__description'>Having a bad day? We know how it feels!</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002df7e498bfc071eafd143995e' alt='ok' />
              <p className='body__content__item__name'>Sad Covers</p>

              <p className='body__content__item__description'>Acoustic covers of sad songs.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002513613058d7740e1b1bb1d92' alt='ok' />
              <p className='body__content__item__name'>Sad Beats</p>

              <p className='body__content__item__description'>electronic melancholy <FontAwesomeIcon icon={faHeart} /></p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f000000020379143c5e1fe1605cd124aa' alt='ok' />
              <p className='body__content__item__name'>Top Nhóm Nhạc 2019</p>

              <p className='body__content__item__description'>Những nhóm nhạc được nghe nhiều nhất năm 2019 tại Việt Nam</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002ca64210a23622427ec19c4a6' alt='ok' />
              <p className='body__content__item__name'>Hit Rewind</p>

              <p className='body__content__item__description'>Listen to all the tracks you've been missing. Cover: The Weeknd</p>
            
            </Grid>
          </Grid>
        </div>

        <div className='body__content__item'>
          <h4 className='body__content__item__title'>Nội dung khác giống Top Hits of 2018<button className='body__content__item__btn'>Xem tất cả</button></h4>
          <Grid container columns={16}>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002e36385de2a213f78e6df47ec' alt='ok' />
              <p className='body__content__item__name'>Top Nam Nghệ Sĩ 2019</p>

              <p className='body__content__item__description'>Những giọng hát nam được nghe nhiều nhất năm 2019 tại Việt Nam.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f000000024a92d65ec09b902a8c02855a' alt='ok' />
              <p className='body__content__item__name'>Top Bài Hát 2019</p>

              <p className='body__content__item__description'>Những bài hát được nghe nhiều nhất năm 2019 tại Việt Nam.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002ccda972531209eafddf06cc1' alt='ok' />
              <p className='body__content__item__name'>Top Hits of 2017</p>

              <p className='body__content__item__description'>Rewind and rediscover big songs of 2017.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002c7721b67e98ec062cc51a843' alt='ok' />
              <p className='body__content__item__name'>Top Hits of 2019</p>

              <p className='body__content__item__description'>Rewind and rediscover big songs of 2019. Cover: Billie Eilish.</p>
            
            </Grid>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002f5e3bf0413ec122f118e5f08' alt='ok' />
              <p className='body__content__item__name'>Life Sucks</p>

              <p className='body__content__item__description'>Having a bad day? We know how it feels!</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002df7e498bfc071eafd143995e' alt='ok' />
              <p className='body__content__item__name'>Sad Covers</p>

              <p className='body__content__item__description'>Acoustic covers of sad songs.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002513613058d7740e1b1bb1d92' alt='ok' />
              <p className='body__content__item__name'>Sad Beats</p>

              <p className='body__content__item__description'>electronic melancholy <FontAwesomeIcon icon={faHeart} /></p>
            
            </Grid>
          </Grid>
        </div>

        <div className='body__content__item'>
          <h4 className='body__content__item__title'>Thư giãn<button className='body__content__item__btn'>Xem tất cả</button></h4>
          <Grid container columns={16}>
          <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f000000020379143c5e1fe1605cd124aa' alt='ok' />
              <p className='body__content__item__name'>Top Nhóm Nhạc 2019</p>

              <p className='body__content__item__description'>Những nhóm nhạc được nghe nhiều nhất năm 2019 tại Việt Nam</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002ca64210a23622427ec19c4a6' alt='ok' />
              <p className='body__content__item__name'>Hit Rewind</p>

              <p className='body__content__item__description'>Listen to all the tracks you've been missing. Cover: The Weeknd</p>
            
            </Grid>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f0000000219190d58aeb83b1f34fedeb0' alt='ok' />
              <p className='body__content__item__name'>Chill Hits</p>

              <p className='body__content__item__description'>Kick back to the best new and recent chill hits.</p>
            
            </Grid>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002ccda972531209eafddf06cc1' alt='ok' />
              <p className='body__content__item__name'>Top Hits of 2017</p>

              <p className='body__content__item__description'>Rewind and rediscover big songs of 2017.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002296a902bf19a1cf9087f67b5' alt='ok' />
              <p className='body__content__item__name'>Thoải Mái Gác Chân Lên</p>

              <p className='body__content__item__description'>Nằm nhà, thoải mái gác chân lên nghỉ ngơi...</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f0000000223b510f4800f649a51709ac7' alt='ok' />
              <p className='body__content__item__name'>Acoustic Favorites</p>

              <p className='body__content__item__description'>Lose yourself to over 5 hours of acoustic goodness.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002c4e0a29097d2f0f52baf8b68' alt='ok' />
              <p className='body__content__item__name'>Soft Pop Hits</p>

              <p className='body__content__item__description'>Listen to easy songs from your favorite artists! Cover: Lady Gaga</p>
            
            </Grid>
          </Grid>
        </div>

        <div className='body__content__item'>
          <h4 className='body__content__item__title'>Nhạc vui<button className='body__content__item__btn'>Xem tất cả</button></h4>
          <Grid container columns={16}>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f000000027e368901f39aae9d510c8fda' alt='ok' />
              <p className='body__content__item__name'>Confidence Boost</p>

              <p className='body__content__item__description'>You're on top of the world. Don't forget it.</p>
            
            </Grid>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f0000000219190d58aeb83b1f34fedeb0' alt='ok' />
              <p className='body__content__item__name'>Chill Hits</p>

              <p className='body__content__item__description'>Kick back to the best new and recent chill hits.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f000000022e3ad3f0c0a36bb7f68da809' alt='ok' />
              <p className='body__content__item__name'>Ta Nói Nó Dzui</p>

              <p className='body__content__item__description'>Cười như mọi ngày, cày như mọi người. </p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f0000000224893f0507c0fe2855565438' alt='ok' />
              <p className='body__content__item__name'>Songs to Sing in the Shower</p>

              <p className='body__content__item__description'>Make your shower more uplifting by singing along to these hits.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002314724fc7ca36a4fce2f1b6a' alt='ok' />
              <p className='body__content__item__name'>Heart Beats</p>

              <p className='body__content__item__description'>Dance music for the heart </p>
            
            </Grid>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002ccda972531209eafddf06cc1' alt='ok' />
              <p className='body__content__item__name'>Top Hits of 2017</p>

              <p className='body__content__item__description'>Rewind and rediscover big songs of 2017.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002c7721b67e98ec062cc51a843' alt='ok' />
              <p className='body__content__item__name'>Top Hits of 2019</p>

              <p className='body__content__item__description'>Rewind and rediscover big songs of 2019. Cover: Billie Eilish.</p>
            
            </Grid>
          </Grid>
        </div>

        <div className='body__content__item'>
          <h4 className='body__content__item__title'>Nhạc buồn<button className='body__content__item__btn'>Xem tất cả</button></h4>
          <Grid container columns={16}>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f0000000250f34f0e7a0b73effe02fa6f' alt='ok' />
              <p className='body__content__item__name'>Broken Heart</p>

              <p className='body__content__item__description'>Nurse your emotional wounds with these heartbreak tracks.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002f5e3bf0413ec122f118e5f08' alt='ok' />
              <p className='body__content__item__name'>Life Sucks</p>

              <p className='body__content__item__description'>Having a bad day? We know how it feels!</p>
            
            </Grid>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f000000022e3ad3f0c0a36bb7f68da809' alt='ok' />
              <p className='body__content__item__name'>Ta Nói Nó Dzui</p>

              <p className='body__content__item__description'>Cười như mọi ngày, cày như mọi người. </p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f0000000224893f0507c0fe2855565438' alt='ok' />
              <p className='body__content__item__name'>Songs to Sing in the Shower</p>

              <p className='body__content__item__description'>Make your shower more uplifting by singing along to these hits.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002314724fc7ca36a4fce2f1b6a' alt='ok' />
              <p className='body__content__item__name'>Heart Beats</p>

              <p className='body__content__item__description'>Dance music for the heart </p>
            
            </Grid>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002ccda972531209eafddf06cc1' alt='ok' />
              <p className='body__content__item__name'>Top Hits of 2017</p>

              <p className='body__content__item__description'>Rewind and rediscover big songs of 2017.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002df7e498bfc071eafd143995e' alt='ok' />
              <p className='body__content__item__name'>Sad Covers</p>

              <p className='body__content__item__description'>Acoustic covers of sad songs.</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67706f00000002513613058d7740e1b1bb1d92' alt='ok' />
              <p className='body__content__item__name'>Sad Beats</p>

              <p className='body__content__item__description'>electronic melancholy <FontAwesomeIcon icon={faHeart} /></p>
            
            </Grid>
          </Grid>
        </div>

    </div>
  )
}

export default Content