import React from 'react';

const ProfilePage = () => {
    return ( 
<>
<div class="container pizzles-first-container">
    <h3 class="pizzles-end-title text-center mx-auto my-3">Bonjour Adrien !</h3>
    <h3 class="pizzles-end-title text-center mx-auto my-3">Bienvenue sur votre profil</h3>
    <a href="/logoff" class="pizzles-btn pizzles-btn-disconnect mx-auto my-5">Me déconnecter<i class="fas fa-power-off"></i></a>
    <ul class="nav nav-tabs nav-fill flex-column flex-sm-row justify-content-center mt-5" id="myProfileMenu" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" type="button" id="lastOrders-tab" data-bs-toggle="tab" data-bs-target="#lastOrders" role="tab" aria-controls="latestOrders" aria-selected="true">Mes commandes en cours<i class="fas fa-clipboard-check"></i></button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" type="button" id="olderOrders-tab" data-bs-toggle="tab" data-bs-target="#olderOrders" role="tab" aria-controls="olderOrders" aria-selected="false">Mes anciennes commandes<i class="fas fa-clipboard-list"></i></button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" type="button" id="userReviews-tab" data-bs-toggle="tab" data-bs-target="#userReviews" role="tab" aria-controls="userReviews" aria-selected="false">Mes évaluations<i class="fas fa-tasks"></i></button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" type="button" id="userInformations-tab" data-bs-toggle="tab" data-bs-target="#userInformations" role="tab" aria-controls="userInformations" aria-selected="false">Mes informations<i class="fas fa-user-tag"></i></button>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane fade show active" role="tabpanel" id="lastOrders" aria-labelledby="lastOrders-tab">
            <div class="col-12">
                <h2 class="pizzles-title text-center mx-auto my-5">Mes commandes en cours</h2>
                <div class="row">
                    <div class="col-12">
                        <div class="row pizzles-summaryOrder-box p-3">
                            <div class="col-12 text-center my-3 pizzles-summaryOrder-numOrder">Commande #00194 - 31 février 2021</div>
                            <div class="col-12 pizzles-summaryOrder-items my-2 px-4">
                                Margherita + Aucun ingrédient supplémentaires
                            </div>
                            <div class="col-12 pizzles-summaryOrder-items my-2 px-4">
                                Margherita + Poivron + Pepperonnis
                            </div>
                            <div class="col-12 col-md-6 my-4">
                                <div class="pizzles-summaryOrder-delivery px-4">
                                    Livré chez vous à 19 H 30
                                </div>
                            </div>
                            <div class="col-12 col-md-6 my-4">
                                <div class="pizzles-summaryOrder-total px-4">
                                    TOTAL : 27,50 €
                                </div>
                            </div>
                            <p class="col-12 text-center pizzles-summaryOrder-state my-3">Commande en préparation !</p>
                            <div class="col-12 pizzles-summaryOrder-evolution my-2 px-5">
                                <div class="pizzles-summaryOrder-evolution-ball pizzles-evolution-done"></div>
                                <div class="pizzles-summaryOrder-evolution-line pizzles-evolution-done"></div>
                                <div class="pizzles-summaryOrder-evolution-ball pizzles-evolution-done"></div>
                                <div class="pizzles-summaryOrder-evolution-line"></div>
                                <div class="pizzles-summaryOrder-evolution-ball"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" role="tabpanel" id="olderOrders" aria-labelledby="olderOrders-tab">
            <h2 class="pizzles-title text-center mx-auto my-5">Mes anciennes commandes</h2>
            <div class="row">
                <div class="col-12 col-md-10 offset-md-1 my-3">
                    <div class="row pizzles-summaryOrder-box p-3">
                        <div class="col-12 text-center my-3 pizzles-summaryOrder-numOrder">Commande #00194 - 31 février 2021</div>
                        <div class="col-12 pizzles-summaryOrder-items my-2 px-4">
                            Margherita + Aucun ingrédient supplémentaires
                        </div>
                        <div class="col-12 pizzles-summaryOrder-items my-2 px-4">
                            Margherita + Poivron + Pepperonnis
                        </div>
                        <div class="col-12 col-md-6 my-4">
                            <div class="pizzles-summaryOrder-delivery px-4">
                                Livré chez vous à 19 H 30
                            </div>
                        </div>
                        <div class="col-12 col-md-6 my-4">
                            <div class="pizzles-summaryOrder-total px-4">
                                TOTAL : 27,50 €
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-10 offset-md-1 my-3">
                    <div class="row pizzles-summaryOrder-box p-3">
                        <div class="col-12 text-center my-3 pizzles-summaryOrder-numOrder">Commande #00194 - 31 février 2021</div>
                        <div class="col-12 pizzles-summaryOrder-items my-2 px-4">
                            Margherita + Aucun ingrédient supplémentaires
                        </div>
                        <div class="col-12 pizzles-summaryOrder-items my-2 px-4">
                            Margherita + Poivron + Pepperonnis
                        </div>
                        <div class="col-12 col-md-6 my-4">
                            <div class="pizzles-summaryOrder-delivery px-4">
                                Livré chez vous à 19 H 30
                            </div>
                        </div>
                        <div class="col-12 col-md-6 my-4">
                            <div class="pizzles-summaryOrder-total px-4">
                                TOTAL : 27,50 €
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-10 offset-md-1 my-3">
                    <div class="row pizzles-summaryOrder-box p-3">
                        <div class="col-12 text-center my-3 pizzles-summaryOrder-numOrder">Commande #00194 - 31 février 2021</div>
                        <div class="col-12 pizzles-summaryOrder-items my-2 px-4">
                            Margherita + Aucun ingrédient supplémentaires
                        </div>
                        <div class="col-12 pizzles-summaryOrder-items my-2 px-4">
                            Margherita + Poivron + Pepperonnis
                        </div>
                        <div class="col-12 col-md-6 my-4">
                            <div class="pizzles-summaryOrder-delivery px-4">
                                Livré chez vous à 19 H 30
                            </div>
                        </div>
                        <div class="col-12 col-md-6 my-4">
                            <div class="pizzles-summaryOrder-total px-4">
                                TOTAL : 27,50 €
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" role="tabpanel" id="userReviews" aria-labelledby="userReviews-tab">
            <h2 class="pizzles-title text-center mx-auto my-5">Mes évaluations</h2>
            <div class="row">
                <div class="col-12 col-lg-6 my-3 px-4">
                    <div class="pizzles-review-box p-2 row">
                        <div class="col-12 text-center mt-2 mb-5 pizzles-review-numOrder">Commande #00175</div>
                        <div class="col-12 col-sm-6 my-3 pizzles-review-dateOrder text-center"><b>30 février 2021 19 H 30</b></div>
                        <div class="col-12 col-sm-6 my-3">
                            <a href="/profile/review" class="pizzles-btn pizzles-btn-yellow">Évaluer<i class="fas fa-tasks"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 my-3 px-4">
                    <div class="pizzles-review-box p-2 row">
                        <div class="col-12 text-center mt-2 mb-5 pizzles-review-numOrder">Commande #00124</div>
                        <div class="col-12 col-md-6 pizzles-review-dateOrder text-center"><b>30 février 2021 19 H 30</b></div>
                        <div class="col-12 col-md-6 my-3">
                            <div class="review-box-stars stars">
                                <input type="radio" disabled value="10" />
                                <input type="radio" disabled value="9" />
                                <input type="radio" disabled checked value="8" />
                                <input type="radio" disabled value="7" />
                                <input type="radio" disabled value="6" />
                                <input type="radio" disabled value="5" />
                                <input type="radio" disabled value="4" />
                                <input type="radio" disabled value="3" />
                                <input type="radio" disabled value="2" />
                                <input type="radio" disabled value="1" />
                            </div>
                        </div>
                        <br class="mb-2" />
                        <div class="col-12 my-3 text-center">
                            <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eveniet, saepe voluptate iure cum quis."</p>
                        </div>
                        <div class="col-4 col-md-6 my-2 text-center stars-text">SERVICE</div>
                        <div class="col-8 col-md-6 my-2 stars">
                            <input type="radio" disabled value="10" />
                            <input type="radio" disabled checked value="9" />
                            <input type="radio" disabled value="8" />
                            <input type="radio" disabled value="7" />
                            <input type="radio" disabled value="6" />
                            <input type="radio" disabled value="5" />
                            <input type="radio" disabled value="4" />
                            <input type="radio" disabled value="3" />
                            <input type="radio" disabled value="2" />
                            <input type="radio" disabled value="1" />
                        </div>
                        <div class="col-4 col-md-6 my-2 text-center stars-text">QUALITÉ</div>
                        <div class="col-8 col-md-6 my-2 stars">
                            <input type="radio" disabled value="10" />
                            <input type="radio" disabled value="9" />
                            <input type="radio" disabled value="8" />
                            <input type="radio" disabled checked value="7" />
                            <input type="radio" disabled value="6" />
                            <input type="radio" disabled value="5" />
                            <input type="radio" disabled value="4" />
                            <input type="radio" disabled value="3" />
                            <input type="radio" disabled value="2" />
                            <input type="radio" disabled value="1" />
                        </div>
                        <div class="col-4 col-md-6 my-2 text-center stars-text">PONCTUALITÉ</div>
                        <div class="col-8 col-md-6 my-2 stars">
                            <input type="radio" disabled value="10" />
                            <input type="radio" disabled value="9" />
                            <input type="radio" disabled checked value="8" />
                            <input type="radio" disabled value="7" />
                            <input type="radio" disabled value="6" />
                            <input type="radio" disabled value="5" />
                            <input type="radio" disabled value="4" />
                            <input type="radio" disabled value="3" />
                            <input type="radio" disabled value="2" />
                            <input type="radio" disabled value="1" />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 my-3 px-4">
                    <div class="pizzles-review-box p-2 row">
                        <div class="col-12 text-center mt-2 mb-5 pizzles-review-numOrder">Commande #00175</div>
                        <div class="col-12 col-sm-6 my-3 pizzles-review-dateOrder text-center"><b>30 février 2021 19 H 30</b></div>
                        <div class="col-12 col-sm-6 my-3">
                            <a href="/profile/review" class="pizzles-btn pizzles-btn-yellow">Évaluer<i class="fas fa-tasks"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" role="tabpanel" id="userInformations" aria-labelledby="userInformations-tab">
            <h2 class="pizzles-title text-center mx-auto my-5">Mes informations</h2>
            <div class="row">
                <div class="col-12 col-md-10 offset-md-1 pizzles-register-box my-3 py-4 px-5">
                    <form action="#" class="row">
                        <div class="col-12 col-md-6">
                            <label for="updateName" class="form-label">Mon nom</label>
                            <input type="text" class="form-control mb-4" id="updateName" name="updateName" value="Defraene" required />
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="updateSurname" class="form-label">Mon prénom</label>
                            <input type="text" class="form-control mb-4" id="updateSurname" name="updateSurname" value="Adrien" required />
                        </div>
                        <div class="col-12">
                            <label for="updateEmail" class="form-label">Mon adresse mail</label>
                            <input type="email" class="form-control mb-4" id="updateEmail" name="updateEmail" aria-describedby="emailHelp" value="adriendefraene@gmail.com" required />
                        </div>
                        <div class="col-12">
                            <label for="updateAddress" class="form-label">Mon adresse de livraison</label>
                            <input type="text" class="form-control mb-4" id="updateAddress" name="updateAddress" value="Rue de la Ste Glinglin 404, 7800 Ath" required />
                        </div>
                        <button type="submit" class="pizzles-btn pizzles-btn-yellow">Modifier mes données<i class="fas fa-user-edit"></i></button>
                    </form>
                </div>
                <br />
                <a href="/profile/password-update" class="pizzles-btn pizzles-btn-white mx-auto mt-5">Je souhaite modifier mon mot de passe<i class="fas fa-edit"></i></a>
            </div>
        </div>
    </div>
</div>
</>
     );
}
 
export default ProfilePage;