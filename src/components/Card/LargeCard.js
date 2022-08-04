import React,{useContext} from 'react'
import './largecard.scss'
import { MusicContext } from '../Context/MusicContext'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const LargeCard = (link,handlePlayLoveSong,) => {
    const {
        loveSong
    } = useContext(MusicContext)
    return (
        <Grid item xs={12} sm={8} md={4} className='padding__item'>
            <Link to='/loveSong' style={{textDecoration: 'none',color: '#fff'}} className='body__content__item__box1'>
                {loveSong.length > 0 ? (
                    <div className='body__content__item__icon1' onClick={handlePlayLoveSong}>
                    <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 EQkJl"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    </div>
                ) : (
                    <></>
                )}
                <div className='body__content__item__note'>
                    <h3 className='body__content__item__name1'>Bài hát đã thích</h3>
                    <p className='body__content__item__description1'>{loveSong.length} bài đã thích</p>
                </div>
            </Link>
        </Grid>  
    )
}

export default LargeCard