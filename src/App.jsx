import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './Header'
import MainPage from './pages/MainPage'
import People from './pages/People'
import Planets from './pages/Planets'
import Starships from './pages/Starships'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/people' element={ <People /> } />
          <Route path='/planets' element={ <Planets /> } />
          <Route path='/starships' element={ <Starships /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
