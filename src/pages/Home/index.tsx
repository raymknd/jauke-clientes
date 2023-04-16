import { Fragment, useEffect } from "react";
import useSession from "../../hooks/useSession";
import { useAppDispatch } from "../../redux/hooks";
import { setHidden } from "../../redux/reducers/loader";
import styles from "./Home.module.sass";
import { Card } from "baseui/card";
import { Link } from "react-router-dom";
import Project from "./components/Project";
import Nav from "../../components/Nav";

const Home = () => {
    const { session } = useSession();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setHidden());
    }, [dispatch])
    return (
        <Fragment>
            <Nav />
            <main className={styles.root}>
                <div className={styles.hero}>
                    <div className={styles.header}>
                        <h1><span className={styles.gradient}>Buena!</span> ✌️</h1>
                        <h2>Eres parte de 2 proyectos activos.</h2>
                    </div>
                </div>
                <ul className={styles.list}>
                    <Project name="Liga Fair Play" id={1} updatedAt={new Date()} />
                    <Project name="Panel Liga" id={2} updatedAt={new Date()} />
                </ul>
            </main>
        </Fragment>
    )
}

export default Home;