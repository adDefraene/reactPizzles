import React, { useEffect, useState } from 'react';
import reviewsAPI from '../../services/reviewsAPI';
import HomePageReviewsBox from '../../components/reviews/HomePageReviewsBox';

/**
 * Section that displays the last 6 orders' review
 * @returns html
 */
const HomePageReviews = () => {

    // The var for our home reviews
    const [homeReviews, setHomeReviews] = useState([])

    // Method that fetches the reviews
    const fetchHomeReviews = async () => {
        try{
            const data = await reviewsAPI.findAll()
            setHomeReviews(data)
        }
        catch(error){
            console.error(error.response)
        }
    }

    // On load, executes
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
                <div className="col-9 col-md-6 col-lg-4 col-xl-3 my-3 mx-auto">
                    <HomePageReviewsBox
                        key={`${homeReview.id}_-_${homeReview.reviewedOrder.date}`}
                        reviewText={homeReview.review}
                        reviewDate={homeReview.reviewedOrder.date}
                        reviewAuthor={homeReview.reviewedOrder.customer.evaluationName}
                        reviewAveragenote={homeReview.averageRating} />
                </div>
                ))}
            </div>
        </div>
    </section>
</>
     );
}
 
export default HomePageReviews;