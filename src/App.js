import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';

const App = () => {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <AllRoutes/>
      </BrowserRouter>

  )
}

export default App