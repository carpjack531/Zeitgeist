//TO-DO Implement actual authentication to determine routing
import {useNavigateTo} from "@api/useNavigateTo.js"
import { AuthContext } from "../api/AuthContext.jsx";


//Santisation-basically forces users to configure this from an external config file
const MenuItem = (props) => {
  const {goTo} = useNavigateTo(props.page);
  return (
    <button
      onClick={goTo}
      className="text-lg hover:animate-pulse hover:bg-cyan-50 rounded-2xl p-4"
    >
      {props.value}{" "}
    </button>
  );
};


export default MenuItem;