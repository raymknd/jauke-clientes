import { useAppSelector } from "../../redux/hooks";
import { selectLoader } from "../../redux/reducers/loader";
import styles from "./Loader.module.sass";

const Loader = () => {
    const open = useAppSelector(selectLoader);
    return (
        <div role="dialog" className={styles.root} data-open={open} aria-hidden={!open} aria-label="Cargando">
            <img src="/static/images/char.gif" alt="Charizard" />
            {/* <div className={styles.label}>Un momento...</div> */}
        </div>
    )
}

export default Loader;