import React from 'react';
import burgerLogo from '../../../src/assets/images/burger-logo.png'
import styles from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={styles.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt={"My burger"} />
        </div>
    )
}

export default Logo;