import YouImg from "../assets/sky-kimionawa.gif"
import Toradora from "../assets/Toradora.jpg"

import Header from "../components/header"
import Button from "../components/button"
import Footer from "../components/footer"
import Card from "../components/carditem"

function Inicial() {
  return (
    <main className="">
      <Header texto="Bem Vindo!!!"></Header>
      <section className=" flex justify-center flex-col ">

      <div className="flex justify-center mt-8">
        <h3 className="text-blue-900 mt-10">Aqui você encontra o MEU Top 4 melhores Animes de Romance</h3>
      
      </div>
      <div className=" flex justify-center">
        <Button
          texto="Ver o Top 4"
          cor="bg-blue-800"
          hover="hover:bg-blue-500"
          
        ></Button>

        <img src={YouImg} alt="SIM" className="rounded-lg" />
        
        <Button
          texto="Ver o Top 4"
          cor="bg-blue-800"
          hover="hover:bg-blue-500"
          
        ></Button>
      </div>
      <div className="flex justify-center text-center">
        <Card
          srcc={Toradora}
          texto="TOP 1 (de acordo com o GPT)"
          texto2="Toradora!"
          hover="hover:border-blue-800 
                 hover:w-75 
                 hover:h-105
                  "
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
