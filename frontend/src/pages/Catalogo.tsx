import Header from "../components/header"
import Footer from "../components/footer"

import Card from "../components/carditem"
import Clannad from "../assets/Clannad.jpg"
import Kaguya from "../assets/Kaguya.webp"
import YourLie from "../assets/YourLie.jpg"
import Oregairo from "../assets/Oregairu.jpg"


function Catalogo() {

  const links =[
        {nome: "Clannad: After Story", top: "TOP 1", img: Clannad, link: 'https://myanimelist.net/anime/4181/Clannad__After_Story?q=Clannad&cat=anime' }, 
        {nome: "Yahari Ore no Seishun Love...", top: "TOP 2", img: Oregairo, link: 'https://myanimelist.net/anime/14813/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru?q=Yahari%20Ore%20no%20Seishun%20Love%20Comedy&cat=anime'},
        {nome: "Shigatsu wa Kimi no Uso", top: "TOP 3", img: YourLie, link: 'https://myanimelist.net/anime/32281/Kimi_no_Na_wa?q=Your&cat=anime  '},
        {nome: "Kaguya-sama: Love is War", top: "TOP 4", img: Kaguya, link: 'https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen?q=Kaguya-sama&cat=anime'},
  ];
  
  return (
    <main className="flex justify-center text-center flex-col ">
      <Header texto="Catálogo dos top 4 Animes de Romance!!"></Header>
      <h1 className="mt-10 text-2xl mb-3 text-blue-900 justify-self-center">Top 4 animes baseado na minha experiencia assistindo cada um</h1>
      <section className="flex justify-center flex-col ">
        <div className="flex justify-center">
        { links.map((link) => 
        (
          <Card
          srcc={link.img}
          texto={link.top}
          texto2={link.nome}
          hover="hover:border-blue-800 
                 hover:w-75 
                 hover:h-105"
          link={link.link}
        ></Card> 
        ))}
  
        </div>
       
      
      </section>
      <section className=" mt-5 border border-[1px] border-amber-100 bg-amber-50">
        <Header texto="Mais Informações"></Header>

        <div className="flex flex-col justify-self-center">
          { links.map((link) => 
        (
          <Card
          srcc={link.img}
          texto={link.top}
          texto2={link.nome}
          hover="hover:border-blue-800 
                 w-140 
                 h-105
                 mt-5"
          link={link.link}
        ></Card> 
        ))}
        </div>

      </section>
      <Footer
      margin="mt-15"
      ></Footer>
    </main>
    
  )
}

export default Catalogo