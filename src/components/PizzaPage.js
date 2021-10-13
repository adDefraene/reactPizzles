import React from 'react';

const PizzaPage = () => {
    return ( 
<>
<div className="container pizzles-first-container">
    <div className="row">
        <div className="col-12 col-lg-3">
            <a href="/menu" className="pizzles-btn mb-3 pizzles-btn-back"><i className="fas fa-chevron-circle-left"></i>Retour au menu</a>
        </div>
        <div className="col-12 col-lg-6 mb-5">
            <h2 className="pizzles-title text-center mb-4 mx-auto">Margharita</h2>
        </div>
        <div className="col-10 offset-1 text-center col-lg-5 offset-lg-0 text-lg-start pizzles-pizza-image">
            <img src="/images/pics/Pizza2.jpg" alt="Pizza" />
        </div>
        <div className="col-10 offset-1 col-lg-5 offset-lg-2">
            <article className="pizzles-pizza-description pizzles-article text-lg-end mt-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus modi id vitae. Quod illum repudiandae, ipsa distinctio iure tempore atque deserunt. Accusamus corporis odit.</p>
            </article>
            <div className="row my-3">
                <div className="col-12 col-sm-4 text-center text-sm-start pizzles-pizza-price my-4">11,50€</div>
                <div className="col-12 col-sm-8 my-4">
                    <a href="/addpizza" className="pizzles-btn pizzles-btn-red">Commander<i className="fas fa-cart-plus"></i></a>
                </div>
            </div>
        </div>
        <div className="col-8 offset-2 offset-md-0 mb-2">
            <p className="my-4 pizzles-subtitles">Ingrédients</p>
            <div className="row">
                <div className="col-12 col-md-6 col-xl-3">
                    <div className="py-2 px-3 mb-2 pizzles-pizza-ingredients">
                        <img src="/images/pics/yellow_pepper.jpg" alt="aaa" />
                        <p className="text-center m-auto">Poivron</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
     );
}
 
export default PizzaPage;