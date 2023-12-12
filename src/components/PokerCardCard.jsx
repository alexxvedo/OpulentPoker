import {motion} from "framer-motion"

export default function PokerCardCard(props) {
    


    function handleClickSelect() {
        props.setSelected(props.id)
    }

    function handleClickUnselect() {
        props.setSelected(-1)
    }

    return (
        !props.selected ? (
        <motion.div className="pt-2 w-5/12 h-1/2 items-center justify-center lg:w-1/6 lg:h-full" onClick={handleClickSelect}>
            <img className="w-full lg:w-full lg:h-5/6" src={props.img}/>
            <h2 lassName="m-0 lg:h-1/6">{props.title}</h2>
        </motion.div>)
        : (<motion.div className="pt-2 w-5/12 h-1/2 lg:w-1/6 lg:h-full border-white border-y-2 border-x-2 bg-selectCard items-center justify-center"  onClick={handleClickUnselect}>
        <img className="w-full lg:w-full lg:h-5/6" src={props.img}/>
        <h2 className="m-0 lg:h-1/6">{props.title}</h2>
        </motion.div>)
    )
}