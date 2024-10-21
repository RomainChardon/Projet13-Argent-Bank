import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export const PrivateLogin = ({ Component }) => {
    const token = useSelector((state) => state.auth.token);
    return token ? <Navigate to="/profil" /> : <Component /> ;
};
