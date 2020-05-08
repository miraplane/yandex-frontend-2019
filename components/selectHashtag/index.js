import React from 'react';

import styles from './select.module.css';

function SelectHashtag({hashtag}) {
    return (
        <div className={styles["select-hashtag"]}>
            #{hashtag.title}
        </div>
    );
}

export default React.memo(SelectHashtag);
