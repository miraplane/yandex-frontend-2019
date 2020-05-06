import Link from 'next/link';
import React from 'react';

import styles from './action.module.css';

function Action({actions}) {
    if (actions.length) {
        return (
            <ul className={styles["action"]}>
                {actions.map(action => {
                    const linkAs = `/scene/next?id=${action.nextSceneId}`;
                    const linkHref = {
                        pathname: '/scene',
                        query: {command: 'next', id: action.nextSceneId}
                    };

                    return (
                        <li className={styles["action-item"]}>
                            <Link as={linkAs} href={linkHref}>
                                <a>{action.title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    } else {
        const linkAs = `/scene/repeat`;
        const linkHref = {
            pathname: '/scene',
            query: {command: 'repeat'}
        };

        return (
            <div className={styles["action-repeat"]}>
                <Link as={linkAs} href={linkHref}>
                    <a>Начать заново</a>
                </Link>
            </div>
        );
    }
}

export default Action;
