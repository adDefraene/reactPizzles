import React from 'react';
import HomePageHeader from './HomePageHeader';
import HomePageConcept from './HomePageConcept';
import HomePageWork from './HomePageWork';
import HomePagePlace from './HomePagePlace';
import HomePageReviews from './HomePageReviews';

/**
 * The Home component that is build with all its sections' components
 * @returns html
 */
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