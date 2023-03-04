import React, {useState} from 'react';

import s from "./CheckOption.module.scss"
import {checkedFilledIcon} from "@/components/modules/icons";
import clsx from "clsx";

const CheckOption = ({title} : {title: string}) => {
    const [checked, setChecked] = useState<boolean>(false)

    return (
        <div className={s.optionContainer} onClick={() => setChecked(prev => !prev)}>
            <h4 className={clsx(s.label, (checked && s.checkedColor))}>{checked && checkedFilledIcon()}{title}</h4>
        </div>
    );
};

export default CheckOption;