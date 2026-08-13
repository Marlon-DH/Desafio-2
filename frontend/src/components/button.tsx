type ButtonProps = {
    texto: string
    cor: string
    hover: string
}

function Button({ texto, cor, hover }: ButtonProps){
   return(
        <button className={`text-white ${cor} px-3 py-2 border border-gray-400 rounded-lg ${hover} `}>
            {texto}
        </button>
    );
}

export default Button