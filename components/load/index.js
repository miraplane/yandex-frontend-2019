import { Ellipsis } from "react-awesome-spinners";
import React from 'react';

import styles from './load.module.css';

function LoadEllipsis() {
    return (
        <div className={styles.loadEllipsis}>
            <Ellipsis color="var(--theme-color)"/>
        </div>
    );
}

export default React.memo(LoadEllipsis);
