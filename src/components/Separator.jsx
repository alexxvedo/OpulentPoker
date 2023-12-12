
export default function Separator(props) {
    return (
        <div className="w-full h-32 flex items-center justify-center bg-background border-y-2 border-y-white ">
            <h2 className="h-full font-bold mt-4">{props.content}</h2>
        </div>
    )
}