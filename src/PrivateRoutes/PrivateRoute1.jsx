import { useContext } from "react";
import { LevelContext } from "../ContextProvider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute1 = ({ children }) => {
    const { currentUser } = useContext(LevelContext);
    const location = useLocation();

    if (currentUser) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to={'/logIn'}></Navigate>
    );
};

export default PrivateRoute1;