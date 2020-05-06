import Link from 'next/link';
import React from 'react';

import styles from './header.module.css';

function Header() {
    const linkAs = '/adventures';
    const linkHref = { pathname: '/list' };

    return (
        <header className={styles["header"]}>
            <img src="http://miraplane-task-2019.surge.sh/images/ico.png"/>
            <Link as={linkAs} href={linkHref}>
                <a className={styles["header-title"]}>
                    <span>Telltail</span>Games
                </a>
            </Link>
        </header>
    );
}

export default Header;
