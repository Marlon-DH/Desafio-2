import Header from "../components/header"
import Footer from "../components/footer"

import Card from "../components/carditem"
import Card2 from "../components/cardinfo"
import Clannad from "../assets/Clannad.jpg"
import Kaguya from "../assets/Kaguya.webp"
import YourLie from "../assets/YourLie.jpg"
import Oregairo from "../assets/Oregairu.jpg"
import type { ReactNode } from "react"

function Catalogo() {

  const links =[
        {nome: "Clannad: After Story", top: "TOP 1", img: Clannad, link: 'https://myanimelist.net/anime/4181/Clannad__After_Story?q=Clannad&cat=anime' }, 
        {nome: "Yahari Ore no Seishun Love...", top: "TOP 2", img: Oregairo, link: 'https://myanimelist.net/anime/14813/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru?q=Yahari%20Ore%20no%20Seishun%20Love%20Comedy&cat=anime'},
        {nome: "Shigatsu wa Kimi no Uso", top: "TOP 3", img: YourLie, link: 'https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso?q=your%20&cat=anime  '},
        {nome: "Kaguya-sama: Love is War", top: "TOP 4", img: Kaguya, link: 'https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen?q=Kaguya-sama&cat=anime'},
  ];

  return (
    <main className="flex justify-center text-center flex-col ">
      <Header texto="Catálogo dos top 4 Animes de Romance!!"></Header>
      <h1 className="mt-10 text-2xl mb-3 text-blue-900 justify-self-center">Top 4 animes baseado na minha experiencia assistindo cada um!</h1>
      <section className="flex justify-center flex-col ">
        <div className="flex justify-center">
        { links.map((linkCard) => 
        (
          <Card
          srcc={linkCard.img}
          texto={linkCard.top}
          texto2={linkCard.nome}
          hover="hover:border-blue-800 
                 hover:w-75 
                 hover:h-105"
          link={() => window.open(linkCard.link, "_blank", "noopener,noreferrer")}
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
          name="CLANNAD〜AFTER STORY〜"
          texto2={(
            <p>
              Tipo: TV <br />
              Episódios: 24 <br />
              Status: Exibição concluída <br />
              Exibido: 3 de outubro de 2008 a 27 de março de 2009 <br />
              Estreou no outono de 2008. <br />
              Transmissão: Sextas-feiras às 01:59 (JST) <br />
              Produtores: Pony Canyon, TBS, Rakuonsha, Animation Do <br />
              Licenciadores: Sentai Filmworks <br />
              Estúdios: Kyoto Animation <br />
              Fonte: Visual novel <br />
              Gêneros: Drama, Romance <br />
              Duração: 24 min. por episódio. <br />
              Classificação: PG-13 - Adolescentes a partir de 13 anos
            </p>
          ) as ReactNode}
          texto3={(
            <span>
              Tomoya Okazaki e Nagisa Furukawa se formaram no ensino médio e, juntos, vivenciam a montanha-russa emocional da adolescência. Incapaz de decidir qual rumo dar ao seu futuro, Tomoya aprende o valor de uma forte ética de trabalho e descobre a força do apoio de Nagisa. Através da dedicação e da união de propósitos do casal, eles seguem em frente para enfrentar seus problemas pessoais, aprofundar seus relacionamentos antigos e criar novos laços.
              <br /> <br />
              O tempo também avança no Mundo Ilusório. Conforme as planícies esfriam com a aproximação do inverno, a Garota Ilusória e a Boneca de Lixo se deparam com uma situação difícil que revela o verdadeiro propósito do Mundo.
              <br /> <br />
              [Escrito por MAL Rewrite]
            </span>
          ) as ReactNode}
          nota="8,93"
          ranked="#19"
          popularity="#125"
          members="1,299,778"
          hover="hover:border-blue-800"
          click='https://myanimelist.net/anime/4181/Clannad__After_Story?q=Clannad&cat=anime'
        ></Card2>

        <Card2
        srcc={Oregairo}
        name="Yahari Ore no Seishun Love Comedy"
        texto2={(
          <p>
            Tipo: TV <br />
            Episódios: 12 <br />
            Situação: Finalizou Exibição <br />
            Exibido: 10 de julho de 2020 a 25 de setembro de 2020 <br />
            Estreou: Verão 2020 <br />
            Transmissão: Sextas-feiras às 01:58 (JST) <br />
            Produtores: Entretenimento Maravilhoso‚ TBS, Movic‚ Delfi Som, NBCUniversal Entertainment Japão <br />
            Licenciadores: Filmes Sentai <br />
            Estúdios: sentir. <br />
            Fonte: Novela ligeira <br />
            Gêneros: Comédia‚ Romance <br />
            Temas: Polígono Amor‚ Escola <br />
            Duração: 24 min. por ep. <br />
            Classificação: PG-13 - Adolescentes com 13 anos ou mais
          </p>
        ) as ReactNode}
        texto3={(
          <span>
            Resolvida a se tornar uma pessoa mais independente, Yukino Yukinoshita decide suavizar as coisas com seus pais, e o primeiro passo para alcançar esse objetivo é provar a si mesma.
            <br /> <br />
            À medida que a formatura se aproxima dos alunos do terceiro ano, Iroha Isshiki—, o presidente do conselho estudantil—, solicita um baile de formatura em colaboração com o Clube de Serviço Voluntário. Yukino aceita esse pedido por vontade própria, na esperança de usá-lo como uma chance de demonstrar sua autoconfiança, mas o que está à sua frente pode ser um difícil obstáculo a atravessar.
            <br /> <br />
            Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan gira em torno do baile de formatura, enquanto as emoções são derramadas nos preparativos para o evento. Ao mesmo tempo, uma chance para os membros do Clube de Serviço Voluntário se entenderem melhor se apresenta. E assim, a agitada e agridoce vida escolar de Hachiman Hikigaya começa a chegar ao fim.
            <br /> <br />
            [Escrito por M.A.L. Rewrite]
          </span>
        ) as ReactNode}
        nota="8.35"
        ranked="#289"
        popularity="#274"
        members="834.963"
        hover="hover:border-blue-800"
        click='https://myanimelist.net/anime/14813/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru?q=Yahari%20Ore%20no%20Seishun%20Love%20Comedy&cat=anime'
        >
        </Card2>

        <Card2
        srcc={YourLie}
        name="Your lie in April"
        texto2={(
          <p>
            Tipo: TV
            Episódios: 22. <br />
            Situação: Finalizou Exibição <br />
            Exibido: 10 de out de 2014 a 20 de mar de 2015 <br />
            Estreou: Queda 2014 <br />
            Transmissão: Sextas-feiras às 01:20 (JST) <br />
            Produtores: Aniplex, Dentsu, Kodansha‚ TV Fuji‚ Lawson HMV Entretenimento‚ Kyoraku Industrial Holdings‚ TV Kansai <br />
            Licenciadores: Aniplex da América <br />
            Estúdios: Imagens A-1 <br />
            Fonte: Mangá <br />
            Gêneros: Drama‚ Romance <br />
            Temas: Polígono Amor‚ Música, Artes Cênicas‚ Escola <br />
            Demográfico: Shounen <br />
            Duração: 22 min. por ep. <br />
            Classificação: PG-13 - Adolescentes com 13 anos ou mais
          </p>
        ) as ReactNode}
        texto3={(
          <span>
            Kousei Arima é uma criança prodígio conhecida como "Metrônomo Humano" por tocar piano com precisão e perfeição. Guiado por uma mãe rigorosa e um treinamento rigoroso, Kousei domina todas as competições em que entra, ganhando a admiração de seus colegas musicais e elogios do público. Quando sua mãe falece de repente, o trauma subsequente o torna incapaz de ouvir o som de um piano, e ele nunca sobe ao palco depois disso.
            <br /> <br />
            Hoje em dia, Kousei vive uma vida tranquila e despretensiosa como estudante do ensino médio ao lado de seus amigos Tsubaki Sawabe e Ryouta Watari. Enquanto luta para superar a morte da mãe, ele continua agarrado à música. Sua vida monocromática vira de cabeça para baixo no dia em que ele encontra a excêntrica violinista Kaori Miyazono, que o coloca de volta aos holofotes como seu acompanhante. Através de uma pequena mentira, esses dois jovens músicos se aproximam enquanto Kaori tenta preencher o mundo de Kousei com cor.
            <br /><br />
            [Escrito por M.A.L. Rewrite]
          </span>
        ) as ReactNode}
        nota="8.64"
        ranked="#93"
        popularity="#24"
        members="2.457.157"
        hover="hover:border-blue-800"
        click='https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso?q=your%20&cat=anime  '
        >
        </Card2>

        <Card2
        srcc={Kaguya}
        name="Kaguya-sama wa Kokuraseta"
        texto2={(
          <p>
            Tipo: TV <br />
            Episódios: 13 <br />
            Situação: Finalizou Exibição <br />
            Exibido: 9 de Abr de 2022 a 25 de Jun de 2022 <br />
            Estreou: Primavera 2022 <br />
            Transmissão: Sábados às 00:00 (JST) <br />
            Produtores: Aniplex‚ Sistema de Radiodifusão Mainichi‚ Cápsula Mágica‚ Shueisha, JR East Marketing e Comunicações <br />
            Licenciadores: Aniplex da América <br />
            Estúdios: Imagens A-1 <br />
            Fonte: Mangá <br />
            Gêneros: Comédia‚ Romance <br />
            Tema: Escola <br />
            Demográfico: Seinen <br />
            Duração: 23 min. por ep. <br />
            Classificação: PG-13 - Adolescentes com 13 anos ou mais
          </p>
        ) as ReactNode}
        texto3={(
          <span>
            Os membros de elite do conselho estudantil da Academia Shuchiin continuam suas palhaçadas competitivas do dia-a-dia. O presidente do Conselho, Miyuki Shirogane, luta diariamente contra o vice-presidente Kaguya Shinomiya, cada um lutando com unhas e dentes para enganar o outro e fazer com que confesse seu amor romântico. Kaguya luta dentro dos limites rígidos de sua família rica e tensa, rebelando-se contra seu comportamento padrão frio enquanto se aquece com Shirogane e o resto de seus amigos.
            <br /><br />
            Enquanto isso, o tesoureiro do Conselho Yuu Ishigami sofre sob o peso de sua paixão sem esperança por Tsubame Koyasu, um popular homem de classe alta que ajuda a incutir uma nova confiança nele. Miko Iino, a mais nova membro do conselho estudantil, se aproxima mais do Ishigami, que viola as regras, enquanto se esforça para superar seu próprio código moral autoritário.
            <br /><br />
            À medida que o amor floresce ainda mais na Academia Shuchiin, os oficiais do conselho estudantil arrastam seus amigos de fora para conflitos cada vez mais cômicos.
            <br /><br />
            [Escrito por M.A.L. Rewrite]
          </span>
        ) as ReactNode}
        nota="8.95"
        ranked="#18"
        popularity="#162"
        members="1.136.173"
        hover="hover:border-blue-800"
        click='https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen?q=Kaguya-sama&cat=anime'
        >
        </Card2>
        </div>

      </section>
      <Footer
      margin="mt-15"
      ></Footer>
    </main>
    
  )
}

export default Catalogo