


const ToggleSwitch=(props)=>{
    return(
        <>
          <label className="relative inline-block min-w-60 min-h-34">
            <input type="checkbox"/>
            <span className="absolute pointer top-0 left-0 right-0 bottom-0 bg-grey "></span>
          </label>  
        </>
    )
}

export default ToggleSwitch