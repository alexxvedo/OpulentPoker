import waterproofcard from '../assets/waterproofcardResized.png'
import { motion } from 'framer-motion'
import Button from "react"
import { Link } from 'react-router-dom'




export default function Content () {
    function openStripe() {
        window.open('https://buy.stripe.com/test_00g8xgcczcsf8Ba144')
    }
    
    return (
        <div className="w-full h-5/6 mb-8 mt-8 flex flex-col lg:flex-row items-center justify-between lg:-mt-20 lg:mb-0 lg:overflow-hidden">
            <div className="w-full flex gap-8 flex-col items-center justify-center text-center lg:gap-5 text-ellipsis lg:ml-32 lg:w-1/2  ">
                <h1 className="text-3xl main-title">Bienvenido a la nueva era de las cartas de juego</h1>
                <h5 className='text-sm w-2/3'>Diseño sofisticado y calidad que se siente en cada carta, estamos redefiniendo lo que significa jugar. </h5>
                <p className="w-4/6 text-xs font-bold italic">Juega con estilo. Impresiona en cada mano.</p>
                <Link to="/products"><button className='main-button mb-8' onClick={() => {}}>Comprar</button></Link>
            </div>
            <motion.div className="hidden lg:flex w-1/2 justify-end h-full items-end -z-10" >
                <motion.img className="w-full h-full" animate={{ scale:1.1 }}  transition={{ delay: 0.5, duration: 2 }} src={waterproofcard} alt=""/>
            </motion.div>
            
        </div>
    )
}
