import Button from "./button"
import type { ReactNode } from "react"

type CardProps = {
    srcc: string
    name: string
    texto2: ReactNode
    texto3: ReactNode
    hover: string
    nota: string
    ranked: string
    popularity: string
    members: string
    click: string
} 

function Card2 ({srcc, name, texto2, texto3, hover, nota, ranked, popularity, members, click}: CardProps) {
    

    return(
        <div className={`flex mr-10 ml-10 border border-gray-300 rounded-lg w-240  mt-5 ${hover} hover:duration-100 `}>
            <div className="flex flex-col">
                <img src={srcc} className="max-h-70 mb-3 border rounded-lg"/>
                <h1 className="text-red-600 mb-1">{name}</h1>
                <div className="flex flex-col basis-full text-start ml-7 text-[10px] ">
                <b className="mb-2">Information</b>
                <p className=" mb-3 w-55 self-start ">{texto2}</p>
            </div>
        </div>
        <div className="flex flex-col ">
            <div className=" flex w-160 h-20 bg-blue-100 self-center mt-2 border rounded-2xl border-amber-50">
                <div className="mt-1.5 flex flex-col ">   
                    <p className="font-extrabold">Nota</p> 
                    <b className="font-extrabold ml-6 text-[30px]">{nota}✨</b>   
                </div>
                <div className="ml-3 flex flex-col">
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                </div>
                <div className="p-6.5 flex ">
                    <p className="">Ranked {ranked}</p>
                    <p className=" ml-4 mr-4">Popularity {popularity}</p>
                    <p className=" ">Members {members}</p>
                </div>
            </div> 
            <b className="mt-3">Sinopse</b>
            <p className="p-6 pt-0 text-start">{texto3}</p>
            <div className="mt-auto self-end">
                <Button
                texto="Ver Mais"
                cor="bg-blue-800"
                hover="hover:bg-blue-500"
                tamanho="w-50"
                click={() => window.open(click, "_blank", "noopener,noreferrer")}
                ></Button>
            </div>
        </div>    
          
        </div>
    )
}

export default Card2