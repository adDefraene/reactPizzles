import React, {useEffect} from 'react';

const CookiesDisplay = () => {

    console.log(document.querySelector(".pizzles-cookies-box"))

    const hideCookiesBoxDisplay = () => {
        document.querySelector(".pizzles-cookies-box").classList.add("pizzles-cookies-undisplayed")
    }

    const showCookiesBoxDisplay = () => {
        document.querySelector(".pizzles-cookies-box").classList.remove("pizzles-cookies-undisplayed")
    }

    const handleClick = (event) => {
        event.preventDefault()
        hideCookiesBoxDisplay();
    }

    useEffect(()=>{
        setTimeout(showCookiesBoxDisplay, 4000)
    }, [])

    return ( 
        <>
            <div className="pizzles-cookies-box pizzles-cookies-undisplayed row flex-column justify-content-center p-4">
                <b className="my-3 text-center">Nous, ce sont les cookies !</b>
                <p className="text-center">
                    <i className="fas fa-cookie ml-4"></i><i className="fas fa-cookie-bite ml-1"></i>
                </p>
                <p>Ce site emploie évidemment des cookies, mais uniquement fonctionnel.<br /><br />En continuant votre navigation, vous les acceptez automatiquement.</p>
                <a href="#" onClick={handleClick} className="pizzles-btn pizzles-btn-white align-self-center">Ok !<i className="fas fa-grin-wink"></i></a>
            </div>
        </>
     );
}
 
export default CookiesDisplay;