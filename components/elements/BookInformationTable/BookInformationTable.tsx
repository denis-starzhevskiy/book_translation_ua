import React from 'react';
import s from "./BookInformationTable.module.scss"
import clsx from "clsx";
import Link from "next/link";
import {BookProps} from "@/components/modules/viewItem/BookMainSection";

const BookInformationTable = (book: BookProps) => {
    return (
        <table className={s.table}>
            <tbody>
            <tr>
                <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>Автор</th>
                <td className={clsx(s.td, s.commonTdTh)}>{book.author}</td>
            </tr>
            <tr>
                <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>Перекладач</th>
                <td className={clsx(s.td, s.commonTdTh)}>{book.translator}</td>
            </tr>
            <tr>
                <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>Розділів</th>
                <td className={clsx(s.td, s.commonTdTh)}>{book.sectionsNumber}</td>
            </tr>
            <tr>
                <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>Жанр</th>
                <td className={clsx(s.td, s.commonTdTh)}>{book.genre}</td>
            </tr>
            <tr>
                <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>Теги</th>
                <td className={clsx(s.td, s.commonTdTh)}>
                    {book.tags && (
                        <div className={s.tags}>
                            <ul>
                                {book.tags.map((tag, index) => (
                                    <li key={index}>
                                        <Link href={tag.link}>{tag.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </td>
            </tr>
            <tr>
                <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>Фендом</th>
                <td className={clsx(s.td, s.commonTdTh)}>{book.fendom}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default BookInformationTable;