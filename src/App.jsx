//import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage.jsx'
import HomePage from './pages/HomePage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import UserHeader from './comps/UserHeader.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <UserHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

