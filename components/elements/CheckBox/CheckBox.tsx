import React from 'react';
import s from "./CheckBox.module.scss";
import clsx from "clsx";

type CheckBoxProps = {
    title?: string,
    customClass?: string,
    checked?: boolean,
    setChecked?: () => void
}

const CheckBox = ({title, customClass, checked, setChecked}: CheckBoxProps) => {
    return (
        <label className={s.container}>
            <input type={"checkbox"} checked={checked} onChange={setChecked}/>
            <span className={clsx(s.checkmark, customClass)}>
                {title && <h4 className={s.label}>{title}</h4>}
            </span>
        </label>
    );
};

export default CheckBox;