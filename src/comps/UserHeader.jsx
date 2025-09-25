import Header from "./Header"
import MenuItem from "./MenuItem"

const AdminHeader = (props) => {
    return(
    <Header title="Zeitgeist">
        <MenuItem value="Home" page="home"/>
        <MenuItem value="Login" page="add"/>
        <MenuItem value="Settings"/>
    </Header>
    );
};

export default AdminHeader;