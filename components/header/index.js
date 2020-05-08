import Link from 'next/link';
import React from 'react';

import routes from '../../src/routes/routes';
import styles from './header.module.css';

function Header() {
    const linkAs = routes.ADVENTURES;
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

export default React.memo(Header);
