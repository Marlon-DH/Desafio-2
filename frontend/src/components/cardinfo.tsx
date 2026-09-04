
type CardProps = {
    srcc: string
    texto: string
    texto2: string
    texto3: string
    hover: string
} 

function Card2 ({srcc, texto, texto2, texto3, hover}: CardProps) {
    

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
            <div className=" flex w-160 h-20 bg-blue-100 self-center mt-2 border rounded-2xl border-amber-50">
                <div className="mt-1.5 flex flex-col ">   
                    <p className="font-extrabold">Nota</p> 
                    <b className="font-extrabold ml-6 text-[30px]">8,93✨</b>   
                </div>
                <div className="ml-3 flex flex-col">
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                </div>
                <div className="p-6.5 flex ">
                    <p className="">Ranked #19</p>
                    <p className=" ml-4 mr-4">Popularity #125</p>
                    <p className=" ">Members 1,299,451</p>
                </div>
            </div> 
            <b className="mt-3">Sinopse</b>
            <p className="p-6 pt-0 text-start">{texto3}</p>
        </div>    
          
        </div>
    )
}

export default Card2