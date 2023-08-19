import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
        <BrowserRouter>
          <Navbar/>
          <AllRoutes/>
        </BrowserRouter>
      </ChakraProvider>

  )
}

export default App