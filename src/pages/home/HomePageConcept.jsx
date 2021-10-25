import React from 'react';

/**
 * Section that talks about the concept of the restaurant
 * @returns html
 */
const HomePageConcept = () => {
    return ( 
    <section className="container pt-5 mb-3" id="pizzlesConcept">
        <div className="row mt-5">
            <div className="col-12 my-3 mx-auto">
                <h2 className="pizzles-title text-center mb-4 mx-auto">Notre concept</h2>
                <p className="pizzles-concept text-center">"UNE PIZZA EN PUZZLE"</p>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1 pizzles-concept-puzzle my-auto">
                <img src="/images/svg/Pizza_puzzle_Base.svg" alt="Pièce de puzzle de la base de pizza" />
                <img src="/images/svg/Pizza_puzzle_Mushrooms.svg" alt="Pièce de puzzle des champignons" />
                <img src="/images/svg/Pizza_puzzle_Olives.svg" alt="Pièce de puzzle des olives" />
            </div>
            <article className="col-11 col-lg-4 offset-1 my-5">
                <p><strong>Nous adorons avoir le choix quand on commande une pizza</strong>
                </p>
                <p>Certaines personnes souhaitent avoir une pizza avec un ingrédient en plus, mais cela n’est pas possible dans certains restaurants.</p>
                <hr />
                <p>Eh bien, pour notre part, nous nous sommes entièrement basés sur cette idée lorsque nous avons fondé notre pizzeria en 2018.</p>
                <p>Nous vous proposons quelques pizzas basiques que vous pourrez  personnaliser à votre guise grâce à notre grande liste d’ingrédients.</p>
            </article>
            <div className="col-12 my-5">
                <a href="#pizzlesWork" className="pizzles-btn pizzles-btn-white mx-auto mt-3">Comment cela fonctionne-t-il ?<i className="fas fa-cogs"></i></a>
            </div>
        </div>
    </section>
     );
}
 
export default HomePageConcept;