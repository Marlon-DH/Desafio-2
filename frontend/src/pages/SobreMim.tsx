import Eu from "../assets/Eu.png"

import Footer from "../components/footer";
import Header from "../components/header";

function SobreMim() {
  return (
    <main className="min-h-screen"> 
       <Header texto="Sobre Mim!"></Header> 
      <section className="flex justify-center mt-20">
        <div className="flex text-center flex-col border border-blue-300 h-auto w-70">
          <img src={Eu} className="w-70" />
          <h1>Esse sou Eu!!</h1>
        </div>
      </section>
      <Footer
      margin="mt-40"
      ></Footer>
    </main>
)
}

export default SobreMim;
