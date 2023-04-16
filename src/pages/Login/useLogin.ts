import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import useSession from "../../hooks/useSession";
import { useAppDispatch } from "../../redux/hooks";
import { setVisible } from "../../redux/reducers/loader";
import ApiService from "../../services/api.service";

/**
 * Hook encargado de la lógica de login
 * @version 0.0.1
 * @author raymknd ~ Jauke.cl
 */
const useLogin = () => {
    // Estados para las inputs
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Otros estados
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Handlers para cambiar los estados de las inputs
    type THandleEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
    const handleUsername = (e: THandleEvent) => setUsername(e.currentTarget.value);
    const handlePassword = (e: THandleEvent) => setPassword(e.currentTarget.value);

    // Servicios
    const apiService = new ApiService();

    // Hooks
    const {session, setSession,token} = useSession();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(token !== null) {
            navigate("/home");
            return;
        }
        setLoading(false);
    }, [session, token])

    // Handle para el login
    const onLogin = () => {
        // Checkear si el username y la contraseña son válidos
        if(username.length < 1 || password.length < 1) {
            setError(true);
            return;
        }

        // Resetear los estados por si tenían algún valor asignado ya
        setError(false);
        setLoading(true);

        // Fetch con la información a la api
        apiService
        .login(username, password)
        .then((sess) => {
            if(session === null) {
                dispatch(setVisible());
                setTimeout(() => {
                    navigate("/home")
                }, 600);
            }
        })
        .catch(() => {});
    }

    // Devolver los objetos para su uso fuera del hook
    return {
        username, 
        password, 
        handleUsername, 
        handlePassword, 
        onLogin,
        loading,
        setLoading,
        error,
        setError,
    }
}

export default useLogin;