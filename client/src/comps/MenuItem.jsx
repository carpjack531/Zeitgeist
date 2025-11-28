
import {useNavigateTo} from "@api/useNavigateTo.js"

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