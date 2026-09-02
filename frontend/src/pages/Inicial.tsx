import YouImg from "../assets/sky-kimionawa.gif"
import Toradora from "../assets/Toradora.jpg"

import Header from "../components/header"
import Button from "../components/button"
import Footer from "../components/footer"
import Card from "../components/carditem"
import { Link } from "react-router"

function Inicial() {
  return (
    <main className="">
      <Header texto="Bem Vindo!!!"></Header>
      <section className=" flex justify-center flex-col ">

      <div className="flex-col justify-center mt-8">
        <h1 className="text-blue-900 justify-self-center text-3xl">Esse é o melhor site de animes do Brasil!!</h1>
        <p className="text-blue-900 justify-self-center mt-2">Aqui você encontra o MEU Top 4 melhores Animes de Romance</p>
        
      </div>
      <div className=" flex justify-center">
        <Button
          texto={<Link to="/Catalogo" >Ver o top 4</Link>}
          cor="bg-blue-800"
          hover="hover:bg-blue-500"
          
        ></Button>

        <img src={YouImg} alt="SIM" className="rounded-lg" />
        
        <Button
          texto={<Link to="/Catalogo" >Ver o top 4</Link>}
          cor="bg-blue-800"
          hover="hover:bg-blue-500"
          
        ></Button>
      </div>
      <div className="mt-10 flex justify-center text-center">
        <Card
          srcc={Toradora}
          texto="TOP 1 (de acordo com o GPT)"
          texto2="Toradora!"
          hover="hover:border-blue-800 
                 hover:w-75 
                 hover:h-105
                  "
          link="https://myanimelist.net/anime/4224/Toradora?q=Torad&cat=anime"  
        ></Card>
      </div>
      </section>
      <Footer
       margin="mt-10"
      ></Footer>
    </main>
  );
}

export default Inicial;
