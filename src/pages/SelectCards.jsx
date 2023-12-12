import PokerCardCard from "../components/PokerCardCard"
import Obsidian from '../assets/cartasObsidianResized.png'
import RedDiamond from '../assets/cartasRedDiamondEliteResized.png'
import GoldenRoyal from '../assets/cartasGoldenRoyalResized.png'
import BlueDiamond from '../assets/cartasBlueDiamondResized.png'
import * as React from "react";
import { useState } from "react"


export default function SelectCards() {

    const [selected, setSelected] = useState(0)
    console.log(selected)

    const productos = [
        {
            id: 1,
            title: "Obsidian Stealth",
            img: Obsidian,
            url: "https://buy.stripe.com/cN28zZakXcm93mw4gj"
        },
        {
            id: 2,
            title: "Red Diamond Elite",
            img: RedDiamond,
            url: "https://buy.stripe.com/fZe3fFgJl5XL4qAaEG"
        },
        {
            id: 3,
            title: "Golden Royale",
            img: GoldenRoyal,
            url: "https://buy.stripe.com/fZe3fF2Svcm93mw3cd"
        },
        {
            id: 4,
            title: "Blue Diamond Elite",
            img: BlueDiamond,
            url: "https://buy.stripe.com/5kA2bBfFhfyl6yI8ww"
        }
    ]

    const cartas = productos.map((producto) => {
        return (<PokerCardCard id={producto.id} img={producto.img} title={producto.title} selected={selected==producto.id ? true : false} setSelected={setSelected} />)
    })

    function handleBuy() {
        console.log(productos)
        window.open(productos[selected-1].url)
    }

    return (
        <main className="flex w-5/6 flex-col items-center justify-center" > 
            <div className="w-full h-2/3 lg:h-1/3 flex flex-wrap lg:flex-row items-center justify-center ">
                {cartas}
            </div>
            <button disabled={selected == -1} className={selected > -1 || selected > 3 ? ' bg-white mt-10 lg:mt-20 h-12  text-black w-60 lg:h-16 lg:w-96 rounded-md' : 'bg-buttonDisabled cursor-not-allowed mt-10 lg:mt-20 h-12  text-black w-60 lg:h-16 lg:w-96 rounded-md'} onClick={handleBuy}>{selected >= 0 || selected <= 3 ? "Comprar por 14.99€" : "Seleccione un producto"}</button>
        </main>
    )
}