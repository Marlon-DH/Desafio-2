import Header from "../components/header"
import Footer from "../components/footer"

import Card from "../components/carditem"
import Clannad from "../assets/Clannad.jpg"
import Kaguya from "../assets/Kaguya.webp"
import YourLie from "../assets/YourLie.jpg"
import Oregairo from "../assets/Oregairu.jpg"

function Catalogo() {
  return (
    <main className="flex justify-center text-center flex-col ">
      <Header texto="Catálogo dos top 4 Animes de Romance!!"></Header>
      <section className="flex justify-center flex-col ">
        <div className="flex justify-center">
           <Card
          srcc={Clannad}
          texto="TOP 1"
          texto2="Clannad: After Story"
        ></Card>
        <Card
          srcc={Oregairo}
          texto="TOP 2"
          texto2="Yahari Ore no Seishun Love Comedy wa Machigatteiru"
        ></Card>
        <Card
          srcc={YourLie}
          texto="TOP 3"
          texto2="Shigatsu wa Kimi no Uso"
        ></Card>
        <Card
          srcc={Kaguya}
          texto="TOP 4"
          texto2="Kaguya-sama: Love is War"
        ></Card>
        </div>
       
      
      </section>
      <Footer></Footer>
    </main>
    
  )
}

export default Catalogo;
