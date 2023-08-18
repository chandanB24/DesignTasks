import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DraggableComponent from './Components/DraggableCard/DraggableComponent'
import HighlightingCard from './Components/HighlightingCard/HighlightingCard'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<DraggableComponent/>}/>
        <Route path='/highlight' element={<HighlightingCard/>}/>
    </Routes>
  )
}

export default AllRoutes