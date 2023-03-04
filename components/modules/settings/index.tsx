import React from 'react';
import clsx from "clsx";
import s from "@/components/modules/viewItem/BookMainSection/BooksSection.module.scss";
import {BreadCrumbs} from "@/components/elements/BreadCrumbs/BreadCrumbs";

const SettingsView = () => {
    return (
        <section className={clsx(s.section, 'section')}>
            <div className="container">
                <BreadCrumbs path={[{title: "Головна", link: "/"}, {title: "Перегляд книги", link: "/books/543543"}]}/>
                <h2 className={s.title}></h2>
                <div className={s.container}>

                </div>
            </div>
        </section>
    );
};

export default SettingsView;