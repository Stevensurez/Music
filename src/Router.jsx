import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Home from './Pages/Home'
import Album from './Pages/Album'


function MyRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/:id" element = {<Album />} />
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes