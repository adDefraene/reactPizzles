import React from 'react';
import Moment from 'react-moment'

const HomePageReviewsBox = (props) => {

    var reviewStars = [];
    
    for(let i = 10; i >= 1; i--){
        reviewStars.push(<input type="radio" disabled defaultChecked={props.reviewAveragenote === i ? true : false} value="i" />)

    }

    return ( 

    <div className="col-9 col-md-6 col-lg-4 col-xl-3 my-3 mx-auto">
        <div className="pizzles-home-reviews">
            <div className="pizzles-home-reviews-comment px-3 pt-3">
                <div className="d-flex flex-column">
                    <div className="mb-auto text-center">
                        <p><b>"{props.reviewText}"</b></p>
                    </div>
                    <div className="row">
                        <p className="col-6 align-self-end"><i>
                            <Moment format="DD-MM-YYYY">
                            {props.reviewDate}
                            </Moment>
                        </i></p>
                        <p className="col-6 align-self-end text-end"><i>{props.reviewAuthor}</i></p>
                    </div>
                </div>
            </div>
            <div className="pizzles-home-reviews-note stars py-3">
                {reviewStars}
            </div>
        </div>
    </div>

     );
}
 
export default HomePageReviewsBox;