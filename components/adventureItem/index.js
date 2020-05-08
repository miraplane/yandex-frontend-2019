import Link from 'next/link';
import React from 'react';

import routes from '../../src/routes/routes';
import Hashtags from '../hashtags';
import styles from './adventure.module.css';

function AdventureItem({adventure}) {
    const linkAs = `${routes.SCENE}/start?id=${adventure.id}`;
    const linkHref = {
        pathname: '/scene',
        query: {command: 'start', id: adventure.id}
    };

    return [
            <Link as={linkAs} href={linkHref}>
                <a className={styles["adventure-item-img"]}>
                    <img src={adventure.img}/>
                </a>
            </Link>,
            <Link as={linkAs} href={linkHref}>
                <a className={styles["adventure-item-title"]}>
                    {adventure.title}
                </a>
            </Link>,
            <span className={styles["adventure-item-content"]}>
                            {adventure.content}
            </span>,
            <Hashtags hashtags={adventure.hashtags}/>
    ];
}

export default React.memo(AdventureItem);
