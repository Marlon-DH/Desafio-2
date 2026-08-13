import Header from "../components/header"
import Card from "../components/carditem"
import Clannad from "../assets/Clannad.jpg"
import Kaguya from "../assets/Kaguya.webp"
import YourLie from "../assets/YourLie.jpg"
import Oregairo from "../assets/Oregairu.jpg"

function Catalogo() {
  return (
  <main className="flex justify-center text-center flex-col">
    <Header
    texto="Catálogo dos top 4 Animes!!"
    ></Header>
    <section className="flex justify-center">
    

    <Card
      srcc={Clannad}
      texto="TOP 1"
      texto2="Clannad: After Story"
    ></Card>
    <Card
      srcc={Oregairo}
      texto="TOP 2"
      texto2="Clannad: After Story"
    ></Card>
    <Card
      srcc={YourLie}
      texto="TOP 3"
      texto2="Clannad: After Story"
    ></Card>
    <Card
      srcc={Kaguya}
      texto="TOP 4"
      texto2="Clannad: After Story"
    ></Card>
  
    </section>
  </main>
  
  )
}

export default Catalogo;
