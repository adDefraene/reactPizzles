import React from 'react';

import { Link } from 'react-router-dom';
import Moment from 'react-moment';

/**
 * In the review section of the profile page, this is what is displayed when a review has not already been done for an order : the link of the page to do the review is provided
 * @param param0 
 * @returns html
 */
const ProfileReviewToDo = ({order}) => {
    return ( 
    <>
        <div className="col-12 col-lg-6 my-3 px-4">
            <div className="pizzles-review-box p-2 row">
                <div className="col-12 text-center mt-2 mb-5 pizzles-review-numOrder">Commande #{order.id}</div>
                <div className="col-12 col-md-6 pizzles-review-dateOrder text-center"><b><Moment format="DD-MM-YYYY HH:mm">{order.date}</Moment></b></div>
                <div className="col-12 col-sm-6 my-3">
                    <Link to={`/profile/review/${order.id}`} className="pizzles-btn pizzles-btn-yellow">Évaluer<i className="fas fa-tasks"></i></Link>
                </div>
            </div>
        </div>
    </>
     );
}
 
export default ProfileReviewToDo;