import React from 'react';
import styles from './Toolbar.module.css';
import NavigationItems from "../NavigationItems/NavigationItems";

import Logo from '../../Logo/Logo';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
};

export default Toolbar;