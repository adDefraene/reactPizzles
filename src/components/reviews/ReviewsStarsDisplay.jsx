import React from 'react';

const ReviewsStarsDisplay = (props) => {
    
    var reviewStars = [];
    for(let i = 10; i >= 1; i--){
        reviewStars.push(<input type="radio" disabled={props.isDisabled} defaultChecked={props.reviewNote === i ? true : false} value={i} required={props.isRequired} />)
    }
    return reviewStars;
}
 
export default ReviewsStarsDisplay;