import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    // console.log(location)
  
    if(loading){
        return <div className="text-3xl text-center"><span className="loading loading-bars loading-lg"></span></div>
    }
    
    // return 
    
    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    } 
    return <div>
        {children}
    </div>

    
};

export default PrivateRoutes;


PrivateRoutes.propTypes = {
    children: PropTypes.node
  };
  