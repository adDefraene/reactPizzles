import React from 'react';

const ReviewsStars = (props) => {
    
    var reviewStars = [];
    for(let i = 10; i >= 1; i--){
        reviewStars.push(<input type="radio" disabled={props.isDisabled} defaultChecked={props.reviewNote === i ? true : false} value="i" />)
    }
    return reviewStars;
}
 
export default ReviewsStars;