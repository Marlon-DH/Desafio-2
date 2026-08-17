import YouImg from "../assets/sky-kimionawa.gif"

import Header from "../components/header"
import Button from "../components/button"
import Footer from "../components/footer";

function Inicial() {
  return (
    <main className="min-h-screen">
      <Header texto="Bem Vindo!!!"></Header>
      <section className=" flex justify-center flex-col  ">

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
      <Footer></Footer>
    </main>
  );
}

export default Inicial;
