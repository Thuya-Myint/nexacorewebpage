import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomeLayout />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
