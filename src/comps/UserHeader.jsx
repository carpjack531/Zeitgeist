import Header from "./Header"
import MenuItem from "./MenuItem"

const AdminHeader = () => {
    return(
    <Header title="Zeitgeist">
        <MenuItem value="Home" page="home"/>
        <MenuItem value="Login" page="login"/>
        <MenuItem value="Sign Up" page="signup"/>
        <MenuItem value="Settings" page="settings"/>
    </Header>
    );
};

export default AdminHeader;