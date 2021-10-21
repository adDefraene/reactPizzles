import React from 'react';

import ReviewsStars from '../../components/reviews/ReviewsStars';
import Moment from 'react-moment';

const ProfileReviewDone = ({order}) => {
    return ( 
<>
    <div class="col-12 col-lg-6 my-3 px-4">
        <div class="pizzles-review-box p-2 row">
            <div class="col-12 text-center mt-2 mb-5 pizzles-review-numOrder">Commande #{order.id}</div>
            <div class="col-12 col-md-6 pizzles-review-dateOrder text-center"><b><Moment format="DD-MM-YYYY HH:mm">{order.date}</Moment></b></div>
            <div class="col-12 col-md-6 my-3">
                <div class="review-box-stars stars">
                    <ReviewsStars
                        isDisabled={true}
                        reviewNote={order.review.averageRating}
                    />
                </div>
            </div>
            <br class="mb-2" />
            <div class="col-12 my-3 text-center">
                <p>"{order.review.review}"</p>
            </div>
            <div class="col-4 col-md-6 my-2 text-center stars-text">SERVICE</div>
            <div class="col-8 col-md-6 my-2 stars">
                    <ReviewsStars
                        isDisabled={true}
                        reviewNote={order.review.starsService}
                    />
            </div>
            <div class="col-4 col-md-6 my-2 text-center stars-text">QUALITÉ</div>
            <div class="col-8 col-md-6 my-2 stars">
                    <ReviewsStars
                        isDisabled={true}
                        reviewNote={order.review.starsQuality}
                    />
            </div>
            <div class="col-4 col-md-6 my-2 text-center stars-text">PONCTUALITÉ</div>
            <div class="col-8 col-md-6 my-2 stars">
                    <ReviewsStars
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