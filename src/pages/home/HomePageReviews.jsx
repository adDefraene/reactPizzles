import React, { useEffect, useState } from 'react';
import reviewsAPI from '../../services/reviewsAPI';
import HomePageReviewsBox from '../../components/reviews/HomePageReviewsBox';

const HomePageReviews = () => {

    const [homeReviews, setHomeReviews] = useState([])

    const fetchHomeReviews = async () => {
        try{
            const data = await reviewsAPI.findAll()
            setHomeReviews(data)
        }
        catch(error){
            console.error(error.response)
        }
    }

    useEffect(()=>{
        fetchHomeReviews()
    },[])

    return ( 
<>
    <section id="pizzlesReviews">
        <div className="container pt-5 pb-5">
            <div className="row my-4">
                <div className="col-12 my-3 mx-auto">
                    <h2 className="pizzles-title text-center my-4 mx-auto">Ce que nos clients pensent de nous</h2>
                </div>
                {homeReviews.map(homeReview => (
                    <HomePageReviewsBox reviewText={homeReview.review} reviewDate={homeReview.reviewedOrder.date} reviewAuthor={homeReview.reviewedOrder.customer.evaluationName} reviewAveragenote={homeReview.averageRating} />
                ))}
            </div>
        </div>
    </section>
</>
     );
}
 
export default HomePageReviews;