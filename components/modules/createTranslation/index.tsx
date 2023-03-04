import React, {useState} from 'react';
import clsx from "clsx";
import s from "@/components/modules/createTranslation/CreateTranslation.module.scss";
import {BreadCrumbs} from "@/components/elements/BreadCrumbs/BreadCrumbs";
import GeneralInformation from "@/components/modules/createTranslation/general-information";
import Abonement from "@/components/modules/createTranslation/abonement";
import Advertisement from "@/components/modules/createTranslation/advertisement";
import AccessRights from "@/components/modules/createTranslation/access-rights";
import {successIcon} from "@/components/modules/icons";
import {abonements, advertisements} from "@/utils/createTranslation";
import {useMediaQuery} from "@/hooks/useMediaQuery";

const createTranslationSteps = [
    {
        step: 0,
        label: 'ЗАГАЛЬНІ НАЛАШТУВАННЯ',
        phoneLabel: 'ЗАГАЛЬНЕ'
    },
    {
        step: 1,
        label: 'АБОНЕМЕНТ',
        phoneLabel: 'АБОНЕМЕНТ'
    },
    {
        step: 2,
        label: 'РЕКЛАМА НА САЙТІ',
        phoneLabel: 'РЕКЛАМА'
    },
    {
        step: 3,
        label: 'ПРАВА ДОСТУПУ',
        phoneLabel: 'ПРАВА'
    },
]

const CreateTranslation = () => {
    const [submitEntity, setSubmitEntity] = useState<object>({})
    const [currentStep, setCurrentStep] = useState<number>(0)
    const isMobile = useMediaQuery('991.98');

    const addInformation = ({label, data}: {
        label?: "general" | "abonement" | "advertisement" | "access-rights",
        data: object
    }) => {
        if (label) {
            setSubmitEntity(prev => {
                return {...prev, [label]: data}
            })
        } else {
            setSubmitEntity(prev => {
                return {...prev, ...data}
            })
        }
    }

    return (
        <section className={clsx(s.section)}>
            <div className={clsx("container")}>
                <div className={s.container}>
                    <div id={'header'}>
                        <BreadCrumbs
                            path={[{title: "Головна", link: "/"}, {title: "Перегляд книги", link: "/books/543543"}]}/>
                        <h2 className={s.title}>СТВОРИТИ ПЕРЕКЛАД</h2>
                        <div id="navigation-block" className={s.navContainer}>
                            <div className={s.navigation}>
                                <nav aria-label="Navigation">
                                    <ul>
                                        {createTranslationSteps.map((item, index) => (
                                            <li key={index}>
                                                <div onClick={() => setCurrentStep(item.step)}>
                                                    <h4 style={currentStep === item.step ? {color: "#fded01"} : {}}>{isMobile ? item.phoneLabel : item.label}</h4>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div>
                        {currentStep === 0 && (
                            <GeneralInformation/>
                        )}
                        {currentStep === 1 && (
                            <Abonement abonements={abonements}/>
                        )}
                        {currentStep === 2 && (
                            <Advertisement advertisements={advertisements}/>
                        )}
                        {currentStep === 3 && (
                            <AccessRights/>
                        )}
                    </div>
                    <div className={s.actionFooter}>
                        <button className={clsx("button", s.customButton)}>{successIcon()}Опублікувати переклад</button>
                    </div>
                </div>
            </div>
        </section>)
}

export default CreateTranslation;