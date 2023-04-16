import { Link } from "react-router-dom"
import styles from "./Project.module.sass";
import type { Project } from "./Project.types";
import {RiArrowRightUpLine} from "react-icons/ri"

const Project = ({name, id, updatedAt}:Project.Props) => {
    return (
        <li className={styles.root}>
            <Link to={`/proyecto/${id}`}>
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <h4>Actualizado el 25/2/2023</h4>
                </div>
                <RiArrowRightUpLine size={24} />
            </Link>
        </li>
    )
}

export default Project;