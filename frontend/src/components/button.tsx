import type { MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
    texto: ReactNode
    cor: string
    hover: string
    tamanho: string
    click: MouseEventHandler<HTMLButtonElement>
}

function Button({ texto, cor, hover, tamanho, click }: ButtonProps){
   return(
        <button onClick={click} className={`text-white ${cor} px-3 py-2 border border-gray-400 rounded-lg ${tamanho} ${hover} `}>
            {texto}
        </button>
    );
}

export default Button