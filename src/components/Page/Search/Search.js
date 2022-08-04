import React,{useContext} from 'react'
import { MusicContext } from '../../Context/MusicContext'
import './search.scss'
import Grid from '@mui/material/Grid'
import SearchMusic from './SearchMusic'

const Search = () => {
  const {
    searchValue
  } = useContext(MusicContext)
  return (
    <div className='search'>
      {searchValue === '' ? (
        <div className='body__search__item'>
            <h4 className='body__search__item__title'>Duyệt tìm tất cả</h4>
            <Grid container columns={14}>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box'>
                  <div className='body__search__item__title'>Podcast</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item' > 
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(30, 50, 100)'}}>
                  <div className='body__search__item__title'>Dành cho bạn</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(141, 103, 171)'}}>
                  <div className='body__search__item__title'>Bảng xếp hạng</div>
                  <div className='body__search__item__img'>
                  <img src='https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(232, 17, 91)'}}>
                  <div className='body__search__item__title'>Mới phát hành</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(141, 103, 171)'}}>
                  <div className='body__search__item__title'>Khám phá</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(30, 50, 100)'}}>
                  <div className='body__search__item__title'>Sự kiện trực tiếp</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(180, 155, 200)'}}>
                  <div className='body__search__item__title'>Nhạc Việt</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/6e1202d14b1f400592532c10d10871ef.jpeg' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(20, 138, 8)'}}>
                  <div className='body__search__item__title'>K-Pop</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f00000002978b9f4a4f40b430fd0d837e' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: ' rgb(141, 103, 171)'}}>
                  <div className='body__search__item__title'>Pop</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: ' rgb(141, 103, 171)'}}>
                  <div className='body__search__item__title'>Tâm trạng</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(140, 25, 50)'}}>
                  <div className='body__search__item__title'>Không gian lãng mạn</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f0000000213601d4833623a4d6b328e38' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(80, 155, 245)'}}>
                  <div className='body__search__item__title'>Pride</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/c9a01586687a45a78c56d9be5aed3c79.jpeg' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(240, 55, 165)'}}>
                  <div className='body__search__item__title'>Fresh Finds</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/16e40e64d2a74fa8a0a020d456e6541d.jpeg' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(20, 138, 8)'}}>
                  <div className='body__search__item__title'>EQUAL</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f0000000284a1ec26f589f0d569805a07' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(165, 103, 82)'}}>
                  <div className='body__search__item__title'>Sức khỏe</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67656300005f1ff234909e69a68d92ca0af6ca' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(230, 30, 50)'}}>
                  <div className='body__search__item__title'>Rock</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(186, 93, 7)'}}>
                  <div className='body__search__item__title'>Hip-Hop</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(20, 138, 8)'}}>
                  <div className='body__search__item__title'>League of Legends</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f000000025f0ff9251e3cfe641160dc31' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(71, 125, 149)'}}>
                  <div className='body__search__item__title'>Ở nhà</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f00000002ec9d60059aa215a7ba364695' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(71, 125, 149'}}>
                  <div className='body__search__item__title'>Trên xe</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f00000002ffa215be1a4c64e3cbf59d1e' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(71, 125, 149)'}}>
                  <div className='body__search__item__title'>Ambient</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/a45c0978c7784da8b83cadbca8b815d1' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(141, 103, 171)'}}>
                  <div className='body__search__item__title'>Trẻ em & Gia đình</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/15a38c44c4484cc3a078aaab5bd4e828' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(156, 240, 225)'}}>
                  <div className='body__search__item__title'>RADAR</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(220, 20, 140)'}}>
                  <div className='body__search__item__title'>Dance / Điện tử</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(96, 129, 8)'}}>
                  <div className='body__search__item__title'>Indie</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f000000025f7327d3fdc71af27917adba' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(215, 242, 125)'}}>
                  <div className='body__search__item__title'>Thịnh hành</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/media/derived/trending-274x274_7b238f7217985e79d3664f2734347b98_0_0_274_274.jpg' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(141, 103, 171)'}}>
                  <div className='body__search__item__title'>API Heritage Month</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/9378062ced4e466980de864ee3cc3bf3' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(175, 40, 150)'}}>
                  <div className='body__search__item__title'>Tiệc tùng</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f00000002caa115cbdb8cd3d39d67cdc0' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(71, 125, 149'}}>
                  <div className='body__search__item__title'>Thử giãn</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f76e' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(30, 50, 100)'}}>
                  <div className='body__search__item__title'>Ngủ ngon</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(119, 119, 119)'}}>
                  <div className='body__search__item__title'>Tập luyện</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(80, 55, 80)'}}>
                  <div className='body__search__item__title'>Tập trung</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(30, 50, 100)'}}>
                  <div className='body__search__item__title'>Thập niên</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/b611cf5145764c64b80e91ccd5f357c8' alt='ok' />
                </div>
                </div>
              </Grid>

              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(255, 200, 100)'}}>
                  <div className='body__search__item__title'>Mùa hè</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/a2a24668f16c4e9680233a0d7d244a4b.jpeg' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(175, 40, 150)'}}>
                  <div className='body__search__item__title'>Reggae</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/media/derived/reggae-274x274_2f11a0500528532b3bc580e3428e9610_0_0_274_274.jpg' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(235, 30, 50)'}}>
                  <div className='body__search__item__title'>Thành phố</div>
                  <div className='body__search__item__img'>
                  <img src='https://t.scdn.co/images/e483d3973e2f4ad1b4ae96e5aa19faa8.jpeg' alt='ok' />
                </div>
                </div>
              </Grid>
              <Grid item xs={8} sm={5} md={2} className='padding__item'>
                <div className='body__search__item__box' style={{backgroundColor: 'rgb(220, 20, 140)'}}>
                  <div className='body__search__item__title'>RnB</div>
                  <div className='body__search__item__img'>
                  <img src='https://i.scdn.co/image/ab67706f000000023c5a4aaf5df054a9beeb3d82' alt='ok' />
                </div>
                </div>
              </Grid>
            </Grid>
        </div>
      ) : (
        <SearchMusic />
      )}
    </div>
  )
}

export default Search