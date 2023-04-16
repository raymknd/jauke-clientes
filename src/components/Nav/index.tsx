import { RiLogoutBoxFill, RiLogoutBoxLine, RiUserFill, RiUserLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import styles from "./Nav.module.sass";

const Nav = () => {
    return (
        <header className={styles.root}>
            <nav>
                <Link to="/">
                    <RiUserLine />
                </Link>
                <img src="/jauke.svg" alt="Jauke" />
                <Link to="/">
                    <RiLogoutBoxLine />
                </Link>
            </nav>
        </header>
    )
}

export default Nav;