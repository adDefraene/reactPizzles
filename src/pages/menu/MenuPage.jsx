import React from 'react';

const MenuPage = () => {
    return (
<>
    <section className="container pizzles-first-container pizzles-menu">
        <div className="pizzles-head-title text-center">
            <h1><strong>Notre menu</strong></h1>
        </div>
        <h2 className="pizzles-title text-center mx-auto my-5">Nos ingrédients</h2>
        <p className="pizzles-txt-title text-center mx-auto mt-2 mb-5">Le prix de l’ingrédient vaut ce qui sera ajouté au tarif de base de la pizza sélectionnée</p>
        <div className="row">
            <div className="col-1 pizzles-menu-ingredients-arrow d-flex owl-prev">
                <i className="fas fa-arrow-left m-auto"></i>
            </div>
            <div className="col-10 pizzles-menu-ingredients-carousel">
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 my-2">
                        <div className="pizzles-menu-ingredients-cell text-center">
                            <img src="/images/pics/yellow_pepper.jpg" className="mt-2" alt="Poivrons"/>
                            <p className="pizzles-menu-cell-name my-auto">Poivrons</p>
                            <p className="pizzles-priceTag my-auto">0,50€</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 my-2">
                        <div className="pizzles-menu-ingredients-cell text-center">
                            <img src="/images/pics/yellow_pepper.jpg" className="mt-2" alt="Poivrons"/>
                            <p className="pizzles-menu-cell-name my-auto">Poivrons</p>
                            <p className="pizzles-priceTag my-auto">0,50€</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 my-2">
                        <div className="pizzles-menu-ingredients-cell text-center">
                            <img src="/images/pics/yellow_pepper.jpg" className="mt-2" alt="Poivrons"/>
                            <p className="pizzles-menu-cell-name my-auto">Poivrons</p>
                            <p className="pizzles-priceTag my-auto">0,50€</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 my-2">
                        <div className="pizzles-menu-ingredients-cell text-center">
                            <img src="/images/pics/yellow_pepper.jpg" className="mt-2" alt="Poivrons"/>
                            <p className="pizzles-menu-cell-name my-auto">Poivrons</p>
                            <p className="pizzles-priceTag my-auto">0,50€</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 my-2">
                        <div className="pizzles-menu-ingredients-cell text-center">
                            <img src="/images/pics/yellow_pepper.jpg" className="mt-2" alt="Poivrons"/>
                            <p className="pizzles-menu-cell-name my-auto">Poivrons</p>
                            <p className="pizzles-priceTag my-auto">0,50€</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 my-2">
                        <div className="pizzles-menu-ingredients-cell text-center">
                            <img src="/images/pics/yellow_pepper.jpg" className="mt-2" alt="Poivrons"/>
                            <p className="pizzles-menu-cell-name my-auto">Poivrons</p>
                            <p className="pizzles-priceTag my-auto">0,50€</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1 pizzles-menu-ingredients-arrow d-flex owl-next">
                <i className="fas fa-arrow-right m-auto"></i>
            </div>
        </div>
        <h2 className="pizzles-title text-center mx-auto my-5">Nos pizzas</h2>
        <div className="row">
            <div className="col-12 order-2 order-lg-1 col-lg-6 offset-lg-1">
                <p className="my-5 pizzles-subtitles text-center">Promotions de la semaine</p>
                <div className="row gy-4">
                    <div className="col-6 col-md-4">
                        <div className="p-2 pizzles-menu-pizzas-cell text-center pizzles-menu-pizzas-promos">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="p-2 pizzles-menu-pizzas-cell text-center pizzles-menu-pizzas-promos">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a></div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="p-2 pizzles-menu-pizzas-cell text-center pizzles-menu-pizzas-promos">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a></div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 order-1 order-lg-2 offset-3 offset-lg-2 offset-md-4">
                <p className="my-5 pizzles-subtitles text-center">Pizza du mois</p>
                <div className="p-2 pizzles-menu-pizzas-cell text-center pizzles-menu-pizzas-pdm">
                    <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                    <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                    <p className="pizzles-priceTag my-auto">11,50€</p>
                    <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                </div>
            </div>
            <div className="col-12 order-3">
            <p className="my-5 pizzles-subtitles text-center">Reste du menu</p>
                <div className="row gy-4">
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="p-2 pizzles-menu-pizzas-cell text-center">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="p-2  pizzles-menu-pizzas-cell text-center">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="p-2  pizzles-menu-pizzas-cell text-center">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="p-2  pizzles-menu-pizzas-cell text-center">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="p-2  pizzles-menu-pizzas-cell text-center">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="p-2  pizzles-menu-pizzas-cell text-center">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="p-2  pizzles-menu-pizzas-cell text-center">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="p-2  pizzles-menu-pizzas-cell text-center">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="p-2  pizzles-menu-pizzas-cell text-center">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="p-2  pizzles-menu-pizzas-cell text-center">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="p-2  pizzles-menu-pizzas-cell text-center">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="p-2  pizzles-menu-pizzas-cell text-center">
                            <img src="/images/pics/Pizza2.jpg" alt="Pizza"/>
                            <a href="/pizza" className="pizzles-menu-cell-name my-auto">Margharita</a>
                            <p className="pizzles-priceTag my-auto">11,50€</p>
                            <a href="/addpizza" className="pizzles-menu-cell-add  mt-auto">+</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
     );
}
 
export default MenuPage;