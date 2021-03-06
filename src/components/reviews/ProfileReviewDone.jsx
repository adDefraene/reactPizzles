import React from 'react';

import ReviewsStarsDisplay from './ReviewsStarsDisplay';
import Moment from 'react-moment';

/**
 * In the review section of the profile page, this is what is displayed when a review has been done for an order : the review's infos are showed
 * @param param0 
 * @returns html
 */
const ProfileReviewDone = ({order}) => {
    return ( 
<>
    <div className="col-12 col-lg-6 my-3 px-4">
        <div className="pizzles-review-box p-2 row">
            <div className="col-12 text-center mt-2 mb-5 pizzles-review-numOrder">Commande #{order.id}</div>
            <div className="col-12 col-md-6 pizzles-review-dateOrder text-center"><b><Moment format="DD-MM-YYYY HH:mm">{order.date}</Moment></b></div>
            <div className="col-12 col-md-6 my-3">
                <div className="review-box-stars stars">
                    <ReviewsStarsDisplay
                        key={`Average_${order.id}`}
                        isDisabled={true}
                        reviewNote={order.review.averageRating}
                    />
                </div>
            </div>
            <br className="mb-2" />
            <div className="col-12 my-3 text-center">
                <p>"{order.review.review}"</p>
            </div>
            <div className="col-4 col-md-6 my-2 text-center stars-text">SERVICE</div>
            <div className="col-8 col-md-6 my-2 stars">
                    <ReviewsStarsDisplay
                        key={`Service_${order.id}`}
                        isDisabled={true}
                        reviewNote={order.review.starsService}
                    />
            </div>
            <div className="col-4 col-md-6 my-2 text-center stars-text">QUALITÉ</div>
            <div className="col-8 col-md-6 my-2 stars">
                    <ReviewsStarsDisplay
                        key={`Quality_${order.id}`}
                        isDisabled={true}
                        reviewNote={order.review.starsQuality}
                    />
            </div>
            <div className="col-4 col-md-6 my-2 text-center stars-text">PONCTUALITÉ</div>
            <div className="col-8 col-md-6 my-2 stars">
                    <ReviewsStarsDisplay
                        key={`Punctuality_${order.id}`}
                        isDisabled={true}
                        reviewNote={order.review.starsPunctuality}
                    />
            </div>
        </div>
    </div>
</>
     );
}
 
export default ProfileReviewDone;