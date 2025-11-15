//TO-DO Implement actual authentication to determine routing
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../api/AuthContext.jsx";
import { nav_config } from "../nav-consts";

//Santisation-basically forces users to configure this from an external config file
const nav_items = new Map(nav_config.map((item) => [item.name, item]));
const MenuItem = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  

  const navigate = useNavigate();

  const changePage = async (page) => {
    const item = nav_items.get(page);
    if (!item) {
      return;
    }

    if (!isLoggedIn && item.authReq) {
      console.log(item);
      return;
    }

    navigate(`/${page}`);
  };

  return (
    <button
      onClick={() => {
        changePage(props.page);
      }}
      className="text-lg hover:animate-pulse hover:bg-cyan-50 rounded-2xl p-4"
    >
      {props.value}{" "}
    </button>
  );
};

export default MenuItem;
