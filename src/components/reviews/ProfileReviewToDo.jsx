import React from 'react';

import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const ProfileReviewToDo = ({order}) => {
    return ( 
    <>
        <div class="col-12 col-lg-6 my-3 px-4">
            <div class="pizzles-review-box p-2 row">
                <div class="col-12 text-center mt-2 mb-5 pizzles-review-numOrder">Commande #{order.id}</div>
                <div class="col-12 col-md-6 pizzles-review-dateOrder text-center"><b><Moment format="DD-MM-YYYY HH:mm">{order.date}</Moment></b></div>
                <div class="col-12 col-sm-6 my-3">
                    <Link to={`/profile/review/${order.id}`} class="pizzles-btn pizzles-btn-yellow">Évaluer<i class="fas fa-tasks"></i></Link>
                </div>
            </div>
        </div>
    </>
     );
}
 
export default ProfileReviewToDo;