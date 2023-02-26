import React from "react";

export const StarRating = ({rating}: {rating: number}) => {
    rating = rating < 0 ? 0 : rating > 5 ? 5 : rating;

    return (<div style={{display: 'flex', gap: 14}}>{new Array(5).fill(0)
            .map((_, i) => i + 1 <= rating ? <StarFilled key={i}/> : <StarOutlined key={i}/>)}</div>
    );
};

const StarFilled = () => {
    return (<span style={{color: 'yellow'}}>&#9733;</span>);
};

const StarOutlined = () => {
    return (<span style={{color: 'yellow'}}>&#9734;</span>);
};