import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Clicker.css"

export default function Clicker (){

    //[nazev_promenne, nazev setteru] = useState(vychozi_hotnota);
    const [cookies, setCookies]= useState (2315999);
    
    //setter - funkce ktera prenastavuje promennou 

    const increaseCookies = ()=>{
        setCookies(cookies + 1);
    }

    useEffect(() => {
        document.title = "Cookie clicker loaded";
    }, []);//kdyz [] prazdne - funkce se spusti kdyz se stranka nacte

    useEffect(()=>{
        document.title = cookies;
    }, [cookies]);//kdyz se hodnoty v [] zmeni, zavola se funkce 

    return(
        <>
            <h1>Clicker</h1>
            <button onClick={increaseCookies} className="clicker-button">Click me</button>
            <p>Cookies: {cookies}</p>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )
}