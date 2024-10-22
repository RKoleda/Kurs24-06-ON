import React from 'react';
import styles from './Content.module.css';

const Content = () => {
    return (
        <div className={styles.content}>
            <button className={styles.homebtn} onClick={() => alert("Hallo von Home")}>
                Home
            </button>
            <p>Hello from Homepage</p>
        </div>
    );
};

export default Content;
