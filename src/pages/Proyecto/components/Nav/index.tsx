import { RiArrowLeftLine, RiMoreLine, RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "./Nav.module.sass";
import {motion} from "framer-motion";
import type { Nav } from "./Nav.types";

const Nav = ({ ready }: Nav.Props) => {
    return (
        <header className={styles.root}>
            <nav>
                <Link to="/home">
                    <RiArrowLeftLine />
                </Link>
                {ready && (
                    <motion.button 
                        transition={{
                            duration: 0.2,
                            ease: [0.17, 0.99, 0.62, 1]
                        }}
                        initial={{
                            scale: 0.8,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                    >
                        <RiMoreLine />
                    </motion.button>
                )}
            </nav> 
        </header>
    )
}

export default Nav;