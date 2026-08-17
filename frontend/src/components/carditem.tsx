import Button from "./button"

type CardProps = {
    srcc: string
    texto: string
    texto2: string
} 


function Card({srcc, texto, texto2}: CardProps) {
    return(
        <div className=" flex justify-center flex-col mt-20 mr-10 ml-10 border border-gray-300 rounded-lg w-70 h-100">
            <img src={srcc} className="w-70 h-70 mb-3 border rounded-xs"/>
            <h1 className="text-red-600 mb-1">{texto}</h1>
            <p className=" mb-3 w-55 self-center ">{texto2}</p>
            <Button
                texto="Ver Mais" 
                cor="bg-blue-500"
                hover="hover:bg-blue-400"
            ></Button>
        </div>
    )
}

export default Card