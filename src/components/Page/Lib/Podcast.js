import React,{useContext} from 'react'
import { MusicContext } from '../../Context/MusicContext'
import './podcast.scss'
import {Grid} from '@mui/material'
import { Link } from 'react-router-dom'

const Podcast = () => {
  const {
    setSearchValue
  } = useContext(MusicContext)
  return (
    <div className='podcast'>
      <div className='podcast__empty'>
        <div className='podcast__empty__box'>
          <div className='podcast__empty__icon'>
            <svg xmlns='http://www.w3.org/2000/svg' height='1024' width='1024' viewBox='0 0 1024 1024'>
              <path d='M319.261 652.453q23.15 27.685 55.388 48.318l-27.685 32.22q-34.233-22.651-59.907-52.853-52.355-60.926-66.459-138.693t12.086-152.28 87.092-126.364q11.587-10.069 27.187-20.137l27.685 32.22q-16.122 10.584-27.187 20.137-52.355 44.804-74.759 108.476t-10.321 130.147 56.89 118.808zM865.98 185.789q60.422 70.994 88.843 158.315t20.904 179.986q-5.034 61.924-25.172 119.312t-54.621 107.725-81.809 90.629q-11.587 9.565-26.688 20.652l-27.685-32.22q15.103-10.584 27.187-20.652 63.923-55.388 101.944-129.632t44.804-158.83-19.119-164.116-80.812-143.979q-31.722-36.756-74.003-67.456l27.685-32.22q44.804 32.719 78.522 72.489zM190.382 762.714q31.722 36.756 74.003 67.456l-27.685 32.22q-44.3-32.719-78.522-72.489-60.422-70.994-88.843-158.315t-21.156-180.238 49.072-174.689 112.758-142.711q11.587-9.565 26.688-20.652l27.685 32.22q-15.103 10.584-27.187 20.652-64.942 55.892-102.691 132.145t-44.037 156.317 18.867 161.351 81.062 146.748zM512.061 360.97q52.355 0 89.61 37.254t37.254 89.61q0 46.823-30.206 82.058t-75.525 42.786v298.026h-42.288v-298.026q-29.702-5.034-53.854-22.651t-38.001-44.552-13.832-57.638q0-52.355 37.254-89.61t89.61-37.254zM512.061 572.408q35.241 0 59.907-24.92t24.668-59.655-24.92-59.655-59.655-24.92-59.655 24.92-24.92 59.655q0 23.15 11.338 42.537t30.721 30.721 42.537 11.338zM737.104 295.533q52.355 60.926 66.459 138.693t-12.086 152.28-87.092 126.364q-11.587 10.069-27.187 20.652l-27.685-32.719q16.122-10.584 27.187-20.137 52.355-44.3 74.759-108.224t10.321-130.399-56.89-118.808q-23.15-27.685-55.388-48.318l27.685-32.22q33.718 22.651 59.907 52.853z'></path>
            </svg>
          </div>

          <h1 className='podcast__empty__header'>Theo d??i ngh??? s?? ?????u ti??n c???a b???n</h1>
          <p className='podcast__empty__text'>Theo d??i ngh??? s?? b???n y??u th??ch b???ng c??ch nh???n v??o n??t theo d??i.</p>
          <Link to='/search' className='podcast__empty__btn' style={{textDecoration: 'none'}} onClick={() => setSearchValue('')}>T??m ngh??? s??</Link>
        </div>
        
        <div>
          <h4 className='body__content__item__title'>Podcast h??ng ?????u<button className='body__content__item__btn'>Xem t???t c???</button></h4>
          <Grid container columns={16}>
            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67656300005f1f917f9ae333ba086fd2d59c3e' alt='ok' />
              <p className='body__content__item__name'>Have A Sip</p>

              <p className='body__content__item__description'>Vietcetera</p>
            
            </Grid>

            <Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67656300005f1f5b61945f5f6bf820d3d43fbe' alt='ok' />
              <p className='body__content__item__name'>HIEU.TV</p>

              <p className='body__content__item__description'>Hieu Nguyen</p>
            
            </Grid><Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67656300005f1f9263d68af1b1210b244b0de9' alt='ok' />
              <p className='body__content__item__name'>Gen Z T???p L???n</p>

              <p className='body__content__item__description'>hoangphuonglinh</p>
            
            </Grid><Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67656300005f1f895df44bded0a43165588994' alt='ok' />
              <p className='body__content__item__name'>Monsieur Tuna Youtube video podcast</p>

              <p className='body__content__item__description'>Monsieur Tuna fan</p>
            
            </Grid><Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67656300005f1f6307a3aa9e520f6654398347' alt='ok' />
              <p className='body__content__item__name'>Listening Time</p>

              <p className='body__content__item__description'>Conner Pe</p>
            
            </Grid><Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/ab67656300005f1f6b4d46fd213d2d1dbdfaaa06' alt='ok' />
              <p className='body__content__item__name'>B??NH CAM & stories</p>

              <p className='body__content__item__description'>B??nh Cam n??</p>
            
            </Grid><Grid item xs={6} sm={3} md={2} className='body__content__item__box'>
              <div className='body__content__item__icon'>
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
              </div>
  
              <img className='body__content__item__img' src='https://i.scdn.co/image/158f91de15c44cb4205e7b4ef8f33236b22f2196' alt='ok' />
              <p className='body__content__item__name'>Giang ??i Radio</p>

              <p className='body__content__item__description'>Giang ??i Radio</p>
            
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Podcast