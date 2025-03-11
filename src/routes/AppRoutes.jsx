import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Participants from '../pages/Participants/Participants'
import Apply from '../pages/Apply/Apply'
import Create from '../pages/Create/Create'
function AppRoutes() {
  return (
    <Routes>
        <Route path='/Event-Manager' element={<Home/>}/>
        <Route path='/Event-Manager/create' element={<Create/>}/>
        <Route path='/Event-Manager/apply' element={<Apply/>}/>
        <Route path='/Event-Manager/participants' element={<Participants/>}/>
    </Routes>
  )
}

export default AppRoutes