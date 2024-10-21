import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export const PrivateProfil = ({ Component }) => {
    const token = useSelector((state) => state.auth.token);
    return token ? <Component /> : <Navigate to="/login" />;
};
