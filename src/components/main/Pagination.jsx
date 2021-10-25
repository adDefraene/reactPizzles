import React from 'react';

/**
 * Generates a nav for pages feature
 * @param props 
 * @returns html
 */
const Pagination = (props) => {

    // Count the max pages
    const pagesCount = Math.ceil(props.length / props.itemsPerPage)
    
    // Generates the index of each page
    const pages = []

    for(let i=1; i<= pagesCount; i++)
    {
        pages.push(i)
    }


    return ( 
        <>
            <ul className="pagination pagination-pizzles justify-content-center">
                {/* Back button */}
                <li className={"page-item" + (props.currentPage === 1 ? " disabled" : null)}>
                    <button className="page-link" onClick={()=>props.onPageChanged(props.currentPage - 1)} ><i className="fas fa-arrow-left m-auto"></i></button>
                </li>
                {/* Pages index */}
                {pages.map(page => (
                    <li key={page} className={"page-item" + (props.currentPage === page ? " active" : null)}>
                        <button className="page-link" onClick={() => props.onPageChanged(page)}>{page}</button>
                    </li>
                ))}
                {/* Next button */}
                <li className={"page-item" + (props.currentPage === pagesCount ? " disabled" : null)}>
                    <button className="page-link" onClick={()=>props.onPageChanged(props.currentPage + 1)} ><i className="fas fa-arrow-right m-auto"></i></button>
                </li>

            </ul>
        </>
     );
}

/**
 * Method that retreives our items array into a paginated way
 * @param {array} items 
 * @param {integer} currentPage 
 * @param {integer} itemsPerPage 
 * @returns array
 */
Pagination.getData = (items, currentPage, itemsPerPage) => {

    // Gets the id number of the first items for that page
    const start = currentPage * itemsPerPage - itemsPerPage
    // eg: 20   =      3      *     10       -  10          

    // Slices our initial items array into : the first item of the page TO THE last item
    return items.slice(start, start + itemsPerPage)
}
 
export default Pagination;