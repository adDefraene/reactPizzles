import React from 'react';
import HomePageReviewsBox from './HomePageReviewsBox';

const HomePageReviews = () => {
    return ( 
    <section id="pizzlesReviews">
        <div className="container pt-5 pb-5">
            <div className="row my-4">
                <div className="col-12 my-3 mx-auto">
                    <h2 className="pizzles-title text-center my-4 mx-auto">Ce que nos clients pensent de nous</h2>
                </div>
                <HomePageReviewsBox reviewText="aaa" reviewDate="30-12-2020" reviewAuthor="JM. Bidet" reviewAveragenote={6} />
                <HomePageReviewsBox reviewText="bbb" reviewDate="30-12-2020" reviewAuthor="JM. Bidet" reviewAveragenote={10} />
                <HomePageReviewsBox reviewText="ccc" reviewDate="30-12-2020" reviewAuthor="JM. Bidet" reviewAveragenote={7} />
                <HomePageReviewsBox reviewText="bjrgdoikjht mordfjshik retid rsehtfd s hgdsjgh dsfghds" reviewDate="30-12-2020" reviewAuthor="JM. Bidet" reviewAveragenote={4} />
            </div>
        </div>
    </section>
     );
}
 
export default HomePageReviews;