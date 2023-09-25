import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Album() {
  const params = useParams()
  const [album, setAlbum] = useState([])

  useEffect(() => {
    axios.get(`https://render-devf-music.onrender.com/discografia/${params.id}`)
      .then((response) =>{
        console.log(response.data)
        setAlbums(response.data)
      })
  },[])

  return (
    <div className="album">
          <h3 class="album_name">{album.nombre}</h3>
          <img className="album_image" src={album.imagen_url} alt="" srcset=""/>
        </div>
  )
}

export default Album