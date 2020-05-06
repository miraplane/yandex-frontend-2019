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

function ContentText({content, changeColor, contentPosition}) {
    const colorStyle = changeColor ? styles["scene-content-color"] : '';
    const style = `${getContentPosition(contentPosition)} ${colorStyle}`;
    return (
        <span className={style}>
            {content}
        </span>
    );
}

function Content({scene}) {
    let changeColor = true;
    return (
        <article className={styles["scene-content"]}>
            {(()=>{
                if (scene.img) {
                    return <img src={scene.img}/>;
                }
                changeColor = false;
            })()}
            <ContentText
                content={scene.content}
                changeColor={changeColor}
                contentPosition={scene.contentPosition}/>
        </article>
    );
}

export default Content;
