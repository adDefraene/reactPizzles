import React from 'react';

const HomePageWork = () => {
    return ( 
    <section id="pizzlesWork" className="pb-5">
        <div className="container py-5">
            <div className="row my-4">
                <div className="col-12 my-3 mx-auto">
                    <h2 className="pizzles-title text-center my-4 mx-auto">Comment fonctionne-t-on ?</h2>
                    <p className="pizzles-txt-title text-center mx-auto mt-5 mb-5">Nous vendons uniquement des pizzas “à emporter”, à réserver sur ce même site.</p>
                </div>
                <div className="col-12 my-3 d-flex flex-column flex-sm-row">
                    <p className="pizzles-bigNumber text-start align-self-center my-3">1</p>
                    <p className="pizzles-txt-title align-self-center m-auto my-3">Se créer un compte</p>
                    <img src="/images/svg/Work_1.svg" className="m-auto my-3" alt="Création de compte" />
                </div>
                <div className="col-12 my-3 d-flex flex-column-reverse flex-sm-row">
                    <img src="/images/svg/Work_2.svg" className="m-auto my-3" alt="Choisir une pizza" />
                    <p className="pizzles-txt-title align-self-center m-auto my-3">Choisir ses pizzas</p>
                    <p className="pizzles-bigNumber text-end align-self-center my-3">2</p>
                </div>
                <div className="col-12 my-3 d-flex flex-column flex-sm-row">
                    <p className="pizzles-bigNumber text-start align-self-center my-3">3</p>
                    <p className="pizzles-txt-title align-self-center m-auto my-3">Y ajouter ses ingrédients supplémentaires</p>
                    <img src="/images/svg/Work_3.svg" className="m-auto my-3" alt="Choisir ses ingrédients supplémentaires" />
                </div>
                <hr className="my-5" />
                <div className="col-12 mt-3">
                    <p className="pizzles-txt-title text-center mx-auto my-5">Nous vous proposons 2 moyen de récupérer votre commande :</p>
                </div>
                <div className="col-12 col-md-5">
                    <div className="pizzles-delivery-box text-center p-3">
                        <p className="pizzles-txt-title">En livraison à domicile</p>
                        <img src="/images/logos/VESPA_PICTO.png" className="my-3" alt="Image de scooter" />
                        <p>Pour <b>3 € de frais supplémentaires</b>, nous livrons votre commande sur l'entièreté de la commune d'Ath</p>
                    </div>
                </div>
                <div className="col-12 col-md-2 d-flex justify-content-center">
                    <p className="pizzles-txt-title my-3 align-self-center">ou</p>
                </div>
                <div className="col-12 col-md-5">
                    <div className="pizzles-delivery-box text-center p-3">
                        <p className="pizzles-txt-title">Venir chercher sur place</p>
                        <img src="/images/logos/MAPPIN_PICTO.png" className="my-3" alt="Image de punaise de carte" />
                        <p>Vous pouvez venir chercher gratuitement votre commande à notre restaurant, situé près de la route nationale 7 à Ath</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 my-5">
                    <a href="#" className="pizzles-btn pizzles-btn-white mx-auto mb-3">Je veux passer commande !<i className="fas fa-receipt"></i></a>
                </div>
                <div className="col-12 col-md-6 my-5">
                    <a href="#pizzlesPlace" className="pizzles-btn pizzles-btn-white mx-auto mb-3">Quelle est votre adresse ?<i className="fas fa-search-location"></i></a>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default HomePageWork;