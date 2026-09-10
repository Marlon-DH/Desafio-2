import Eu from "../assets/Eu.png"

import Footer from "../components/footer";
import Header from "../components/header";

function SobreMim() {
  return (
    <main > 
       <section className="flex justify-center text-center flex-col">
        <Header texto="Sobre Mim!"></Header> 
        <div className="flex ml-28 mt-10">
          <div className="flex text-center items-center w-auto h-auto  rounded-lg ">
          <img src={Eu} className="w-100 h-100 border-0 rounded-[50%]" />
        </div>
        <div>
          <div className="ml-10 text-start w-130"> 
            <h1 className="text-2xl text-blue-700">Olá, meu nome é Marlon!!!</h1>
            <br />
            <p>Sou um estudante do Senac Salto/SP, do curso de TI 1.25 e estou fazendo um projeto de dev web.
            <br /><br />
            Gosto muito de Tecnologia, Jogos e Animes.
            <br /><br />
            Estou criando esse catálogo de animes porque, além de gostar muito de animes, tambem quero mostar um pouco da minha opnião dos meus romances mais amados.
            </p>
          </div>
        </div>
        </div>
       </section>
       
        <Footer
        margin="mt-40"
        ></Footer>
    </main>
)
}

export default SobreMim;
