import { Button } from "baseui/button";
import { Input, InputProps } from "baseui/input";
import { Modal, ModalBody, ModalButton, ModalFooter, ModalHeader, ROLE, SIZE } from "baseui/modal";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./Login.module.sass";
import useLogin from "./useLogin";

const Login = () => {
    // Main hook
    const {
        username, 
        password,
        handleUsername,
        handlePassword,
        onLogin,
        loading, 
        error
    } = useLogin();
    
    const sharedInputProps: InputProps = {
        disabled: loading,
        error,
        clearOnEscape: true,
    };

    return (
        <Fragment>
            <main className={styles.root}>
                <div className={styles.content}>
                    <div className={styles.jaukeClientes}>
                        <img src="/jauke.svg" alt="Jauke" /> 
                        <span>/clientes</span>
                    </div>
                    <Input
                        value={username}
                        onChange={handleUsername}
                        placeholder="Usuario"
                        startEnhancer={() => <span>👩‍🚀</span>}
                        {...sharedInputProps}
                    />
                    <Input
                        value={password}
                        onChange={handlePassword}
                        placeholder="Contraseña"
                        type="password"
                        startEnhancer={() => <span>🔑</span>}
                        {...sharedInputProps}
                    />
                    <div className={styles.buttonRow}>
                        <Button 
                            isLoading={loading} 
                            kind="secondary" 
                            disabled={loading} 
                            onClick={onLogin}
                        >
                            Iniciar sesión
                        </Button>
                        <Button 
                            disabled 
                            kind="tertiary"
                        >
                            ¿Olvidaste tus datos?
                        </Button>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Login;