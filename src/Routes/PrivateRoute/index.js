import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({component}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem(`token`)
    useEffect(()=> {
        
        
        if(!token){
            navigate("/");
        }
    },[])

    return(
        <div>{component}</div>
    );
}

export default PrivateRoute;