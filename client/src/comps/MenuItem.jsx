
//TO-DO Implement actual authentication to determine routing
import { useNavigate } from "react-router-dom";
import {useState, useContext} from "react";
import {AuthContext} from "../api/AuthContext.jsx"
import {nav_config} from "../nav-consts";

//Santisation-basically forces users to configure this from an external config file


const MenuItem = (props)=> {
    const {isLoggedIn} = useContext(AuthContext);

    const navigate = useNavigate();
    //Updated Function, Now requires external config file
    const changePage = async(page)=>{
        nav_config.forEach((item)=>{
            if(page === item.name){
                if(item.authReq === true){
                    if(isLoggedIn){
                        navigate(`/${item}`)
                    }
                }
                else{
                    navigate(`/${item}`)
                }
            }
        })
    }
   


    return(
        <button onClick={()=>{changePage(props.page)}} className="text-lg hover:animate-pulse hover:bg-cyan-50 rounded-2xl p-4">{props.value} </button>

    );
}

export default MenuItem;