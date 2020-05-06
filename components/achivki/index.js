import React from 'react';

import styles from './achivki.module.css';

function Achivki({achivkis}) {
    return (
        <ul className={styles["achivki"]}>
            {achivkis.map(achivki => {
                return (
                    <li className={styles["achivki-item"]}>
                        <img src={achivki.img}/>
                        <span className={styles["achivki-item-receive"]}>Достижение получено</span>
                        <span className={styles["achivki-item-title"]}>
                                    {achivki.title}
                                </span>
                    </li>
                );
            })}
        </ul>
    );
}

export default Achivki;
