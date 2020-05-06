import Link from 'next/link';
import React, { PropTypes } from 'react';

import styles from './hashtags.module.css';

function Hashtags({hashtags}) {
    return (
        <ul className={styles["hashtags"]}>
            {hashtags.map(hashtag => {
                const linkAs = `/adventures/${hashtag.link}`;
                const linkHref = {
                    pathname: '/list-hashtag',
                    query: {link: hashtag.link}
                };

                return (
                    <li className={styles["hashtags-item"]}>
                        <Link as={linkAs} href={linkHref}>
                            <a className={styles["hashtags-item-link"]}>
                                #{hashtag.title}
                            </a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default Hashtags;
