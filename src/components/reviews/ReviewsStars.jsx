import React from 'react';

/**
 * It gives the 10 stars which are used to do the review
 * @param props 
 * @returns html
 */
const ReviewsStars = (props) => {
    
    // Our "html" container
    var reviewStars = [];
    // For that generates the 10 stars
    for(let i = 10; i >= 1; i--){
        reviewStars.push(<input type="radio" onChange={props.method} name={props.name} value={i} />)
    }
    // Return the container of the 10 stars
    return reviewStars;
}
 
export default ReviewsStars;