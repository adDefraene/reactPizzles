import React from 'react';
import HomePageHeader from './home/HomePageHeader';
import HomePageConcept from './home/HomePageConcept';
import HomePageWork from './home/HomePageWork';
import HomePagePlace from './home/HomePagePlace';
import HomePageReviews from './home/HomePageReviews';

const HomePage = () => {
    return ( 
    <>
        <HomePageHeader />
        <HomePageConcept />
        <HomePageWork />
        <HomePagePlace />
        <HomePageReviews />
    </>
     );
}
 
export default HomePage;