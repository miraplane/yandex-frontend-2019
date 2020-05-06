import React from 'react';

import Content from '../content';
import Achivki from '../achivki';
import Action from '../action';
import styles from './scene.module.css';

function Scene({scene}) {
    return (
        <main className={styles["scene"]}>
            <Content scene={scene}/>
            <Achivki achivkis={scene.achivki}/>
            <Action actions={scene.actions}/>
        </main>
    );
}

export default Scene;
