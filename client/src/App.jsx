//TO-DO: 
//-Implement useAuth and ProtectedRoutes

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"
import {AuthContext} from "@api/AuthContext.jsx";
import "./App.css";



function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("username"));
    
    const loginUser = () => {
      setIsLoggedIn(true);
    };
    
    useEffect(() => {
        console.log("isLoggedIn (App - AFTER update): " + isLoggedIn);
    }, [isLoggedIn])

    return (
    //Avoids Prop Drilling
    <BrowserRouter>
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, loginUser}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/aboutus" element={<AboutUs />} />
          {isLoggedIn&&(
          <>
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/bookmarks" element={<Bookmarks/>}/>
          </>
          )}
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
