
type CardProps = {
    srcc: string
    texto: string
    texto2: string
} 


function Card({srcc, texto, texto2}: CardProps) {
    return(
        <div className="flex justify-center flex-col">
            <img src={srcc} className="w-40 h-40"/>
            <h1>{texto}</h1>
            <p>{texto2}</p>
        </div>
    )
}

export default Card