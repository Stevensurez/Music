import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    axios.get('https://render-devf-music.onrender.com/discografia')
      .then((response) =>{
        console.log(response.data)
        setAlbums(response.data)
      })
  },[])
  return (
    <div class="albums_container">
    {
      albums.map((album) => {
        return(
          <Link to={`/${album._id}`}>
            <div key = {album._id} className="album">
              <h3 class="album_name">{album.nombre}</h3>
             <img className="album_image" src={album.imagen_url} alt="" srcset=""/>
            </div>
          </Link>
        
        )
      })
    }
    
    </div>
  )
}

export default Home