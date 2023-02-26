import React from 'react';
import BookDescription from "@/components/modules/viewItem/BookDescription";
import BookMainSection from "@/components/modules/viewItem/BookMainSection";
import ProposalsSection from "@/components/modules/viewItem/ProposalsSection";
import CommentSection from "@/components/modules/viewItem/CommentSection";
import BooksSection from "@/components/modules/home/BooksSection";
import {proposalsBlockData} from "@/utils/proposalsBlockData";
import {commentsBlockData} from "@/utils/commentsBlockData";
import {recommendationsByAuthorData} from "@/utils/recommendationsBooksData";
import {bookInformation} from "@/utils/bookInformation";

type Props = {};

const ViewItemPage = (props: Props) => {
    return (
        <>
            <BookMainSection {...bookInformation}/>
            <BookDescription/>
            <BooksSection title="Інші роботи автора" items={recommendationsByAuthorData} light countDesktopSlider={6}/>
            <ProposalsSection items={proposalsBlockData}/>
            <CommentSection items={commentsBlockData}/>
        </>
    );
};

export default ViewItemPage;
