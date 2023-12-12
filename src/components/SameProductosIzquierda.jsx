import { motion } from 'framer-motion'


export default function Productos (props) {
    return (
        <div className="h-full w-5/6 m-0 flex flex-col lg:flex-row items-center justify-center ">
            <motion.img className='w-5/6 lg:w-1/2 h-full' src={props.img} alt="" initial={{x:-500}} animate={{x:0}} transition={{duration: 2}} viewport={{once: true}}/>
            <div className='w-full lg:w-1/2 min-w-min h-auto'>
                <h1 className='w-full h-auto text-3xl font-bold mb-4 productos-info-title'>{props.title}</h1>
                <p className='w-full h-auto text-xs lg:text-base  '>{props.description}</p>
            </div>
        </div>
    )
}
