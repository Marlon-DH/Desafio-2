

import YouImg from "../assets/sky-kimionawa.gif"

import Header from "../components/header"
import Button from "../components/button";

function Inicial() {
  return (
    <main className=" ">
      <section className=" flex flex-col items-center  min-h-screen">
        <Header texto="Bem Vindo!!!"></Header>
      
      <div className="flex justify-center mt-8">
        <h3 className="text-blue-900 mt-10">Aqui você encontra o Top 4 melhores Animes de Romance</h3>
      
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
      </section>
    </main>
  );
}

export default Inicial;
