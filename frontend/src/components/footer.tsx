import Logo from "../assets/Anime_logo.png"
import { Link } from "react-router";

type FooterProps = {
    margin: string
}

function Footer({ margin }: FooterProps) {
    const css = "hover:underline text-[13px] hover:text-blue-400";

    return(
        <footer className={`bg-blue-600 min-w-screen ${margin} h-30 `}>
        
            <div className="flex ">
                <img src={Logo} className="h-10 w-15 m-1.25"/>
                <div className="flex gap-2 mr-30 text-amber-50 pt-2.5 justify-center w-screen">
                    <div className="flex flex-col mr-90">
                        <b className="">Navegação</b>
                        <Link to="/Inicial" className={` ${css} `} >Inicial</Link> 
                        <Link to="/Catalogo" className={` ${css} `}>Catalogo</Link> 
                        <Link to="/SobreMim" className={` ${css} `}>Sobre Mim</Link> 
                    </div>

                    <div className="flex flex-col ml-10">
                        <b>Contato</b>
                        <a className={` ${css} `} href="https://github.com/Marlon-DH" target="blank_" >GitHub | Marlon-DH</a>
                        <a className={` ${css} `} href="https://www.linkedin.com/in/marlonhermann/" target="blank_">Linkedin | Marlon Hermann</a>   
                    </div>
                    
                </div>
            </div>
        
       </footer>
    )
}

export default Footer