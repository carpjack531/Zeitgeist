  import MenuItem from './MenuItem.jsx'
  import Header from "./Header.jsx"
  import { useEffect, useContext } from 'react';
  import {AuthContext} from "../api/AuthContext.jsx"


  const UserHeader = () => {
    const {isLoggedIn} = useContext(AuthContext);

    return(
        <Header title="Zeitgeist" bg="bg-pastel-purple-500">
          {!isLoggedIn?(
            <>
            <MenuItem value="Home" page="home"/>
            <MenuItem value="Login" page="login"/>
            <MenuItem value="Sign Up" page="signup"/>
            <MenuItem value="Settings" page="settings"/>
            <MenuItem value="About Us" page="aboutus"/>
            </>
          ):(
            <>
            <MenuItem value="Home" page="home"/>
            <MenuItem value="Profile" page="login"/>
            <MenuItem value="Bookmark" page="bookmark"/>
            <MenuItem value="About Us" page="aboutus"/>
            </>
          )
          }
        </Header>
    );
};

export default UserHeader;