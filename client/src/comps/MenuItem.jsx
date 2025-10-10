
import { useNavigate } from "react-router-dom";



function MenuItem (props){
    const navigate = useNavigate();
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
        }
    }

    return(
        <button onClick={()=>{changePage(props.page)}} className="text-2xl hover:animate-pulse hover:bg-cyan-50 rounded-2xl p-4">{props.value} </button>
    );
    

}

export default MenuItem;