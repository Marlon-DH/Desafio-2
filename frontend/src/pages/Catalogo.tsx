import Header from "../components/header"
import Footer from "../components/footer"

import Card from "../components/carditem"
import Clannad from "../assets/Clannad.jpg"
import Kaguya from "../assets/Kaguya.webp"
import YourLie from "../assets/YourLie.jpg"
import Oregairo from "../assets/Oregairu.jpg"
import Card2 from "../components/cardinfo"




function Catalogo() {

  const links =[
        {nome: "Clannad: After Story", top: "TOP 1", img: Clannad, link: 'https://myanimelist.net/anime/4181/Clannad__After_Story?q=Clannad&cat=anime' }, 
        {nome: "Yahari Ore no Seishun Love...", top: "TOP 2", img: Oregairo, link: 'https://myanimelist.net/anime/14813/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru?q=Yahari%20Ore%20no%20Seishun%20Love%20Comedy&cat=anime'},
        {nome: "Shigatsu wa Kimi no Uso", top: "TOP 3", img: YourLie, link: 'https://myanimelist.net/anime/32281/Kimi_no_Na_wa?q=Your&cat=anime  '},
        {nome: "Kaguya-sama: Love is War", top: "TOP 4", img: Kaguya, link: 'https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen?q=Kaguya-sama&cat=anime'},
  ];

  const clannadInfo =       [<p>Tipo: TV <br />
                        Episódios: 24 <br />
                        Status: Exibição concluída <br />
                        Exibido: 3 de outubro de 2008 a 27 de março de 2009 <br />
                        Estreou no outono de 2008. <br />
                        Transmissão: Sextas-feiras às 01:59 (JST) <br />
                        Produtores: Pony Canyon , TBS , Rakuonsha , Animation Do <br />
                        Licenciadores: Sentai Filmworks <br />
                        Estúdios: Kyoto Animation <br />
                        Fonte: Visual novel <br />
                        Gêneros: Drama , Romance <br /> 
                        Duração: 24 min. por episódio. <br /> 
                        Classificação: PG-13 - Adolescentes a partir de 13 anos </p>];

  const clannadSinopse =       [<span>
                        Tomoya Okazaki e Nagisa Furukawa se formaram no ensino médio e, juntos, vivenciam a montanha-russa emocional da adolescência. Incapaz de decidir qual  rumo dar ao seu futuro, Tomoya aprende o valor de uma forte ética de trabalho e descobre a força do apoio de Nagisa. Através da dedicação e da união de propósitos do casal, eles seguem em frente para enfrentar seus problemas pessoais, aprofundar seus relacionamentos antigos e criar novos laços.
                        <br /> <br />
                        O tempo também avança no Mundo Ilusório. Conforme as planícies esfriam com a aproximação do inverno, a Garota Ilusória e a Boneca de Lixo se deparam com uma situação difícil que revela o verdadeiro propósito do Mundo.
                        <br /> <br />
                        [Escrito por MAL Rewrite]</span>];
  


  
  return (
    <main className="flex justify-center text-center flex-col ">
      <Header texto="Catálogo dos top 4 Animes de Romance!!"></Header>
      <h1 className="mt-10 text-2xl mb-3 text-blue-900 justify-self-center">Top 4 animes baseado na minha experiencia assistindo cada um!</h1>
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
      <section className=" mt-5 bg-amber-50">
        <Header texto="Mais Informações"></Header>
        <b>(MyAnimeList)</b>

        <div className="flex flex-col justify-self-center">
          
          <Card2
          srcc={Clannad}
          texto="CLANNAD〜AFTER STORY〜"
          texto2= {clannadInfo}
          texto3= {clannadSinopse}
          hover="hover:border-blue-800 
                 w-140 
                 h-105
                 mt-5"
        ></Card2> 

        </div>

      </section>
      <Footer
      margin="mt-15"
      ></Footer>
    </main>
    
  )
}

export default Catalogo