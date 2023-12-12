import * as React from "react";
import Logo from "../assets/logoFinal.png";

export default function Navbar() {
    return (
        <div className="flex justify-center items-center w-5/6 h-1/6 mt-4">
            
            <img className="w-20 h-20 lg:w-36 lg:h-36" src={Logo}/> 
            {/*
            <div className="hidden lg:flex items-center justify-center w-full flex-grow gap-20 lg:-ml-40">
                <a className="text-white font-bold md:text-xl no-underline" href="">Inicio</a>
                <a className="text-white font-bold md:text-xl no-underline" href="https://buy.stripe.com/test_00g8xgcczcsf8Ba144">Comprar</a>
                <a className="text-white font-bold md:text-xl no-underline" href="">Contactar</a>
            </div>
            */}
        </div>
    )
}
