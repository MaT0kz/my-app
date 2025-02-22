import { Route, Navigate } from "react-router-dom"
import routing from "../../utils/links/routing";


const ProtectedRoute = ({ user, children }) => {
    if (user) {
        return children;
    }
    else {
        return <Navigate to={ routing.authentidication } />;
    }
  };
  
  export default ProtectedRoute;