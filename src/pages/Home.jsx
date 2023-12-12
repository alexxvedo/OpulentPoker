
import '../App.css'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Separator from '../components/Separator'
import ProductosIzquierda from '../components/ProductosIzquierda'
import ProductosDerecha from '../components/ProductosDerecha'
import SameProductosIzquierda from '../components/SameProductosIzquierda'


import Footer from '../components/Footer'

import Obsidian from '../assets/cartasObsidianResized.png'
import RedDiamond from '../assets/cartasRedDiamondEliteResized.png'
import GoldenRoyal from '../assets/cartasGoldenRoyalResized.png'
import BlueDiamond from '../assets/cartasBlueDiamondResized.png'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"


function App() {

    const [big, setBig] = useState(window.innerWidth>1024);
  
    function openStripe() {
        console.log("Open");
    }

    useEffect(() => {
        // Función para actualizar el estado con el ancho actual de la ventana
        const handleResize = () => {
            if(window.innerWidth > 1024) setBig(true);
            else setBig(false)
        }

        // Añadir el event listener
        window.addEventListener('resize', handleResize);

        // Limpiar el event listener al desmontar el componente
        return () => window.removeEventListener('resize', handleResize);
    }, []); // El array vacío asegura que el efecto se ejecute sólo al montar y desmontar


    const productos = [
      {
          id: 1,
          title: "Obsidian Stealth",
          img: Obsidian,
          description: "Redefine el arte de la discreción y el estilo en el juego. Creado para jugadores que valoran la sutileza, este mazo de color negro absoluto se destaca en cualquier situación. Su acabado resistente garantiza un manejo fácil y un deslizamiento óptimo, mientras que su diseño minimalista e innovador destaca por su elegancia."
      },
      {
          id: 2,
          title: "Red Diamond Elite",
          img: RedDiamond,
          description: "Lleva el juego a un nivel completamente nuevo. Creadas para aquellos con un gusto impecable y una pasión por la excelencia, estas cartas representan el pináculo del diseño y la funcionalidad. Su acabado de alta calidad asegura un deslizamiento perfecto en cualquier situación de juego, mientras que su estética moderna y elegante es reminiscente de la profundidad y el brillo del diamante rojo."

      },
      {
          id: 3,
          title: "Golden Royal",
          img: GoldenRoyal,
          description: "El Golden Royale Poker Deck es sinónimo de lujo y elegancia. Diseñado para los jugadores que no se conforman con menos, este mazo lleva tu juego al siguiente nivel. Su durabilidad anti-desgaste asegura un deslizamiento perfecto en cada mano, mientras que su diseño dorado y refinado simboliza la excelencia y la grandeza."

      },
      {
          id: 4,
          title: "Blue Diamond Elite",
          img: BlueDiamond,
          description: "Redefine lo que significa jugar con calidad. Diseñadas para aquellos que buscan rendimiento y estilo, estas cartas están a la altura de cualquier desafío en la mesa de juego. Su acabado resistente garantiza un manejo suave en cualquier circunstancia, mientras que el diseño nítido y contemporáneo evoca la precisión y el valor del diamante azul."
      }
  ]

  


  return (
    <main className=' w-full h-full items-center flex flex-initial flex-col bg-background z-0 overflow-x-hidden'>
      <Navbar />
      <Content />
      <Separator content='Modelos'/>
      {
      big ? (
        <>
        <ProductosIzquierda img={Obsidian} title={productos[0].title} description={productos[0].description}/>
        <ProductosDerecha img={RedDiamond}  title={productos[1].title} description={productos[1].description}/>
        <ProductosIzquierda img={GoldenRoyal}  title={productos[2].title} description={productos[2].description}/>
        <ProductosDerecha img={BlueDiamond}  title={productos[3].title} description={productos[3].description}/>
        </>
      ) : (
        <>
        <SameProductosIzquierda img={Obsidian}  title={productos[0].title} description={productos[0].description}/>
        <SameProductosIzquierda img={RedDiamond}  title={productos[1].title} description={productos[1].description}/>
        <SameProductosIzquierda img={GoldenRoyal}  title={productos[2].title} description={productos[2].description}/>
        <SameProductosIzquierda img={BlueDiamond}  title={productos[3].title} description={productos[3].description}/>
        </>
      )}
      <Link to="/products"><button className='mt-12 bg-white text-black w-60 h-1/2 lg:w-96 rounded-md' onClick={() => {}} >Comprar</button></Link>
      <Footer/>
     </main>
    
  )
}

export default App
