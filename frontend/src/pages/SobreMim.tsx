import Eu from "../assets/Eu.png"

import Footer from "../components/footer";
import Header from "../components/header";

function SobreMim() {
  return (
    <main > 
       <section className="flex justify-center text-center flex-col">
        <Header texto="Sobre Mim!"></Header> 
      <div className="flex justify-center mt-20">
        <div className="flex text-center flex-col border border-blue-300 h-auto w-70">
          <img src={Eu} className="w-70" />
          <h1>Esse sou Eu!!</h1>
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
