import { useState } from "react";
import {useNavigateTo} from "@api/useNavigateTo.js"

const DropdownItem = (props) =>{
  const {goTo} = useNavigateTo(props.page);
  return(
     <button className="border-b-solid p-1 border-b-2 border-gray-400" onClick={goTo}>
      {props.text}
    </button>
  );
}
const Dropdown = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };
  
  let options = props.options.map((item, i) => (
    <DropdownItem key={i} value={item} text={item} page={`${item.toLowerCase()}`}/>
  ));

  

  return (
    <>
      <div className="relative flex flex-col justify-center px-4">
        <button  onClick={toggleVisibility} className="focus:animate-pulse mt-auto mb-auto text-lg">
          {props.label}\
        </button>
        {isVisible ? (
          <div className="gap-5 absolute left-0 right-0 top-full flex flex-col border-b-solid">
            {options}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Dropdown;
