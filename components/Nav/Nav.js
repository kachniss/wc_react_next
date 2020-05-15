import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={styles.mainNav}>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Categories</a></li>
                <li><a href=''>Products</a></li>
                <li><a href=''>My Account</a></li>
            </ul>
        </nav>
    );
}

export default Nav;