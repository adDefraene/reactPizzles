import React, { useEffect, useState } from 'react';
import pizzasAPI from '../../services/pizzasAPI';
import ingredientsAPI from '../../services/ingredientsAPI';
import Pagination from '../../components/main/Pagination';
import MenuPizzaCell from '../../components/menu/MenuPizzaCell';
import { toast } from 'react-toastify';

/**
 * The menu where are displayed all of the ingredients and the pizzas
 * @returns html
 */
const MenuPage = (props) => {

    // Var of the ingredients
    const [menuIngredients, setMenuIngredients] = useState([])
    // Var of the current page for the ingredients pages
    const [currentPage, setCurrentPage] = useState(1)
    
    // Method that retrieves all of the ingredients
    const fetchMenuIngredients = async () => {
        try {
            const data = await ingredientsAPI.findAll()
            setMenuIngredients(data)
        }
        catch (error) {
            console.error(error.response)
        }
    }

    // When a page changes, update the value of the current page
    const handlePageChange = page => {
        setCurrentPage(page)
    }
    
//----------------------

    // Var of the pizzas
    const [menuPizzas, setMenuPizzas] = useState([])
    
    // Method that retrieves all of the pizzas
    const fetchMenuPizzas = async () => {
        try {
            const data = await pizzasAPI.findAll()
            setMenuPizzas(data)
        }
        catch (error) {
            console.error(error.response)
        }
    }
    
//----------------------

    // On load, do the fetches methods
    useEffect(()=>{
        fetchMenuIngredients()
        fetchMenuPizzas()
    }, [])

    // Our fixed number of ingrdients per page
    const itemsPerPage = 6

    // Displays the elements of the current page
    const paginatedIngredients = Pagination.getData(menuIngredients, currentPage, itemsPerPage)

    //----------------------
    
    // Method that verifies if the props.history is a redirect
    const checkIfRedirected = () => {
        if(props.history.action === "REPLACE"){
            // If so, throw a toast that says there is an error with the cart
            toast.error("Votre panier est vide ou vos choix de livraison sont incorrects !")
        }
    }

    // When the props.history changes
    useEffect(()=>{
        checkIfRedirected()
    }, [props.history])

    //----------------------

    // Method that check the path of the page in order to colour the correct nav cell
    const checkPath = () => {
        let path = props.match.path
        //console.log(path)
        if(path === "/menu"){
            document.querySelector(".pizzles-nav-selectedPage").classList.remove("pizzles-nav-selectedPage")
            document.querySelector("#pizzles-nav-menu").classList.add("pizzles-nav-selectedPage")
        }
    }

    // When the path changes
    useEffect(()=>{
        checkPath()
    }, [props.match])

    return (
<>
    <section className="container pizzles-first-container pizzles-menu">
        <div className="pizzles-head-title text-center">
            <h1><strong>Notre menu</strong></h1>
        </div>
    {/* INGREDIENTS */}
        <h2 className="pizzles-title text-center mx-auto my-5">Nos ingrédients</h2>
        <p className="pizzles-txt-title text-center mx-auto mt-2 mb-5">Le prix de l’ingrédient vaut ce qui sera ajouté au tarif de base de la pizza sélectionnée</p>
        <div className="row">
            <div className="col-10 offset-1 pizzles-menu-ingredients-carousel">
                <div className="row">
                    {/* The paginated ingredients */}
                    {paginatedIngredients.map(ingredient => (
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 my-2">
                            <div className="pizzles-menu-ingredients-cell text-center">
                                <img src={`http://api.pizzles.adriendefraene.be/images/${ingredient.image}`} alt={ingredient.name} className="mt-2" />
                                <p className="pizzles-menu-cell-name my-auto">{ingredient.name}</p>
                                <p className="pizzles-priceTag my-auto">{ingredient.price.toLocaleString()}€</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-12 mt-3">
                {/* The nav pagination */}
                <Pagination
                    key={`myPagination_${currentPage}`}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    length={menuIngredients.length}
                    onPageChanged={handlePageChange}
                />
            </div>
        </div>
        
    {/* PIZZAS */}
        <h2 className="pizzles-title text-center mx-auto my-5">Nos pizzas</h2>
        <div className="row">
            <div className="col-12 order-2 order-lg-1 col-lg-6 offset-lg-1">
                <p className="my-5 pizzles-subtitles text-center">Promotions de la semaine</p>
                <div className="row my-4">
                {/* Displays the pizzas in discount */}
                    {menuPizzas.map(menuPizza => {
                        if(menuPizza.type === "PROMO"){
                            return (<MenuPizzaCell 
                                key={`p_cell_${menuPizza.id}`} name={menuPizza.name} price={menuPizza.price} image={menuPizza.image} slug={menuPizza.slug} type={menuPizza.type} />)
                        }else{
                            return ""
                        }
                    })}
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 order-1 order-lg-2 offset-3 offset-lg-2 offset-md-4">
                <p className="my-5 pizzles-subtitles text-center">Pizza du mois</p>
                {/* Displays the pizza of the month */}
                <div className="row my-4">
                    {menuPizzas.map(menuPizza => {
                        if(menuPizza.type === "POTM")
                            return  <MenuPizzaCell
                                        key={`p_cell_${menuPizza.id}`}
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
                {/* Displays the regular pizzas */}
                    {menuPizzas.map(menuPizza => {
                        if(menuPizza.type === "CLASSIC")
                            return  <MenuPizzaCell
                                        key={`p_cell_${menuPizza.id}`}
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