import React from 'react';

const ReviewsStars = (props) => {
    
    var reviewStars = [];
    for(let i = 10; i >= 1; i--){
        reviewStars.push(<input type="radio" onChange={props.method} name={props.name} value={i} />)
    }
    return reviewStars;
}
 
export default ReviewsStars;