import React from 'react';

/**
 * It gives the 10 stars which are used to display the given note
 * @param props 
 * @returns html
 */
const ReviewsStarsDisplay = (props) => {
    
    // Our "html" container
    var reviewStars = [];
    // For that generates the 10 stars and checked the given note
    for(let i = 10; i >= 1; i--){
        reviewStars.push(<input type="radio" disabled={props.isDisabled} defaultChecked={props.reviewNote === i ? true : false} value={i} required={props.isRequired} />)
    }
    // Return the container of the 10 stars
    return reviewStars;
}
 
export default ReviewsStarsDisplay;