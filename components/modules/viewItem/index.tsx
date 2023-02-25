import React from 'react';
import BookDescription from "@/components/modules/viewItem/BookDescription";
import BookMainSection from "@/components/modules/viewItem/BookMainSection";
import OfferedBooks from "@/components/modules/viewItem/OfferedBooks";
import ProposalsSection from "@/components/modules/viewItem/ProposalsSection";
import CommentSection from "@/components/modules/viewItem/CommentSection";

type Props = {};

const ViewItemPage = (props: Props) => {
    return (
        <>
            <BookMainSection/>
            <BookDescription/>
            <OfferedBooks items={[]} title={"fake"}/>
            <ProposalsSection items={[]} title={""}/>
            <CommentSection items={[]} title={""}/>
        </>
    );
};

export default ViewItemPage;
