import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DraggableComponent from './Components/DraggableCard/DraggableComponent'
import HighlightingCard from './Components/HighlightingCard/HighlightingCard'
import Cards from './Components/CardDesigns/Cards'
import PageLoading from './Components/PageLoading/PageLoading'
import TempApp from './Components/TempApp/TempApp'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<DraggableComponent/>}/>
        <Route path='/highlight' element={<HighlightingCard/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/pageloading' element={<PageLoading/>}/>
        <Route path='/weather' element={<TempApp/>}/>
    </Routes>
  )
}

export default AllRoutes