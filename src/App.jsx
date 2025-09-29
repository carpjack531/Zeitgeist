//import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import UserHeader from './comps/UserHeader.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

