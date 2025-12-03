import MenuItem from "./MenuItem.jsx";
import Header from "./Header.jsx";
import { useContext } from "react";
import { AuthContext } from "@api/AuthContext.jsx";
import Dropdown from "./Dropdown.jsx";
import ColourBackgroundChange from "./ColourBackgroundChange.jsx";

const dropdown_options = [
"Settings", 
"Bookmarks",
"Logout",
];

const UserHeader = ({ mainMood }) => {
  const { isLoggedIn } = useContext(AuthContext);
  
  return (
    <Header title="Zeitgeist" bg="relative">
      <ColourBackgroundChange mainMood={mainMood} variant={1} className="absolute inset-0 -z-10" />
      {!isLoggedIn ? (
        <>
          <MenuItem value="Home" page="home" />
          <MenuItem value="Login" page="login" />
          <MenuItem value="Sign Up" page="signup" />
          <MenuItem value="Settings" page="settings" />
          <MenuItem value="About Us" page="aboutus" />
        </>
      ) : (
        <>
          <MenuItem value="Home" page="home" />
          <Dropdown options={dropdown_options} label="Profile"/>
          <MenuItem value="About Us" page="aboutus" />
        </>
      )}
    </Header>
  );
};

export default UserHeader;
