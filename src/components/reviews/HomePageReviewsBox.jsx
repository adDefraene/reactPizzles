import React from 'react';
import Moment from 'react-moment'
import ReviewsStarsDisplay from './ReviewsStarsDisplay';

/**
 * The reviews boxes that are displayed nearly the end of the homepage
 * @param props 
 * @returns html
 */
const HomePageReviewsBox = (props) => {

    return ( 
    <>
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
                <ReviewsStarsDisplay
                    isDisabled={true}
                    reviewNote={props.reviewAveragenote}
                />
            </div>
        </div>
    </>
     );
}
 
export default HomePageReviewsBox;