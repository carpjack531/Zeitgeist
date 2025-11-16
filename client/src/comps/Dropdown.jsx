import { useState } from "react";
const Dropdown = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };
  //FIX:
  // Replaced Curly Braces w Round Braces
  // Removed Margins, as it caused issues with hover elements disappearing
  let options = props.options.map((item, i) => (
    <a className="" key={i} value={item}>
      {item}
    </a>
  ));

  //FIXES:
  // Used group over peer to establish parent -> child relationship
  //

  return (
    <>
      <div className="relative flex flex-col justify-center px-4">
        <button  onClick={toggleVisibility} className="focus:animate-pulse mt-auto mb-auto text-lg">
          {props.label}
        </button>
        {isVisible ? (
          <div className="gap-5 absolute left-0 right-0 top-full flex flex-col  mt-4 bg-gray-400 ">
            {options}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Dropdown;
