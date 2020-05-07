import React from 'react';

import styles from './content.module.css';

function getContentPosition(contentPosition) {
    const contentLeft = styles["scene-content-left"];
    const contentRight = styles["scene-content-right"];
    const contentBottom = styles["scene-content-bottom"];
    const contentTop = styles["scene-content-top"];

    switch (contentPosition) {
        case 'leftBottom':
            return `${contentLeft} ${contentBottom}`;
        case 'leftTop':
            return `${contentLeft} ${contentTop}`;
        case 'rightBottom':
            return `${contentRight} ${contentBottom}`;
        case 'rightTop':
            return `${contentRight} ${contentTop}`;
        default:
            return `${contentLeft} ${contentTop}`;
    }
}

function Content({scene}) {
    const changeColor = !!scene.img;
    const colorStyle = changeColor ? styles["scene-content-color"] : '';
    const style = `${getContentPosition(scene.contentPosition)} ${colorStyle}`;

    return (
        <article className={styles["scene-content"]}>
            {scene.img && <img src={scene.img}/>}
            <span className={style}>
                {scene.content}
            </span>
        </article>
    );
}

export default React.memo(Content);
