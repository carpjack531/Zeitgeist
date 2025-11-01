
import { useNavigate } from "react-router-dom";


//Santisation-basically forces users to configure this from an external config file


function MenuItem (props){
    const navigate = useNavigate();
    //Temporary Function, could be improved
    const changePage = async(page)=>{ 
        switch(page){    
        case "login":
            navigate("/login");
            break;
        case "signup":
            navigate("/signup");
            break;
        case "home":
            navigate("/");
            break;
        case "settings":           
            navigate("/settings");
            break;
        case "aboutus":
            navigate("/aboutus");
            break;
        

        }
    }

    return(
        <button onClick={()=>{changePage(props.page)}} className="text-lg hover:animate-pulse hover:bg-cyan-50 rounded-2xl p-4">{props.value} </button>

    );
}

export default MenuItem;