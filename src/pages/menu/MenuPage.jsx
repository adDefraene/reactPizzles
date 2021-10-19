import React, { useEffect, useState } from 'react';
import pizzasAPI from '../../services/pizzasAPI';
import MenuPizzaCell from '../../components/menu/MenuPizzaCell';

const MenuPage = () => {

    const [menuPizzas, setMenuPizzas] = useState([])
    
    const fetchMenuPizzas = async () => {
        try {
            const data = await pizzasAPI.findAll()
            setMenuPizzas(data)
        }
        catch (error) {
            console.error(error.response)
        }
    }
    
    useEffect(()=>{
        fetchMenuPizzas()
    }, [])

    console.log(menuPizzas)

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
                <div className="row my-4">
                    {menuPizzas.map(menuPizza => {
                        if(menuPizza.type === "PROMO"){
                            return (<MenuPizzaCell name={menuPizza.name} price={menuPizza.price} image={menuPizza.image} slug={menuPizza.slug} type={menuPizza.type} />)
                        }else{
                            return ""
                        }
                    })}
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 order-1 order-lg-2 offset-3 offset-lg-2 offset-md-4">
                <p className="my-5 pizzles-subtitles text-center">Pizza du mois</p>
                <div className="row my-4">
                    {menuPizzas.map(menuPizza => {
                        if(menuPizza.type === "POTM")
                            return  <MenuPizzaCell
                                        name={menuPizza.name}
                                        price={menuPizza.price}
                                        image={menuPizza.image}
                                        slug={menuPizza.slug}
                                        type={menuPizza.type}
                                    />
                        return ""
                    })}
                </div>
            </div>
            <div className="col-12 order-3">
            <p className="my-5 pizzles-subtitles text-center">Reste du menu</p>
                <div className="row gy-4">
                    {menuPizzas.map(menuPizza => {
                        if(menuPizza.type === "CLASSIC")
                            return  <MenuPizzaCell
                                        name={menuPizza.name}
                                        price={menuPizza.price}
                                        image={menuPizza.image}
                                        slug={menuPizza.slug}
                                        type={menuPizza.type}
                                    />
                        return ""
                    })}
                </div>
            </div>
        </div>
    </section>
</>
     );
}
 
export default MenuPage;