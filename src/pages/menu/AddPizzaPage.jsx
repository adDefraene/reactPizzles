import React from 'react';

const AddPizzaPage = () => {
    return ( 
<>
<div className="container pizzles-first-container">
    <div className="row">
        <div className="col-12 col-lg-3">
            <a href="/menu" className="pizzles-btn mb-3 pizzles-btn-back"><i className="fas fa-chevron-circle-left"></i>Annuler l'ajout</a>
        </div>
        <div className="col-12 col-lg-6 mb-3">
            <h2 className="pizzles-title text-center mb-4 mx-auto">Ajouter une pizza</h2>
        </div>
        <div className="col-10 col-md-6 col-xl-4 offset-1 offset-md-3 offset-xl-4 p-3 pizzles-pizzaAdd-pizza">
            <img src="/images/pics/Pizza2.jpg" alt="Pizza" />
            <div className="text-center m-auto">
                <p className="mb-3">Margharita</p>
                <span className="pizzles-priceTag">11,50€</span>
            </div>
        </div>
        <p className="pizzles-subtitles my-4">Ajouter des ingrédients</p>
        <div className="col-6 col-md-4 col-xl-2 mb-4">
            <div className="pizzles-pizzaAdd-ingredient-cell disabled px-3 py-2">
                <img src="/images/pics/yellow_pepper.jpg" alt="Poivron" />
                <div className="text-center m-auto">
                    <p className="mb-2">Poivron</p>
                    <span className="pizzles-priceTag">0,50€</span>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2 mb-4">
            <div className="pizzles-pizzaAdd-ingredient-cell px-3 py-2">
                <img src="/images/pics/yellow_pepper.jpg" alt="Poivron" />
                <div className="text-center m-auto">
                    <p className="mb-2">Poivron</p>
                    <span className="pizzles-priceTag">0,50€</span>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2 mb-4">
            <div className="pizzles-pizzaAdd-ingredient-cell selected px-3 py-2">
                <img src="/images/pics/yellow_pepper.jpg" alt="Poivron" />
                <div className="text-center m-auto">
                    <p className="mb-2">Poivron</p>
                    <span className="pizzles-priceTag">0,50€</span>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2 mb-4">
            <div className="pizzles-pizzaAdd-ingredient-cell px-3 py-2">
                <img src="/images/pics/yellow_pepper.jpg" alt="Poivron" />
                <div className="text-center m-auto">
                    <p className="mb-2">Poivron</p>
                    <span className="pizzles-priceTag">0,50€</span>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2 mb-4">
            <div className="pizzles-pizzaAdd-ingredient-cell disabled px-3 py-2">
                <img src="/images/pics/yellow_pepper.jpg" alt="Poivron" />
                <div className="text-center m-auto">
                    <p className="mb-2">Poivron</p>
                    <span className="pizzles-priceTag">0,50€</span>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2 mb-4">
            <div className="pizzles-pizzaAdd-ingredient-cell px-3 py-2">
                <img src="/images/pics/yellow_pepper.jpg" alt="Poivron" />
                <div className="text-center m-auto">
                    <p className="mb-2">Poivron</p>
                    <span className="pizzles-priceTag">0,50€</span>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2 mb-4">
            <div className="pizzles-pizzaAdd-ingredient-cell px-3 py-2">
                <img src="/images/pics/yellow_pepper.jpg" alt="Poivron" />
                <div className="text-center m-auto">
                    <p className="mb-2">Poivron</p>
                    <span className="pizzles-priceTag">0,50€</span>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2 mb-4">
            <div className="pizzles-pizzaAdd-ingredient-cell px-3 py-2">
                <img src="/images/pics/yellow_pepper.jpg" alt="Poivron" />
                <div className="text-center m-auto">
                    <p className="mb-2">Poivron</p>
                    <span className="pizzles-priceTag">0,50€</span>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2 mb-4">
            <div className="pizzles-pizzaAdd-ingredient-cell px-3 py-2">
                <img src="/images/pics/yellow_pepper.jpg" alt="Poivron" />
                <div className="text-center m-auto">
                    <p className="mb-2">Poivron</p>
                    <span className="pizzles-priceTag">0,50€</span>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2 mb-4">
            <div className="pizzles-pizzaAdd-ingredient-cell px-3 py-2">
                <img src="/images/pics/yellow_pepper.jpg" alt="Poivron" />
                <div className="text-center m-auto">
                    <p className="mb-2">Poivron</p>
                    <span className="pizzles-priceTag">0,50€</span>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2 mb-4">
            <div className="pizzles-pizzaAdd-ingredient-cell px-3 py-2">
                <img src="/images/pics/yellow_pepper.jpg" alt="Poivron" />
                <div className="text-center m-auto">
                    <p className="mb-2">Poivron</p>
                    <span className="pizzles-priceTag">0,50€</span>
                </div>
            </div>
        </div>
        <div className="col-12 my-4">
            <h2 className="pizzles-txt-title pizzles-pizzaAdd-total m-auto text-center">Total de la pizza : <span>13,00€</span></h2>
        </div>
        <div className="col-12 my-3">
            <a href="#" className="pizzles-btn pizzles-btn-red">Ajouter au panier<i className="fas fa-cart-arrow-down"></i></a>
        </div>
    </div>
</div>
</>
     );
}
 
export default AddPizzaPage;