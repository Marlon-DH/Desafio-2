
type CardProps = {
    srcc: string
    texto: string
    texto2: string
    hover: string
} 

function Card2 ({srcc, texto, texto2, hover}: CardProps) {
    

    return(
        <div className={` flex   mt-0 mr-10 ml-10 border border-gray-300 rounded-lg w-240 h-150 ${hover} hover:duration-100 `}>
            <div className="flex flex-col">
                <img src={srcc} className="max-h-70 mb-3 border rounded-lg"/>
                <h1 className="text-red-600 mb-1">{texto}</h1>
                <div className="flex flex-col basis-full text-start ml-7 text-[10px] ">
                <b className="mb-2">Information</b>
                <p className=" mb-3 w-55 self-start ">{texto2}</p>
            </div>
        </div>
        <div className="flex flex-col ">
            <h1>Sinopse</h1>
            <p>Tomoya Okazaki e Nagisa Furukawa se formaram no ensino médio e, juntos, vivenciam a montanha-russa emocional da adolescência. Incapaz de decidir qual rumo dar ao seu futuro, Tomoya aprende o valor de uma forte ética de trabalho e descobre a força do apoio de Nagisa. Através da dedicação e da união de propósitos do casal, eles seguem em frente para enfrentar seus problemas pessoais, aprofundar seus relacionamentos antigos e criar novos laços.
            <br />
            O tempo também avança no Mundo Ilusório. Conforme as planícies esfriam com a aproximação do inverno, a Garota Ilusória e a Boneca de Lixo se deparam com uma situação difícil que revela o verdadeiro propósito do Mundo.
            <br />
            [Escrito por MAL Rewrite]</p>
        </div>    
            
        </div>
    )
}

export default Card2