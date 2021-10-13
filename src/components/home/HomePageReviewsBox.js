import React, { Fragment } from 'react';

const HomePageReviewsBox = (props) => {
    return ( 

    <div className="col-9 col-md-6 col-lg-4 col-xl-3 my-3 mx-auto">
        <div className="pizzles-home-reviews">
            <div className="pizzles-home-reviews-comment px-3 pt-3">
                <div className="d-flex flex-column">
                    <div className="mb-auto text-center">
                        <p><b>"{props.reviewText}"</b></p>
                    </div>
                    <div className="row">
                        <p className="col-6 align-self-end"><i>{props.reviewDate}</i></p>
                        <p className="col-6 align-self-end text-end"><i>{props.reviewAuthor}</i></p>
                    </div>
                </div>
            </div>
            <div className="pizzles-home-reviews-note stars py-3">
                <input type="radio" disabled defaultChecked={props.reviewAveragenote === 10 ? true : false} value="10" />
                <input type="radio" disabled defaultChecked={props.reviewAveragenote === 9 ? true : false} value="9" />
                <input type="radio" disabled defaultChecked={props.reviewAveragenote === 8 ? true : false} value="8" />
                <input type="radio" disabled defaultChecked={props.reviewAveragenote === 7 ? true : false} value="7" />
                <input type="radio" disabled defaultChecked={props.reviewAveragenote === 6 ? true : false} value="6" />
                <input type="radio" defaultChecked={props.reviewAveragenote === 5 ? true : false} value="5" />
                <input type="radio" defaultChecked={props.reviewAveragenote === 4 ? true : false} value="4" />
                <input type="radio" defaultChecked={props.reviewAveragenote === 3 ? true : false} value="3" />
                <input type="radio" defaultChecked={props.reviewAveragenote === 2 ? true : false} value="2" />
                <input type="radio" defaultChecked={props.reviewAveragenote === 1 ? true : false} value="1" />
            </div>
        </div>
    </div>

     );
}
 
export default HomePageReviewsBox;