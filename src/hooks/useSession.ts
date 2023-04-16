import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectSession, setPartial, setSession as setReduxSession } from "../redux/reducers/session";
import { Session } from "../redux/reducers/session/session.types";

/**
 * Hook encargado de mantener la sesión a lo largo de la aplicación
 */
const useSession = () => {
    // Hooks
    const [cookies, setCookie] = useCookies(["TOKEN"]);
    const session = useAppSelector(selectSession);
    const token: string | null = cookies.TOKEN || null;
    const dispatch = useAppDispatch();

    // Estado
    const [currentSession, setCurrentSession] = useState<Session.Root | null>(null);

    // Main
    useEffect(() => {
        if(currentSession !== null) return;

        const savedUser = 
            localStorage.getItem("USER") !== null 
            ? JSON.parse(localStorage.getItem("USER") as string) as Session.User 
            : null;

        if (token !== null && session !== null) {
            if(savedUser !== null && savedUser !== session.user) {
                dispatch(setPartial({user: savedUser}));
            }
            setCurrentSession(session);
            return;
        }
    }, [token, session]);

    const setSession = (session: Session.Root) => {
        dispatch(setReduxSession(session));
        setCurrentSession(null);
        setCookie("TOKEN", session.accessToken);
        localStorage.setItem("USER", JSON.stringify(session.user));
    }

    return { session: currentSession, token, setSession };
}

export default useSession;