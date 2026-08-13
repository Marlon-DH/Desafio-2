type headerProps = {
    texto: string
}

function header({texto}: headerProps){
    return(
    <div>
        <h1 className="text-5xl font-bold text-blue-800">
            {texto}
        </h1>
    </div>    
    )
}

export default header