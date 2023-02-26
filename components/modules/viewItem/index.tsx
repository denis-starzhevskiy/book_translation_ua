import React from 'react';
import BookDescription from "@/components/modules/viewItem/BookDescription";
import BookMainSection from "@/components/modules/viewItem/BookMainSection";
import ProposalsSection from "@/components/modules/viewItem/ProposalsSection";
import CommentSection from "@/components/modules/viewItem/CommentSection";
import {trandsBlockData} from "@/utils/trandsBlockData";
import BooksSection from "@/components/modules/home/BooksSection";
import {proposalsBlockData} from "@/utils/proposalsBlockData";
import {commentsBlockData} from "@/utils/commentsBlockData";

type Props = {};

const ViewItemPage = (props: Props) => {
    return (
        <>
            <BookMainSection/>
            <BookDescription/>
            <BooksSection title="Інші роботи автора" items={trandsBlockData} light />
            <ProposalsSection items={proposalsBlockData}/>
            <CommentSection items={commentsBlockData}/>
        </>
    );
};

export default ViewItemPage;
