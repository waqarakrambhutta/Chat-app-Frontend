import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";

const withAuthenctication = (wrappedComponent) =>{
    return function AuthComponent(props){
        const [isAuthencticated,setIsAuthenticated] = useState(false);
        useEffect(()=>{
            const token = document.cookie.split().find(row=>row.startsWith('token='))
            console.log(token);
            if(token){
                setIsAuthenticated(true);
                console.log(isAuthencticated);
            }else{
                setIsAuthenticated(false);
                console.log('0');
            }
        },[]);
        if(isAuthencticated){
            return <wrappedComponent {...props}/>
        }else{
            return <Navigate to="/login"/>
        }
    }
}

export default withAuthenctication