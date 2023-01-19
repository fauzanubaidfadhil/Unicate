import { useEffect } from "react";
import { useNavigate } from "react-router";

const AuthLayout = ({children}) => {
    const navigate = useNavigate();

    useEffect(() => {
        // validasi ketika tidak ada token
        const getToken = localStorage.getItem(process.env.REACT_APP_AUTH);
        if (getToken !== null) navigate("/", {replace: true});
        // eslint-disable-next-line
    },[]);

    return ( 
        <>{children}</>
     );
}
 
export default AuthLayout;