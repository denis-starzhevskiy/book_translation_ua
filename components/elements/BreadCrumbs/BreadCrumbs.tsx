import React from "react";

import s from "./BreadCrumbs.module.scss"

export const BreadCrumbs = ({path}: {path: string[]}) => {
    return <div className={s.breadcrumbs}>{path.map((item, i) => (
        <>
            {i !== 0 && <p> {' > '} </p>}
            <p>{item}</p>
        </>
    ))}</div>;
};