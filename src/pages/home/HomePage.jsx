import React, { useEffect } from 'react';
import HomePageHeader from './HomePageHeader';
import HomePageConcept from './HomePageConcept';
import HomePageWork from './HomePageWork';
import HomePagePlace from './HomePagePlace';
import HomePageReviews from './HomePageReviews';

/**
 * The Home component that is build with all its sections' components
 * @returns html
 */
const HomePage = ({match}) => {

    const checkPath = () => {
        let path = match.path
        if(path === "/"){
            document.querySelector(".pizzles-nav-selectedPage").classList.remove("pizzles-nav-selectedPage")
            document.querySelector("#pizzles-nav-home").classList.add("pizzles-nav-selectedPage")
        }
    }

    useEffect(()=>{
        checkPath()
    }, [match])

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