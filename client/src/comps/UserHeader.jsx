import MenuItem from "./MenuItem.jsx";
import Header from "./Header.jsx";
import { useContext } from "react";
import { AuthContext } from "@api/AuthContext.jsx";
import Dropdown from "./Dropdown.jsx";
import ColourBackgroundChange from "./ColourBackgroundChange.jsx";

const UserHeader = ({ mainMood }) => {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);

  const dropdown_options = [
    {
      text: "Settings",
      path: "settings",
    },
    {
      text: "Bookmarks",
      path: "bookmarks",
    },
    {
      text: "Logout",
      customFunc: logoutUser,
    },
  ];
  return (
    <Header title="Zeitgeist" bg="relative">
      <ColourBackgroundChange
        mainMood={mainMood}
        variant={1}
        className="absolute inset-0 -z-10"
      />
      <MenuItem value="Home" page="" />
      {!isLoggedIn ? (
        <>
          <MenuItem value="Login" page="login" />
          <MenuItem value="Sign Up" page="signup" />
          <MenuItem value="About Us" page="aboutus" />
        </>
      ) : (
        <>
          <Dropdown options={dropdown_options} label="Profile" />
          <MenuItem value="Settings" page="settings" />
          <MenuItem value="About Us" page="aboutus" />
        </>
      )}
    </Header>
  );
};

export default UserHeader;
