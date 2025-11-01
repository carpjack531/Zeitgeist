import Header from "./Header"
import MenuItem from "./MenuItem"
const UserHeader = (props) => {
    return(
        <Header title="Zeitgeist" bg="bg-pastel-purple-500">
            <MenuItem value="Home" page="home"/>
            <MenuItem value="Login" page="login"/>
            <MenuItem value="Sign Up" page="signup"/>
            <MenuItem value="Settings" page="settings"/>
            <MenuItem value="About Us" page="aboutus"/>
        </Header>
    );
};

export default UserHeader;