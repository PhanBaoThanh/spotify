import './App.scss';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Header from './components/Content/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Content from './components/Content/Content'
import Search from './components/Page/Search/Search'
import {MusicContext} from './components/Context/MusicContext'
import {useState} from 'react'
import Playlist from './components/Page/Lib/Playlist'
import Podcast from './components/Page/Lib/Podcast'
import Artist from './components/Page/Lib/Artist'
import Album from './components/Page/Lib/Album'
import PlaylistItem from './components/Page/PlaylistItem/PlaylistItem'
import ListSongNow from './components/Page/ListSongNow/ListSongNow';
import LoveSong from './components/Page/LoveSong/LoveSong';
import ArtistPage from './components/Page/ArtistPage/ArtistPage';
import AlbumPage from './components/Page/AlbumPage/AlbumPage';

function App() {
  const [playlist,setPlaylist] = useState([])
  const [countPlaylist, setCountPlaylist] = useState(1)
  const [moveValue,setMoveValue] = useState({})
  const [isPlay,setIsPlay] = useState(false)
  const [idPlaylistNow,setIdPlaylistNow] = useState(-1)
  const [idSongNow,setIdSongNow] = useState(1)
  const [firstTimeClick,setFirstTimeClick] = useState(false)
  const [isClickMusic,setIsClickMusic] = useState(false)
  const [indexMusic,setIndexMusic] = useState(0)
  const [loveSong,setLoveSong] = useState([])
  const [openLoveSong,setOpenLoveSong] = useState(false)
  const [searchMusicData,setSearchMusicData] = useState([])
  const [searchArtistData,setSearchArtistData] = useState([])
  const [searchAlbumData,setSearchAlbumData] = useState([])
  const [searchValue,setSearchValue] = useState('')
  const [idSingerSongList,setIdSingerSongList] = useState(-1)
  const [idAlbum,setIdAlbum] = useState(-1)
  const [myArtist,setMyArtist] = useState([])
  const [myAlbum,setMyAlbum] = useState([])

  return (
    <MusicContext.Provider 
      value={{
        playlist,
        setPlaylist,
        countPlaylist,
        setCountPlaylist,
        moveValue,
        setMoveValue,
        isPlay,
        setIsPlay,
        idPlaylistNow,
        setIdPlaylistNow,
        idSongNow,
        setIdSongNow,
        isClickMusic,
        setIsClickMusic,
        firstTimeClick,
        setFirstTimeClick,
        indexMusic,
        setIndexMusic,
        loveSong,
        setLoveSong,
        openLoveSong,
        setOpenLoveSong,
        searchMusicData,
        setSearchMusicData,
        searchArtistData,
        setSearchArtistData,
        searchAlbumData,
        setSearchAlbumData,
        searchValue,
        setSearchValue,
        idAlbum,
        setIdAlbum,
        idSingerSongList,
        setIdSingerSongList,
        myArtist,
        setMyArtist,
        myAlbum,
        setMyAlbum
      }}>
      <Router>
        <div className="App">
          <NavBar />
          <div className='containerBox'>
            <Routes>
              <Route path='/' element={<Content />}/>
              <Route path='search' element={<Search />} />
              <Route path='lib'>
                <Route index element={<Playlist />} />
                <Route path='podcast' element={<Podcast />} />
                <Route path='artist' element={<Artist />} />
                <Route path='album' element={<Album />} />
              </Route>
              <Route path='playlist'>
                <Route path=':playlistId' element={<PlaylistItem />} />
              </Route>
              <Route path='listSong' element={<ListSongNow />} />
              <Route path='loveSong' element={<LoveSong />} />
              <Route path='artist/:artistId' element={<ArtistPage />} />
              <Route path='album/:albumId' element={<AlbumPage />} />
            </Routes>
            <Header />
          </div>
          <Footer />
        </div>
      </Router>
    </MusicContext.Provider>
  );
}

export default App;
