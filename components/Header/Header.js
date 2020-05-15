import Nav from '../Nav/Nav';
import { Button } from 'react-bootstrap';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <Nav />
            <Button>Login</Button>

        </header>
    );
}

export default Header;